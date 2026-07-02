import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: EditorProps) {
  
  // জ্যাঙ্গোর HTMLField এর মতো সব টুলবার অপশন
  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'clean']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'link'
  ];

  return (
    <div className="rounded-editor-box bg-background">
      <ReactQuill 
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your high-quality content here..."
      />
    </div>
  );
}