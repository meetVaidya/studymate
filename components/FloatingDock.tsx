"use client";

import { useState } from "react";
import { Search, Plus, X, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function FloatingDock() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [documents, setDocuments] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState("");

    async function uploadFileToSupabase(file: File) {
        const { createClient } = await import("@supabase/supabase-js");
        const supabaseUrl = "https://bqaiulnmwcljfbehfqob.supabase.co";
        const supabaseKey =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYWl1bG5td2NsamZiZWhmcW9iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODM2OTgzNCwiZXhwIjoyMDQzOTQ1ODM0fQ.UVr0RvCd8tlStMxXxFZ0HP5OTqY2NuAdEX1WKMd-cGc";
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { data, error } = await supabase.storage
            .from("tets")
            .upload(`documents/${file.name}`, file);

        if (error) {
            console.error("Error uploading file:", error);
        } else {
            console.log("File uploaded successfully:", data);
            addDocument(data.path);
            setUploadedFileName(file.name);
            setIsSuccessModalOpen(true);
        }
    }

    const addDocument = (content: string) => {
        setDocuments([...documents, content]);
    };

    const removeDocument = (index: number) => {
        setDocuments(documents.filter((_, i) => i !== index));
    };

    const filteredDocuments = documents.filter((doc) =>
        doc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed h-28 bottom-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
            <div className="container mx-auto px-4 py-2 border-2 rounded-lg border-black bg-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 flex-grow">
                        <Search className="text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Ask AI4Study   "
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">
                                        Add document
                                    </span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add New Document</DialogTitle>
                                    <DialogDescription>
                                        Enter the content of your new document
                                        or context.
                                    </DialogDescription>
                                </DialogHeader>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const fileInput = (
                                            e.target as HTMLFormElement
                                        ).file as HTMLInputElement;
                                        const file = fileInput.files?.[0];
                                        if (file) {
                                            uploadFileToSupabase(file);
                                        }
                                    }}
                                >
                                    <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="file">
                                                Upload File
                                            </Label>
                                            <Input
                                                id="file"
                                                type="file"
                                                accept=".pdf,.doc,.docx,.txt"
                                                className="h-32"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button type="submit">
                                            Upload File
                                        </Button>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsExpanded(!isExpanded)}
                            aria-label={
                                isExpanded ? "Collapse dock" : "Expand dock"
                            }
                        >
                            {isExpanded ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            )}
                        </Button>
                    </div>
                </div>
                {isExpanded && (
                    <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                        {filteredDocuments.length > 0 ? (
                            filteredDocuments.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-muted p-2 rounded"
                                >
                                    <p className="text-sm truncate">{doc}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeDocument(index)}
                                    >
                                        <X className="h-4 w-4" />
                                        <span className="sr-only">
                                            Remove document
                                        </span>
                                    </Button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted-foreground">
                                No documents found.
                            </p>
                        )}
                    </div>
                )}
            </div>
            <Dialog
                open={isSuccessModalOpen}
                onOpenChange={setIsSuccessModalOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>File Uploaded Successfully</DialogTitle>
                        <DialogDescription>
                            Your file has been uploaded and added to your
                            documents.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center justify-center p-4">
                        <div className="bg-green-100 text-green-800 rounded-full p-2">
                            <Check className="h-6 w-6" />
                        </div>
                    </div>
                    <p className="text-center font-semibold">
                        {uploadedFileName}
                    </p>
                    <Button onClick={() => setIsSuccessModalOpen(false)}>
                        Close
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
