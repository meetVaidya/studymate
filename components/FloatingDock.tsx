"use client";

import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

export default function FloatingDock() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [documents, setDocuments] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

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
                                        const content = (
                                            e.target as HTMLFormElement
                                        ).content.value;
                                        addDocument(content);
                                        (e.target as HTMLFormElement).reset();
                                    }}
                                >
                                    <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="content">
                                                Content
                                            </Label>
                                            <Textarea
                                                id="content"
                                                placeholder="Enter your document content here..."
                                                className="h-32"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button type="submit">
                                            Add Document
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
        </div>
    );
}
