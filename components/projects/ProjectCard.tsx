'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  collaborators: string[];
  link?: string;
  videolink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  date,
  collaborators,
  link,
  videolink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              <span>{collaborators.join(', ')}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div> 
  
          {/* 1. View Project Details 链接 (link) */}
          {link && (
              <Link 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-2"
              >
                  View Project Details
                  <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
          )}

          {/* 2. Talk Video 链接 (videolink) */}
          {videolink && (
              <Link 
                  href={videolink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                  Talk Video
                  <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
          )}

        </div>

      </div>
    </motion.div>
  );
}