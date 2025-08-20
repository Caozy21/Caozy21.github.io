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

const certificates = [
  {
    id: 1,
    title: 'Cheer for the ET conference!',
    issuer: 'My first academic conference adventure',
    date: 'August 10th, 2025',
    description: 'Happy to attend the annual meeting of the Earth 2.0 (ET) space mission at Shanghai, China. Met experts in the field and learned about the latest advancements in microlensing, planetary dynamics and beyond. Proud to share my research about Oort cloud comets dynamics at the poster session. Excited to connect with fellow researchers for space exploration -- the future is bright! \n P.S. love the food in Shanghai!',
    imageUrl: './ETconference.jpg',
    credential: 'CERT-AOC-2023-1234'
  },
  {
    id: 2,
    title: 'Laboratory Safety Certification',
    issuer: 'Royal Society of Chemistry',
    date: 'October 2023',
    description: 'Professional certification in chemical laboratory safety protocols and best practices.',
    imageUrl: 'https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg',
    credential: 'LSC-2023-5678'
  },
  {
    id: 3,
    title: 'Green Chemistry Principles',
    issuer: 'International Union of Pure and Applied Chemistry',
    date: 'August 2023',
    description: 'Certification in sustainable chemistry practices and environmental considerations in chemical processes.',
    imageUrl: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg',
    credential: 'GCP-2023-9012'
  },
  {
    id: 4,
    title: 'Analytical Techniques in Chemistry',
    issuer: 'Indian Chemical Society',
    date: 'June 2023',
    description: 'Advanced training in modern analytical methods and instrumentation techniques.',
    imageUrl: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    credential: 'ATC-2023-3456'
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
                  Issued by {cert.issuer}
                </DialogDescription>
              </DialogHeader>
              
              <div className="relative h-48 my-4">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
                
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-sm font-medium">Credential ID:</p>
                  <p className="text-sm text-muted-foreground">{cert.credential}</p>
                </div>
{/*                 
                <Button className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button> */}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      ))}
    </div>
  );
}