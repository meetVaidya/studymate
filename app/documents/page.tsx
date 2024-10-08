'use client';

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Document {
    name: string;
    subject: string;
    chapter: string;
}

const subjects = ["Math", "Science", "History", "English", "Computer Science"];

export default function DocumentsPage() {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [dragging, setDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [chapterName, setChapterName] = useState("");

    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (selectedFile && selectedTag && chapterName) {
            // Handle file upload (implementation omitted for brevity)
            // ...

            // Add the new document to the state
            const newDocument: Document = {
                name: selectedFile.name,
                subject: selectedTag,
                chapter: chapterName,
            };
            setDocuments([...documents, newDocument]);

            // Reset file, tag, and chapter name selections
            setSelectedFile(null);
            setSelectedTag("");
            setChapterName("");
        }
    };

    const handleFilterChange = (subject: string) => {
        setSelectedSubject(subject);
    };

    const filteredDocuments = selectedSubject
        ? documents.filter((doc) => doc.subject === selectedSubject)
        : documents;

    const searchedDocuments = filteredDocuments.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex">
            {/* Sidebar (provided code) */}
            <Sidebar />

            <main className="flex-1 p-6 bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Documents</h1>

                    <div className="flex items-center mb-4">
                        <Input
                            type="text"
                            placeholder="Search documents..."
                            className="mr-4"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    {selectedSubject || "Filter by Subject"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {subjects.map((subject) => (
                                    <DropdownMenuItem
                                        key={subject}
                                        onClick={() =>
                                            handleFilterChange(subject)
                                        }
                                    >
                                        {subject}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div
                        className={`border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer transition-colors duration-200 ${
                            dragging ? "bg-gray-100" : ""
                        }`}
                        onDrop={handleFileDrop}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDragging(true);
                        }}
                        onDragLeave={() => setDragging(false)}
                    >
                        <input
                            type="file"
                            id="fileInput"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="fileInput" className="cursor-pointer">
                            <p>
                                {selectedFile
                                    ? `Selected file: ${selectedFile.name}`
                                    : "Drag and drop files here or click to select"}
                            </p>
                        </label>
                    </div>

                    {selectedFile && (
                        <div className="mt-4">
                            <label
                                htmlFor="subjectSelect"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Select Subject Tag:
                            </label>
                            <select
                                id="subjectSelect"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                value={selectedTag}
                                onChange={(e) => setSelectedTag(e.target.value)}
                            >
                                <option value="">Select a tag</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                            </select>

                            <div className="mt-4">
                                <label
                                    htmlFor="chapterName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Chapter Name:
                                </label>
                                <Input
                                    type="text"
                                    id="chapterName"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    value={chapterName}
                                    onChange={(e) =>
                                        setChapterName(e.target.value)
                                    }
                                />
                            </div>

                            <Button className="mt-4" onClick={handleUpload}>
                                Upload Document
                            </Button>
                        </div>
                    )}

                    <table className="min-w-full divide-y divide-gray-200 mt-6">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Document Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subject
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Chapter
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {searchedDocuments.map((document) => (
                                <tr key={document.name}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {document.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {document.subject}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {document.chapter}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
