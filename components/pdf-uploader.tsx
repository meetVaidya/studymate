"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, Upload } from "lucide-react";

export default function PDFUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const supabase = createClientComponentClient();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setError(null);
        } else {
            setError("Please select a PDF file");
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        multiple: false,
    });

    const uploadFile = async () => {
        if (!file) return;

        setUploading(true);
        setProgress(0);
        setError(null);
        setSuccess(false);

        try {
            const { error } = await supabase.storage
                .from("pdfs")
                .upload(`${Date.now()}_${file.name}`, file, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (error) throw error;

            setSuccess(true);
        } catch (error) {
            setError("Error uploading file");
            console.error("Error uploading file:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div
                {...getRootProps()}
                className={`p-8 border-2 border-dashed rounded-md text-center cursor-pointer transition-colors ${
                    isDragActive
                        ? "border-primary bg-primary/10"
                        : "border-gray-300"
                }`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                    Drag & drop a PDF file here, or click to select one
                </p>
            </div>

            {file && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        Selected file: {file.name}
                    </p>
                    <Button
                        onClick={uploadFile}
                        disabled={uploading}
                        className="mt-2 w-full"
                    >
                        {uploading ? "Uploading..." : "Upload to Supabase"}
                    </Button>
                </div>
            )}

            {uploading && (
                <div className="mt-4">
                    <Progress value={progress} className="w-full" />
                    <p className="mt-2 text-sm text-gray-500 text-center">
                        {progress}% uploaded
                    </p>
                </div>
            )}

            {error && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                    <AlertCircle className="inline mr-2 h-4 w-4" />
                    {error}
                </div>
            )}

            {success && (
                <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                    <CheckCircle2 className="inline mr-2 h-4 w-4" />
                    File uploaded successfully!
                </div>
            )}
        </div>
    );
}
