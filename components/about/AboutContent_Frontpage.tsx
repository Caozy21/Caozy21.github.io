'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Book, FlaskRound as Flask, Heart } from 'lucide-react';
import CVButton from '@/components/common/CVButton';

export default function AboutContent() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="relative rounded-lg overflow-hidden shadow-xl">
					<Image
						src="./Home.jpg"
						alt="Zhuoya Cao"
						width={600}
						height={800}
						className="object-cover w-full h-[500px]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
					<div className="absolute bottom-0 left-0 p-6">
						<h3 className="text-xl font-semibold mb-2">Zhuoya Cao</h3>
						<p className="text-muted-foreground">B.Sc. Astronomy Student</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className="space-y-6"
			>
				<h2 className="text-3xl font-bold mb-6">About Me</h2>

				<p className="text-muted-foreground">
					Hello! I'm Zhuoya Cao, currently a research assistant in the Division of Astronomy at Westlake University, China. Prior to this, I obtained my B.Sc. from Tsinghua University, China, majoring in Mechanics and minoring in Astronomy.
				</p>

				<p className="text-muted-foreground">
					My research interest lies in dynamics of planetary systems, including rich interactions between a planet and other planets, stellar flybys, and protoplanetary disks. I am currently working with Prof. Shude Mao and Prof. Douglas N.C. Lin on simulations and theories of planetary systems.
				</p>

				{/* <p className="text-muted-foreground">
					My fate with astronomy began in junior high years with the microfilm of "Journal to the Stars", a story about a boy chasing his dream of becoming an astrophysicist. I was fascinated by the world inside the telescope that most people may never see or imagine. I did not have the chance to buy a telescope then, but the starry night sky somehow rooted astrophysics in my heart. I went for physics Olympics in high school, and was later studying mechanics in Tsinghua with astronomy as my minor. 
				</p>

				<p className="text-muted-foreground">
					In my undergraduate years, I participated in multiple research projects from N-body dynamics in solar system to hydrodynamics in protoplanetary disks -- enjoying a taste combining mechanics and astronomy contexts. I awed at how most basic mechanics principles could be applied to understand the complex dynamics of solar system, Oort cloud and protoplanetary disks.
				</p>

				<p className="text-muted-foreground">
					Thanks to my brilliant advisors and precious fellowship, I had the opportunity to intern at Harvard Center for Astrophysics in 2024 fall with Prof. Avi Loeb, and do research assistantship at Westlake University in 2025 with Prof. Shude Mao and Prof. Doug Lin. I also went to the ET 2.0 Conference, Shanghai to present my work on Oort cloud dynamics. These experiences helped me to see a broader astronomy society beyond my computer and sharpen my research skills as a young astronomer.
				</p>

				<p className="text-muted-foreground">
					In my part time, I am a fan of singing, nice food and traveling. I am also a beginner in photography and Japanese. I enjoy exploring new things and challenging myself.
				</p> */}
				<div className="grid grid-cols-2 gap-4 my-8">
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Flask className="h-10 w-10 text-chart-1 mb-2" />
						<h3 className="font-medium">Research</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Book className="h-10 w-10 text-chart-2 mb-2" />
						<h3 className="font-medium">Learning</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Award className="h-10 w-10 text-chart-3 mb-2" />
						<h3 className="font-medium">Excellence</h3>
					</div>
					<div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-sm">
						<Heart className="h-10 w-10 text-chart-4 mb-2" />
						<h3 className="font-medium">Passion</h3>
					</div>
				</div>

				<p className="text-muted-foreground">
					I'm currently seeking graduate positions to apply my knowledge and skills in a professional research environment where I can continue to grow and make meaningful contributions to the field of astronomy.
				</p>

				<CVButton />
			</motion.div>
		</div>
	);
}