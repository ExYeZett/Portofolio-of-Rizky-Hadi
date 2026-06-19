export const profile = {
  name: 'Muhammad Rizky Hadi Prawiro',
  role: 'AI/ML Engineer',
  tagline:
    'Building intelligent, real-world systems with machine learning, clean data pipelines, and rigorous model evaluation.',
  email: 'rizkyprawiro81@gmail.com',
  phone: '+62 878-2690-1926',
  linkedin: 'linkedin.com/in/rizky-hadi-prawiro',
  github: 'github.com/ExYeZett',
}

export const about = {
  description:
    'Mahasiswa S1 Teknologi Informasi Telkom University Jakarta dengan minat mendalam pada bidang Artificial Intelligence dan Machine Learning. Memiliki pengalaman dalam membangun model klasifikasi menggunakan algoritma seperti Random Forest, K-Nearest Neighbors, dan Naive Bayes berbasis Python. Terbiasa melakukan data preprocessing, feature engineering, serta evaluasi model menggunakan teknik cross-validation dan metrik klasifikasi untuk memastikan performa model yang optimal. Memiliki kemampuan analitis dan problem-solving yang baik, serta antusias dalam mengembangkan sistem berbasis AI yang dapat diimplementasikan pada solusi real-world.',
  education: {
    degree: 'S1 Teknologi Informasi',
    school: 'Telkom University Jakarta',
    period: '2023 - 2027',
  },
  gpa: '3.84 / 4.00',
  organizations: [
    'Research & Development at CoE Artificial Intelligence for Learning and Optimization (AILO)',
    'Member of Google Developer Group on Campus Telkom University Jakarta',
  ],
}

export type Stat = {
  label: string
  value: number
  suffix?: string
  decimals?: number
  display?: string
}

export const stats: Stat[] = [
  { label: 'GPA / 4.00', value: 3.84, decimals: 2 },
  { label: 'ML Projects Shipped', value: 2, suffix: '+' },
  { label: 'Best Model Accuracy', value: 94, suffix: '%' },
  { label: 'IEEE Publication', value: 1 },
]

export const technicalSkills = [
  { name: 'Python', level: 92 },
  { name: 'Machine Learning Modeling', level: 88 },
  { name: 'Data Preprocessing', level: 90 },
  { name: 'Feature Engineering', level: 85 },
  { name: 'Roboflow', level: 78 },
  { name: 'Figma', level: 80 },
  { name: 'Excel', level: 82 },
  { name: 'Canva', level: 85 },
  { name: 'Capcut', level: 75 },
]

export const softSkills = [
  'Kolaborasi',
  'Adaptabilitas',
  'Komunikasi',
  'Manajemen Waktu',
  'Berpikir Kritis',
]

export type Project = {
  title: string
  stack: string[]
  details: string
  link: string
  image: string
  query: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    title: 'URL Phishing Detection System',
    stack: ['Python', 'Machine Learning', 'Random Forest', 'Discord Bot'],
    details:
      'Mengembangkan sistem deteksi URL phishing berbasis Random Forest untuk mengklasifikasikan URL berdasarkan fitur strukturalnya. Melakukan preprocessing, feature extraction, dan evaluasi, lalu diintegrasikan ke dalam Discord Bot untuk deteksi dan peringatan otomatis secara real-time.',
    link: 'https://github.com/ExYeZett/url-phishing-detection-random-forest',
    image: 'https://cdn.discordapp.com/attachments/531412815580364802/1517183830778318961/image.png?ex=6a36ac8d&is=6a355b0d&hm=f18bb35b9897cff74cd365dad3adca486e9e23de40a5823ad87813059755c6f7&',
    query: 'cyber-security',
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Precision', value: '95%' },
      { label: 'Recall', value: '92%' },
      { label: 'F1-Score', value: '94%' },
    ],
  },
  {
    title: 'Air Quality Classification Model',
    stack: ['Python', 'Machine Learning', 'KNN', 'Naive Bayes'],
    details:
      'Melakukan Exploratory Data Analysis (EDA) untuk mengidentifikasi distribusi variabel lingkungan dan menemukan ketidakseimbangan kelas (Good 40%, Moderate 30%, Poor 20%, Hazardous 10%). Membangun model klasifikasi KNN dan Naive Bayes menggunakan cross-validation untuk otomatisasi klasifikasi kualitas udara.',
    link: 'https://github.com/ExYeZett/air-quality-classification-ml',
    image: 'https://cdn.discordapp.com/attachments/531412815580364802/1517576265257975808/26-facts-about-air-quality-1726110200.png?ex=6a36c888&is=6a357708&hm=965281c5fdc1b41f17269d891e75ccffef27071b528457deb308903e44be9c5c&',
    query: 'air-quality',
    metrics: [
      { label: 'KNN (k=9)', value: '90.25%' },
      { label: 'Classes', value: '4' },
      { label: 'Method', value: 'CV' },
    ],
  },
]

export const publication = {
  title:
    'ARPY: Enhancing Novice Python Comprehension by Addressing Learning Difficulties through Design-Focused, Interactive Augmented Reality Visualization',
  venue:
    'Published in IEEE — International Conference on Software Engineering and Information Technology (December 2025)',
  description:
    'Penelitian kolaboratif yang mengintegrasikan teknologi Augmented Reality (AR) menggunakan Vuforia & Unity dengan metode User-Centered Design (UCD) untuk memvisualisasikan konsep abstrak pemrograman Python (logika percabangan & struktur data). Pengujian kegunaan menggunakan System Usability Scale (SUS) menghasilkan skor 70.25 dari 32 partisipan lintas latar belakang.',
  link: 'https://ieeexplore.ieee.org/document/11290904',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publication', href: '#publication' },
  { label: 'Contact', href: '#contact' },
]
