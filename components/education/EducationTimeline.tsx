'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const educationData = [
  {
    id: 1,
    degree: 'Research Assistant in Astronomy',
    institution: 'Westlake University',
    location: 'Hangzhou, China',
    period: 'Jun 2025 - Present',
    description: 'Specializing in theoretical astronomy with focus on dynamics of planetary systems. Conducting research on evolution of protoplanetary disks.',
    achievements: [
      'Poster presented at 2025 Science Meeting of the Earth 2.0 Apace Mission',
      'Posters to be presented at the 2025 International Conference on Exoplanets and Planet Formation & the 247th AAS Meeting',
      'Two papers in planetary dynamics under review and one accepted'
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
      'Undergraduate research project on planetary dynamics and super resolution'
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
    ]
  }
];

export default function EducationTimeline() {
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
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}