import React from 'react';

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: () => Promise<void>;
}

const FileUpload: React.FC<FileUploadProps> = ({ fileInputRef, handleFileUpload }) => {
  return (
    <div className="border-zinc-800 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-2xl font-bold my-2 mb-4 text-left text-zinc-800 font-vidaloka">
        Upload File
      </h1>
      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="mr-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 
          file:tracking-tighter file:font-vidaloka file:text-md
          file:bg-blue-500 file:text-white
          hover:file:bg-blue-700 hover:file:cursor-pointer font-vidaloka"
      />
    </div>
  );
};

export default FileUpload; 