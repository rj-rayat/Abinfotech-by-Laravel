import React from 'react'
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';
import ProjectSection from '../Home/sections/project/project-section';

export default function Project() {
  return (
    <WebLayout>
        <Head title='Project'>
            
        </Head>
        <ProjectSection/>
    </WebLayout>
  )
}

