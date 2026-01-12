'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const certificates = [
  {
    id: 1,
    title: 'Grand Science Meeting at AAS 247 Phoenix!',
    issuer: 'The 247th American Astronomical Society (AAS) Winter Meeting',
    date: 'January 8th, 2026',
    description: 'Greatly privileged to attend the 247th AAS Winter Meeting and present my recent work on planet migration on protoplanetary disks! So excited to connect with many fellow researchers working in same or different subfields, and meet new and old friends in astronomy. Did not feel so close to the astronomy frontier before. Collected brilliant ideas as well as lots of souvenirs as great memories from AAS 247 Phoenix:)',
    imageUrl: './AASconference.jpg',
    credential: 'CERT-AOC-2023-1234'
  },
  {
    id: 2,
    title: 'Presenting at ICEPF 2025!',
    issuer: 'International Conference on Exoplanets and Planet Formation (ICEPF)',
    date: 'December 8th, 2025',
    description: 'Honored to present my research on "Planet Migration in Protoplanetary Disks with Rims" at the International Conference on Exoplanets and Planet Formation (ICEPF)! Unprecedented experience to meet many experts in the near field, share great ideas and learn about the latest advancements in exoplanet detection and planetary systems. Looking forward to future contributions in this exciting field of astronomy!',
    imageUrl: './ICEPFconference.jpg',
    credential: 'CERT-AOC-2023-1234'
  },
  {
    id: 3,
    title: '\'Hello world\' from Westlake Astronomy',
    issuer: 'At the inauguration ceremony of Westlake Department of Astronomy',
    date: 'October 18th, 2025',
    description: 'Thrilled to be part of the inauguration ceremony of Department of Astronomy at Westlake University! As a volunteer for the event, I am honored and excited to meet distinguished guests including Prof. Doug Lin, Prof. Shigeru Ida, Prof. Ewine van Dishoeck, Prof. Brian Schmidt! Rewarding and unforgettable to chat with the great minds in astronomy. Go Westlake Astronomy!',
    imageUrl: './Westlake_inauguration.jpg',
    credential: 'CERT-AOC-2023-1234'
  },
  {
    id: 4,
    title: 'Cheer for the ET conference!',
    issuer: 'My first academic conference adventure',
    date: 'August 10th, 2025',
    description: 'Happy to attend the annual meeting of the Earth 2.0 (ET) space mission at Shanghai, China. Met experts in the field and learned about the latest advancements in microlensing, planetary dynamics and beyond. Proud to share my research about Oort cloud comets dynamics at the poster session. Excited to connect with fellow researchers for space exploration -- the future is bright! \n \n P.S. love the food in Shanghai!',
    imageUrl: './ETconference.jpg',
    credential: 'CERT-AOC-2023-1234'
  },
  {
    id: 5,
    title: 'Starting my journey at Westlake University',
    issuer: 'Research like a "pro" in an international environment as a research assistant',
    date: 'Jun 29th, 2025',
    description: 'Just launched my research internship at Westlake University as a research assistant! Super excited to work with Prof. Shude Mao and Prof. Douglas Lin on dynamics in a viscous protoplanetary disk. Expecting a fruitful year of learning and growth in this vibrant academic environment. \n \n Looking forward to contributing to cutting-edge research and expanding my horizons in astrophysics -- Here\'s to a great start at Westlake University!',
    imageUrl: './Westlake.jpg',
    credential: 'LSC-2023-5678'
  },
  {
    id: 6,
    title: 'Graduated from Tsinghua University',
    issuer: 'Say goodbye to my alma mater',
    date: 'Jun 21st, 2025',
    description: 'Graduated from Tsinghua University with a Bachelor of Science in Mechanics and Astronomy. \n \n Grateful for the support of my professors, friends, family, and myself throughout this journey. Sad and unwilling to leave my alma mater who embraces all my laugh and tear, but I will be confident to move on to my next stop. Also excited to continue my studies in astrophysics and contribute to our understanding of the universe:)',
    imageUrl: './THUgraduation.jpg',
    credential: 'LSC-2023-5678'
  },
  {
    id: 7,
    title: 'Half-year research internship at Harvard-CfA',
    issuer: 'Exploring the universe with the best minds in the universe',
    date: 'Feb 20th, 2025',
    description: 'Story at Harvard-Smithsonian Center for Astrophysics (CfA) as a research intern is coming to an end! Worked with Prof. Avi Loeb and Dr. Morgan Macleod on dynamics of the Oort cloud perturbed by a stellar flyby. Gained hands-on experience in theoretical modelling, N-body simulations, and scientific writing. \n \n Engaged in brilliant seminars, lectures and group meetings to broaden my knowledge in astrophysics. Love the vibrant academic atmosphere and the beautiful campus at Harvard CfA. Thanks, Avi and Morgan for your support throughout my internship! Keep in touch and looking forward to future connections.',
    imageUrl: './Harvard.jpg',
    credential: 'LSC-2023-5678'
  }
];

export default function CertificateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{cert.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {cert.issuer}
                </DialogDescription>
              </DialogHeader>
              
              <ScrollArea className="h-[400px] pr-4">
                <div className="relative h-48 my-4">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              
                <div className="space-y-4 pb-4">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* <div className="bg-muted/50 p-3 rounded-md">
                    <p className="text-sm font-medium">Credential ID:</p>
                    <p className="text-sm text-muted-foreground">{cert.credential}</p>
                  </div> */}
                  
                  {/* <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </Button> */}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </motion.div>
      ))}
    </div>
  );
}