import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Pencil, Trash2, ExternalLink, Github, Folder, ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface DBProject {
    id: number;
    title: string;
    category: string;
    image: string;
    link: string | null;
    github_link: string | null;
    sort_order: number;
}

interface IndexProps {
    projects: DBProject[];
}

export default function Index({ projects = [] }: IndexProps) {
    
    // Delete Handle Function
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('admin.page_management.home.projects.destroy', id));
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Projects" />
            
            <div className="p-6 max-w-6xl mx-auto space-y-6">
                
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-5">
                     <div className='flex gap-4 items-center'>
                        <Link href={'edit'} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Project Management</h1>
                        <p className="text-muted-foreground text-sm">Create, edit, or remove premium works displayed on the landing page slider.</p>
                    </div>
                     </div>
                    <Link
                        href={route('admin.page_management.home.projects.create')}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-sm self-start sm:self-auto"
                    >
                        <Plus className="h-4 w-4" /> Add New Project
                    </Link>
                </div>

                {/* Projects Grid/List */}
                {projects.length === 0 ? (
                    <div className="text-center py-16 border rounded-xl bg-card border-dashed">
                        <Folder className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground font-medium">No projects added yet.</p>
                        <Link 
                            href={route('admin.page_management.home.projects.create')}
                            className="text-sm text-primary underline mt-1 inline-block"
                        >
                            Click here to add your first work sample
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="border bg-card rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group"
                            >
                                {/* Card Top Image View */}
                                <div className="relative aspect-[4/3] bg-muted overflow-hidden border-b">
                                    <img 
                                        src={`/storage/${project.image}`} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-md border rounded-full text-xs font-bold text-primary shadow-sm">
                                        {project.category}
                                    </span>
                                    <span className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-sm">
                                        {project.sort_order}
                                    </span>
                                </div>

                                {/* Card Body Data */}
                                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                    <div>
                                        <h3 className="font-bold text-lg leading-snug line-clamp-2">
                                            {project.title}
                                        </h3>
                                        
                                        {/* Links Indicators */}
                                        <div className="flex gap-4 mt-3 text-xs text-muted-foreground font-medium">
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary">
                                                    <ExternalLink className="h-3 w-3" /> Live Demo
                                                </a>
                                            )}
                                            {project.github_link && (
                                                <a href={project.github_link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary">
                                                    <Github className="h-3 w-3" /> Github
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons Group */}
                                    <div className="flex items-center justify-end gap-2 pt-3 border-t">
                                        <Link
                                            href={route('admin.page_management.home.projects.edit', project.id)}
                                            className="p-2 border rounded-lg hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                                            title="Edit Project"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="p-2 border rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                                            title="Delete Project"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}