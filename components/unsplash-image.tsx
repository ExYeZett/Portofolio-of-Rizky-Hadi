'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { cn } from '@/lib/utils'

/**
 * UnsplashImage
 * -------------
 * Fetches a contextually relevant image from the Unsplash API based on a
 * keyword `query`. Gracefully degrades to a bundled local fallback image when:
 *   - No NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is configured
 *   - The network request fails
 *   - The Unsplash API returns no results
 *
 * To enable live Unsplash fetching, add NEXT_PUBLIC_UNSPLASH_ACCESS_KEY to your
 * project's environment variables. Without it, the component silently uses the
 * provided `fallbackSrc`, so the UI always looks complete.
 */

const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

type UnsplashResult = {
  urls: { regular: string; small: string }
  alt_description: string | null
  user: { name: string }
}

const fetcher = async (url: string): Promise<UnsplashResult> => {
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  })
  if (!res.ok) throw new Error('Unsplash request failed')
  const data = await res.json()
  const result = data?.results?.[0]
  if (!result) throw new Error('No Unsplash results')
  return result
}

type Props = {
  query: string
  fallbackSrc: string
  alt: string
  className?: string
  imgClassName?: string
}

export function UnsplashImage({
  query,
  fallbackSrc,
  alt,
  className,
  imgClassName,
}: Props) {
  const [errored, setErrored] = useState(false)

  const { data } = useSWR(
    ACCESS_KEY
      ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query,
        )}&orientation=landscape&per_page=1&content_filter=high`
      : null,
    fetcher,
    { revalidateOnFocus: false, shouldRetryOnError: false },
  )

  const remoteSrc = !errored && data?.urls?.regular
  const src = remoteSrc || fallbackSrc

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || '/placeholder.svg'}
        alt={data?.alt_description || alt}
        crossOrigin="anonymous"
        loading="lazy"
        onError={() => setErrored(true)}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700',
          imgClassName,
        )}
      />
    </div>
  )
}
