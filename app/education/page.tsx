import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import EducationTimeline from '@/components/education/EducationTimeline';

export const metadata: Metadata = {
	title: 'Education | Zhuoya Cao',
	description: 'Explore Zhuoya Cao\'s academic journey, qualifications, and achievements in the field of astronomy.',
};

export default function EducationPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Education"
					description="My academic journey and qualifications in the field of astronomy."
				/>

				<EducationTimeline />
			</SectionContainer>
		</div>
	);
}