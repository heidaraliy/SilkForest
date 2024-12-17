import React, { useState } from "react";
import Button from "./Button";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: (fileName: string) => Promise<void>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  fileInputRef,
  handleFileUpload,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = () => {
    if (fileInputRef.current?.files?.[0]) {
      const file = fileInputRef.current.files[0];
      setFileName(file.name);
      handleFileUpload(file.name);
    }
  };

  return (
    <div className="border-zinc-600 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-xl font-bold mb-4 text-left text-zinc-700 font-arimo">
        Upload Audio
      </h1>
      <Button
        accept="audio/*"
        ref={fileInputRef}
        onClick={handleChange}
        isFileInput={true}
      >
        Choose File
      </Button>
      {fileName && (
        <p className="text-zinc-700 mt-4 flex items-center">
          <b className="flex items-center mr-2">Uploaded File:</b>
          <span className="flex items-center">
            <span className="material-symbols-outlined mr-1 flex-shrink-0 align-middle">
              audio_file
            </span>
            <span className="italic">{fileName}</span>
          </span>
        </p>
      )}
    </div>
  );
};

export default FileUpload;
