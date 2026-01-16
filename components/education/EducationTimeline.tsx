'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Mic, ImageIcon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const educationData = [
  {
    id: 1,
    degree: 'Research Assistant in Astronomy',
    institution: 'Westlake University',
    location: 'Hangzhou, China',
    period: 'Jun 2025 - Present',
    description: 'Specializing in theoretical and simulation astronomy with focus on dynamics of planetary systems. Conducting research on evolution of protoplanetary disks and AGN accretion disks.',
    achievements: [
      'Proficient in hydrodynamic simulations using Athena++ and N-body simulations using REBOUND/REBOUNDx',
      'Two papers in planetary dynamics published/accepted and one under review'
      ],
    publications: [
      {
        text: 'Zhuoya Cao, Yaping Li*, Douglas N.C. Lin, Shude Mao, Planet Migration in Protoplanetary Disks with Rims, under review by the Astrophysical Journal, arXiv:2511.21328.',
        link: 'http://arxiv.org/abs/2511.21328'
      },
      {
        text: 'Xiaochen Zheng, Zhuoya Cao*, Shigeru Ida, Douglas N.C. Lin, Shude Mao, A Robust Launching Mechanism for Freely-Floating Planets from Host Stars with Close-in Planets, accepted by the Astrophysical Journal, arXiv:2601.09835.',
        link: 'https://arxiv.org/abs/2601.09835'
      },
      {
        text: 'Zhuoya Cao, Jiamu Huang, Douglas N.C. Lin, Tingtao Zhou, Prolific Nitrogen Production and Metallicity Gradient in AGN Accretion Disk, in preparation.',
        link: ''
      }
      ],
    talks: [
      {
        text: 'Planet Migration in Protoplanetary Disks with Rims',
        link: 'https://youtu.be/oT3XJJG4kk4'
      },
      {
        text: 'A Robust Launching Mechanism for Freely-Floating Planets from Host Stars with Close-in Planets',
        link: 'https://youtu.be/slES5eiAJCc'
      }
      ],
    posters: [
      'Zhuoya Cao, Yaping Li, Douglas N.C. Lin, Shude Mao, Planet Migration in Protoplanetary Disks with Rims. The International Conference on Exoplanets and Planet Formation, Dec 2025, Shanghai, China.',
      'Zhuoya Cao, Yaping Li, Douglas N.C. Lin, Shude Mao, Convergent and Divergent Planet Migration Driven by a Dead Zone in Protoplanetary Disks. The 247th AAS Annual Meeting, Jan 2026, Phoenix, United States.'
    ]
  },
  {
    id: 2,
    degree: 'B.Sc. in Mechanics and Astronomy',
    institution: 'Tsinghua University',
    location: 'Beijing, China',
    period: 'Aug 2021 - Jun 2025',
    description: 'Comprehensive foundation in astronomy and dynamics, incl. fluid mechanics and N-body dynamics.',
    achievements: [
      'Full GPA for astronomy courses (4.0/4.0)',
      'Scholarship for Comprehensive Excellence of Tsinghua University',
      'Tsinghua Xuetang Scholarship (for Tsien Excellence Program)',
      'Minister of Sports, Student Union of Xingjian College',
      'Undergraduate research project on planetary dynamics and super resolution',
      ],
    publications: [
      {
        text: 'Zhuoya Cao*, Abraham Loeb, Morgan MacLeod, On the coincidence between the close passage of HD7977 and the Pliocene-Pleistocene transition, Scientific Reports 16, 115 (2026).',
        link: 'https://www.nature.com/articles/s41598-025-29033-y'
      },
      {
        text: 'Zhuoya Cao, Fujiang Yu, Mingyu Li, Zheng Cai*, HST to JWST Super-Resolution Imaging by ControlNet, in preparation.',
        link: ''
      }
    ],
    talks: [
      {
        text: 'On the coincidence between the close passage of HD7977 and the Pliocene-Pleistocene transition',
        link: 'https://youtu.be/ZfS1Fp7Nnho'
      }
    ],
    posters: [
      'Zhuoya Cao, Abraham Loeb, Morgan MacLeod, A Comet Shower at the Pliocene-Pleistocene Transition Triggered by the Close Approach of HD7977. The Annual Meeting of the Earth 2.0 Space Mission, Aug 2025, Shanghai, China.'
    ]
  },
  {
    id: 3,
    degree: 'Exchange Undergraduate in Astronomy',
    institution: 'Kyoto University',
    location: 'Kyoto, Japan',
    period: 'Sep 2023 - Feb 2024',
    description: 'Complement fundation in astronomy from cosmology, stellar physics to planetary physics',
    achievements: [
      'Undergraduate research intern on astronomical image reduction from Seimei telescope'
    ],
    publications: [
    ],
    talks: [
    ],
    posters: [
    ]
  }
];

interface publicationProps {
  text: string;
  link: string | null;
}

interface talkProps {
  text: string;
  link: string | null;
}

export default function EducationTimeline() {

// 💡 辅助渲染函数：用于 Publications 和 Talks 的结构化列表项
  const renderStructuredItem = (
    item: publicationProps | talkProps, 
    type: 'Publication' | 'Talk' | 'Poster', // 传入类型标签
    i: number
  ) => {
    // 检查 link 属性是否为真值（非 null, 非 undefined, 且非空字符串）
    const hasLink = item.link && item.link.trim() !== '';

    return (
      <li key={i}>
        <span className="text-muted-foreground text-base">
          {/* 1. 完整文本内容 */}
          {item.text}

          {/* 2. 只有在有链接时才显示 [link] 超链接 */}
          {hasLink && (
            <Link
              href={item.link as string} // TypeScript 认为 link 不为 null
              target="_blank"
              rel="noopener noreferrer"
              // ml-2 用于分隔文本和 [link] 标签
              // text-primary 用于保持链接颜色，并提供 hover 效果
              className="ml-2 text-primary hover:text-primary/80 transition-colors inline-flex items-center"
            >
              [link]
              <ExternalLink className="ml-1 h-3 w-3" /> 
            </Link>
          )}

        </span>
      </li>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {educationData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 last:mb-0"
        >
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.institution}, {item.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    Achievements
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground mb-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {item.publications && item.publications.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" /> {/* 🌟 新图标 */}
                      Publications
                    </h4>
                    <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground text-base">
                      {item.publications.map((publication, i) => (
                        renderStructuredItem(publication, 'Publication', i)
                      ))}
                    </ul>
                  </div>
                )}

                {item.talks && item.talks.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Mic className="w-4 h-4 mr-2 flex-shrink-0" /> {/* 🌟 新图标 */}
                      Talks
                    </h4>
                    <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground text-base">
                      {item.talks.map((talk, i) => (
                        renderStructuredItem(talk, 'Talk', i)
                      ))}
                    </ul>
                  </div>
                )}

                {item.posters && item.posters.length > 0 && (
                  <div> 
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <ImageIcon className="w-4 h-4 mr-2 flex-shrink-0" /> {/* 🌟 新图标 */}
                      Posters
                    </h4>
                    <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground text-base">
                      {item.posters.map((poster, i) => (
                        <li key={i}>{poster}</li> 
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}