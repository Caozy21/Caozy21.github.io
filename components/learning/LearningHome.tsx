import LanguageSwitch from './LanguageSwitch';
import { learningPath, learningLabels, type LearningLanguage } from '@/lib/learning-language';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import SectionContainer from '@/components/common/SectionContainer';
import LearningAnimation from '@/components/learning/LearningAnimation';
import { learningCategories } from '@/lib/learning-categories';
import { getLearningNotes } from '@/lib/learning';


export default function LearningHome({ language = 'zh' }: { language?: LearningLanguage }) {
  const labels = learningLabels[language];
  return (
    <div className="pt-24" lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <SectionContainer>
        <LanguageSwitch language={language} />
        <PageHeader title={language === 'zh' ? 'Learning · 学习笔记' : 'Learning'} description={labels.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningCategories.map((category, index) => {
            const count = getLearningNotes(category.slug, language).length;
            return (
              <LearningAnimation key={category.slug} index={index} className="h-full">
                <Link href={learningPath(language, category.slug)} className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={category.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-bold mb-2">{language === 'zh' ? `${category.titleZh} · ${category.title}` : category.title}</h2>
                    <p className="text-muted-foreground mb-6">{language === 'zh' ? category.descriptionZh : category.description}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground"><BookOpen className="h-4 w-4" />{count} {language === 'en' && count === 1 ? 'note' : labels.notes}</span>
                      <span className="flex items-center gap-1 font-medium">{labels.explore} <ArrowRight className="h-4 w-4" /></span>
                    </div>
                  </div>
                </Link>
              </LearningAnimation>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
