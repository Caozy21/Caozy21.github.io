import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import CertificateGrid from '@/components/certificates/CertificateGrid';

export const metadata: Metadata = {
	title: 'Certificates | Zhuoya Cao',
	description: 'View academic and professional certificates earned by Zhuoya Cao as a young scholar.',
};

export default function CertificatesPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Certificates"
					description="Academic certifications and awards showcasing my expertise and continuous learning in science."
				/>

				<CertificateGrid />
			</SectionContainer>
		</div>
	);
}