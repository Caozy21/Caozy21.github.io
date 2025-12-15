import { Metadata } from 'next';
import SectionContainer from '@/components/common/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/lib/constants';

export const metadata: Metadata = {
	title: 'Research | Zhuoya Cao',
	description: 'Explore the research projects and laboratory work conducted by Zhuoya Cao in the field of astronomy.',
};

export default function ProjectsPage() {
	return (
		<div className="pt-24">
			<SectionContainer>
				<PageHeader
					title="Research Projects"
					description="Explore my research projects in the field of astronomy and beyond."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							date={project.date}
							collaborators={project.collaborators}
							link={project.link}
							videolink={project.videolink}
							index={index}
						/>
					))}
				</div>
			</SectionContainer>
		</div>
	);
}