import type { Metadata } from 'next';
import LearningHome from '@/components/learning/LearningHome';
export const metadata: Metadata = {
  title: 'Learning | Zhuoya Cao',
  description: '天文学学习笔记：辐射、河外天文学与动力学。',
  alternates: { languages: { 'zh-CN': '/learning', en: '/learning/en' } },
};
export default function LearningPage() { return <LearningHome />; }
