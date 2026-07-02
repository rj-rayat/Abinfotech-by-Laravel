import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Heading1, Heading2, Bold, Italic, List, Share2, Image as ImageIcon, Notebook } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface Blog {
  id: number;
  title: string;
  body: string;
  image: string;
  seo_meta_title?: string;
  seo_meta_description?: string;
  seo_meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
}

interface EditProps {
  blog: Blog;
}

export default function Edit({ blog }: EditProps) {

  const { data, setData, post, processing, errors } = useForm({
    _method: 'POST', 
    title: blog.title || '',
    body: blog.body || '',
    image: null as File | null,
    seo_meta_title: blog.seo_meta_title || '',
    seo_meta_description: blog.seo_meta_description || '',
    seo_meta_keywords: blog.seo_meta_keywords || '',
    og_title: blog.og_title || '',
    og_description: blog.og_description || '',
    og_image: null as File | null,
  });


  const editor = useEditor({
    extensions: [StarterKit],
    content: blog.body, 
    onUpdate: ({ editor }) => {
      setData('body', editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose max-w-none focus:outline-none min-h-[250px] p-4 bg-background border rounded-b-xl text-sm text-foreground',
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    post(route('admin.blogs.update', blog.id));
  };


  const getStorageUrl = (path: string) => {
    if (!path) return '';
    return path.startsWith('/') || path.startsWith('http') ? path : `/storage/${path}`;
  };

  return (
    <AppLayout>
      <Head title={`Edit Blog: ${blog.title}`} />
      
      <div className="p-6 w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-5">
          <Link href={route('admin.blogs.index')} className="p-2 hover:bg-muted rounded-lg border">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Edit Blog Post</h1>
            <p className="text-xs text-muted-foreground">Modify content, fix types, or optimize SEO metadata layers.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Section 1: Core Blog Details */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">1. Blog Info</h2>
            
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Blog Title</label>
              <input 
                type="text" 
                value={data.title} 
                onChange={e => setData('title', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm" 
              />
              {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium">Featured Image Banner</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {blog.image && (
                  <div className="w-32 h-20 rounded-xl border overflow-hidden bg-muted flex-shrink-0">
                    <img src={getStorageUrl(blog.image)} alt="Current banner" className="w-full h-full object-cover" />
                  </div>
                )}
                <input 
                  type="file" 
                  onChange={e => setData('image', e.target.files ? e.target.files[0] : null)} 
                  className="w-full p-2 bg-background border rounded-xl text-sm cursor-pointer" 
                  accept="image/*" 
                />
              </div>
              {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
            </div>
          </div>

          {/* Section 2: Rich Text Paragraph Panel */}
          <div className="border bg-card p-6 rounded-2xl space-y-3 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">2. Paragraph Panel (Content)</h2>
            
            {editor && (
              <div className="flex flex-wrap gap-1 p-2 bg-muted border border-b-0 rounded-t-xl items-center">
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('heading', { level: 1 }) ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <Heading1 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('heading', { level: 2 }) ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <Heading2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().setParagraph().run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('paragraph') ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <Notebook className="h-4 w-4" />
                </button>
                <div className="h-4 w-[1px] bg-border mx-1" />
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('bold') ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <Bold className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('italic') ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <Italic className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBulletList().run()}
                  className={`p-2 rounded hover:bg-background ${editor.isActive('bulletList') ? 'bg-background text-indigo-600 font-bold' : ''}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            )}
            
            <EditorContent editor={editor} />
            {errors.body && <p className="text-red-500 text-xs">{errors.body}</p>}
          </div>

          {/* Section 3: Google SEO Settings */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">3. Google SEO Customizer</h2>
            
            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Title</label>
              <input 
                type="text" 
                value={data.seo_meta_title} 
                onChange={e => setData('seo_meta_title', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Description</label>
              <textarea 
                rows={3}
                value={data.seo_meta_description} 
                onChange={e => setData('seo_meta_description', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm resize-none" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Keywords</label>
              <input 
                type="text" 
                value={data.seo_meta_keywords} 
                onChange={e => setData('seo_meta_keywords', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm" 
              />
            </div>
          </div>

          {/* Section 4: OG Settings */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm border-indigo-500/10 ">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Share2 className="h-4 w-4" />
              <h2 className="text-sm font-bold uppercase tracking-wider">4. Open Graph (Social Sharing)</h2>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-medium">OG Title</label>
              <input 
                type="text" 
                value={data.og_title} 
                onChange={e => setData('og_title', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">OG Description</label>
              <textarea 
                rows={2}
                value={data.og_description} 
                onChange={e => setData('og_description', e.target.value)} 
                className="w-full p-2.5 bg-background border rounded-xl text-sm resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium">OG Share Banner Image</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {blog.og_image && (
                  <div className="w-32 h-20 rounded-xl border overflow-hidden bg-muted flex-shrink-0">
                    <img src={getStorageUrl(blog.og_image)} alt="Current OG share" className="w-full h-full object-cover" />
                  </div>
                )}
                <input 
                  type="file" 
                  onChange={e => setData('og_image', e.target.files ? e.target.files[0] : null)} 
                  className="w-full p-2 bg-background border rounded-xl text-sm cursor-pointer" 
                  accept="image/*" 
                />
              </div>
              {errors.og_image && <p className="text-red-500 text-xs">{errors.og_image}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={processing} 
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow transition-all active:scale-[0.99]"
          >
            <Save className="h-4 w-4" /> {processing ? 'Updating...' : 'Save Blog Changes'}
          </button>

        </form>
      </div>
    </AppLayout>
  );
}