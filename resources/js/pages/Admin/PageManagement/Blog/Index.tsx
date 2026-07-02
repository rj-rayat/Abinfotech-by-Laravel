import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Image as ImageIcon, Search, Calendar, Globe } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  seo_meta_title?: string;
  created_at: string;
}

interface IndexProps {
  blogs: Blog[];
}

export default function Index({ blogs = [] }: IndexProps) {
  const { delete: destroy } = useForm();

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to permanently delete this blog post?')) {
      destroy(route('admin.blogs.destroy', id));
    }
  };

  return (
    <AppLayout>
      <Head title="Manage Blogs" />

      <div className="p-6 w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-5">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Blog Management</h1>
            <p className="text-sm text-muted-foreground">
              Create, edit, and optimize your IT-related blogs and case studies for search engines.
            </p>
          </div>
          
          <Link
            href={route('admin.blogs.create')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all active:scale-95 self-start sm:self-center"
          >
            <Plus className="h-4 w-4" /> Write New Blog
          </Link>
        </div>

        {/* Content/Table Section */}
        {blogs.length === 0 ? (
          <div className="border border-dashed rounded-2xl p-16 text-center bg-card/50">
            <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No blogs published yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-1">
              Start writing high-quality content with rich text formatting and advance SEO configurations.
            </p>
          </div>
        ) : (
          <div className="border bg-card rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <th className="p-4 pl-6">Blog Banner & Info</th>
                    <th className="p-4">SEO URL (Slug)</th>
                    <th className="p-4">Published Date</th>
                    <th className="p-4 text-right pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {blogs.map((blog) => {
                    
                    const bannerSrc = blog.image?.startsWith('/') || blog.image?.startsWith('http')
                      ? blog.image
                      : `/storage/${blog.image}`;

                    return (
                      <tr key={blog.id} className="hover:bg-muted/20 transition-colors group">
                        
                        {/* Title & Image column */}
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-4">
                            <div className="w-20 h-14 border rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden shadow-inner flex-shrink-0">
                              {blog.image ? (
                                <img 
                                  src={bannerSrc} 
                                  alt={blog.title} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              ) : (
                                <ImageIcon className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="space-y-0.5 max-w-md">
                              <h2 className="font-bold text-foreground line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {blog.title}
                              </h2>
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Globe className="h-3 w-3 text-teal-500" />
                                <span className="line-clamp-1">
                                  Meta Title: {blog.seo_meta_title || 'Default'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Slug Column */}
                        <td className="p-4 text-muted-foreground font-mono text-xs max-w-[200px] truncate">
                          /{blog.slug}
                        </td>

                        {/* Created Date Column */}
                        <td className="p-4 text-muted-foreground">
                          <div className="flex items-center gap-1.5 text-xs">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(blog.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </td>

                        {/* Action Buttons */}
                        <td className="p-4 text-right pr-6">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={route('admin.blogs.edit', blog.id)}
                              className="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-indigo-600 rounded-lg border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 transition-all"
                              title="Edit Blog"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="p-2 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 rounded-lg border border-transparent hover:border-red-100 dark:hover:border-red-900 transition-all"
                              title="Delete permanently"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
      </div>
    </AppLayout>
  );
}