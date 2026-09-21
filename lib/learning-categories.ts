// Add a category here, then put its Markdown files in content/learning/<slug>/.
export const learningCategories = [
  {
    slug: 'radiation',
    title: 'Radiation',
    titleZh: '辐射',
    descriptionZh: '光、物质，以及连接它们的辐射过程。',
    description: 'Light, matter, and the radiative processes that connect them.',
    image: '/AGNdisk.jpg',
  },
  {
    slug: 'extragalactic',
    title: 'Extragalactic',
    titleZh: '河外天文学',
    descriptionZh: '星系、星系演化，以及银河系之外的宇宙。',
    description: 'Galaxies, their evolution, and the universe beyond the Milky Way.',
    image: '/galaxy.jpg',
  },
  {
    slug: 'dynamics',
    title: 'Dynamics',
    titleZh: '动力学',
    descriptionZh: '引力、轨道运动与天体系统的演化。',
    description: 'Gravity, orbital motion, and the evolution of astronomical systems.',
    image: '/solar_system.jpg',
  },
];

export type LearningCategory = (typeof learningCategories)[number];

export interface LearningNoteSummary {
  slug: string;
  title: string;
  alternateTitle: string | null;
  englishAvailable: boolean;
  description: string;
  date: string | null;
  tags: string[];
  order: number;
  readingMinutes: number;
}

export function formatNoteDate(date: string, language: 'zh' | 'en' = 'zh') {
  return new Intl.DateTimeFormat(language === 'zh' ? 'zh-CN' : 'en', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
