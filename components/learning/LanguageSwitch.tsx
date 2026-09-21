import Link from 'next/link';
import { Languages } from 'lucide-react';
import { learningPath, type LearningLanguage } from '@/lib/learning-language';

export default function LanguageSwitch({ language, segments = [], englishAvailable = true }: {
  language: LearningLanguage; segments?: string[]; englishAvailable?: boolean;
}) {
  return <nav aria-label="学习笔记语言 / Note language" className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card p-4 sm:px-5">
    <div className="flex items-center gap-3"><Languages className="h-5 w-5 shrink-0" aria-hidden="true" /><div>
      <p className="text-sm font-semibold">{language === 'zh' ? '中英文学习库' : 'Bilingual learning library'}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{language === 'zh' ? '中文原文 · AI 英文译本' : 'Chinese originals · AI English translations'}</p>
    </div></div>
    <div className="inline-flex rounded-lg border bg-muted p-1 text-sm font-medium">
      {(['zh', 'en'] as const).map(option => option === 'en' && !englishAvailable
        ? <span key={option} aria-disabled="true" title="Translation not yet available" className="rounded-md px-4 py-2 opacity-40">English（待译）</span>
        : <Link key={option} href={learningPath(option, ...segments)} hrefLang={option === 'zh' ? 'zh-CN' : 'en'} lang={option === 'zh' ? 'zh-CN' : 'en'} aria-current={language === option ? 'page' : undefined} className={`rounded-md px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${language === option ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>{option === 'zh' ? '中文' : 'English'}</Link>)}
    </div>
  </nav>;
}
