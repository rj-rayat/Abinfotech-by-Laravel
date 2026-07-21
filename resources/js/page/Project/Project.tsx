import React from 'react'
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';
import ProjectSection from '../Home/sections/project/project-section';

interface DBProject {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  github_link?: string; 
}

interface Props {

 
  projects:DBProject[];
  

  
}
export default function Project({projects}:Props) {

  return (
    <WebLayout>
        <Head title='Project'>
            
        </Head>
        <ProjectSection projects = {projects} />
    </WebLayout>
  )
}

