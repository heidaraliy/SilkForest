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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      setFileName(file.name);
      handleFileUpload(file.name);
    }
  };

  return (
    <div className="border-zinc-600 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-xl font-bold mb-2 text-left text-zinc-700 font-arimo">
        Upload Audio
      </h1>
      <div className="flex justify-start mb-4 italic text-sm tracking-wide">
        Click the button below to upload an audio file. You can upload MP3, WAV,
        M4A, and AAC files.
      </div>
      <Button
        accept="audio/*,.mp3,.wav,.m4a,.aac"
        ref={fileInputRef}
        onChange={handleChange}
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
