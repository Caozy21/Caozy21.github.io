// Add a category here, then put its Markdown files in content/learning/<slug>/.
export const learningCategories = [
  {
    slug: 'radiation',
    title: 'Radiation',
    description: 'Light, matter, and the radiative processes that connect them.',
    image: '/AGNdisk.jpg',
  },
  {
    slug: 'extragalactic',
    title: 'Extragalactic',
    description: 'Galaxies, their evolution, and the universe beyond the Milky Way.',
    image: '/galaxy.jpg',
  },
  {
    slug: 'dynamics',
    title: 'Dynamics',
    description: 'Gravity, orbital motion, and the evolution of astronomical systems.',
    image: '/solar_system.jpg',
  },
];

export type LearningCategory = (typeof learningCategories)[number];

export interface LearningNoteSummary {
  slug: string;
  title: string;
  description: string;
  date: string | null;
  tags: string[];
  order: number;
  readingMinutes: number;
}

export function formatNoteDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
