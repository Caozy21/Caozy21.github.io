import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
  title: 'About | Zhuoya Cao',
  description: 'Learn about Zhuoya Cao, a B.Sc. Astronomy student from China, her background, research interests, and professional goals.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionContainer>
        <PageHeader
          title="About Me"
          description="Learn about my journey, interests and pursuit on the playground of astronomy."
        />

        <AboutContent />
      </SectionContainer>
    </div>
  );
}