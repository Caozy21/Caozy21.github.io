import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import CertificateGrid from '@/components/posts/CertificateGrid';

export const metadata: Metadata = {
	title: 'Posts | Zhuoya Cao',
	description: 'View posts by Zhuoya Cao as a young astronomy scholar.',
};

export default function CertificatesPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Posts"
					description="My vivid record about my academic journey."
				/>

				<CertificateGrid />
			</SectionContainer>
		</div>
	);
}