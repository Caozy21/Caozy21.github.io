export type LearningLanguage = 'zh' | 'en';
export const learningPath = (language: LearningLanguage, ...segments: string[]) =>
  ['/learning', ...(language === 'en' ? ['en'] : []), ...segments].join('/');

export const learningLabels = {
  zh: { subtitle: '天文学学习中的笔记、思考与发现。', topics: '全部学习主题', explore: '阅读笔记', notes: '篇笔记', search: '搜索中英文标题、简介或标签…', empty: '笔记正在准备中', emptyDescription: '更多学习笔记即将更新。', noResults: '没有找到匹配的笔记。', clear: '清除搜索', toc: '本页目录', previous: '上一篇', next: '下一篇', back: '返回', minutes: '分钟阅读' },
  en: { subtitle: 'Notes, ideas, and discoveries from my ongoing study of astronomy.', topics: 'All learning topics', explore: 'Explore notes', notes: 'notes', search: 'Search Chinese or English titles, descriptions, or tags…', empty: 'Notes are on their way', emptyDescription: 'More study notes are coming soon.', noResults: 'No notes match your search.', clear: 'Clear search', toc: 'On this page', previous: 'Previous note', next: 'Next note', back: 'Back to', minutes: 'min read' },
};

// Titles remain bilingual even when a future note is awaiting a full translation.
export const englishNoteTitles: Record<string, string> = {
  'ast1440-radiative-transfer-exercises-1-1-to-1-4': 'AST1440: Radiative Transfer Fundamentals and Problems 1.1–1.4',
  'ast1440-electron-scattering-eddington-luminosity-magnetic-fields': 'AST1440: Electron Scattering, Eddington Luminosity, and Strong Magnetic Fields',
  'ast1440-thermal-radiation-observations-exercises-1-3-1-5-1-6': 'AST1440: Thermal Radiation and Observations — Lecture Notes and Problems 1.3, 1.5, and 1.6',
  'ast2040-lecture-1-cosmic-history-and-galaxy-formation': 'AST2040 Lecture 1: Cosmic Evolution from the Early Universe to Galaxy Formation',
  'loss-cone-orbital-geometry-diffusion-dissipation': 'Loss Cones: From Orbital Geometry to Diffusion, Stellar Cusps, and Disk Dissipation',
};
