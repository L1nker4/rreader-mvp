// components/EditorComponent.tsx

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

const EditorComponent: React.FC = () => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    let mounted = true;

    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: Header,
          list: List,
        },
        data: {
          time: new Date().getTime(),
          blocks: [
            {
              type: 'header',
              data: {
                text: '笔记',
                level: 2,
              },
            },
            {
              type: 'paragraph',
              data: {
                text: '这里是你的笔记内容...',
              },
            },
          ],
        },
      });

      editorRef.current = editor;
    }

    return () => {
      mounted = false;
      if (editorRef.current && mounted) {
        editorRef.current.destroy()
          .then(() => {
            editorRef.current = null;
          })
          .catch((error: any) => {
            console.error('Editor cleanup error:', error);
          });
      }
    };
  }, []);

  return <div id="editorjs" className="p-4 border border-gray-300"></div>;
};

export default dynamic(() => Promise.resolve(EditorComponent), { ssr: false });
