"use client";

import { Suspense, useState } from "react";
import DocumentClassificationDisplay from "./components/Subject";
import Sidebar from "@/components/Sidebar";

type Classification = {
    chapter_name: string;
    document_type: string;
    subject: string;
    syllabus_or_date_changes: string | null;
};

type Document = {
    classification: Classification;
    user_id: string;
};

type ApiResponse = {
    documents: Document[];
};

async function getData(userId: string): Promise<ApiResponse> {
    const res = await fetch(
        `http://192.168.99.12:5000/user/document?user_id=${userId}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

function DocumentError() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p>
                Failed to load document classification data. Please try again
                later.
            </p>
        </div>
    );
}

function DocumentLoading() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
                Loading Document Classifications...
            </h1>
            <div className="animate-pulse space-y-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="h-16 bg-gray-200 rounded"></div>
                ))}
            </div>
        </div>
    );
}

export default function DocumentPage() {
    const [userId, setUserId] = useState("");
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleFetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const fetchedData = await getData(userId);
            setData(fetchedData);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen">
            <aside>
                <Sidebar />
            </aside>
            <div className="container mx-auto p-4">
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter user ID"
                    className="border p-2 mb-4"
                />
                <button
                    onClick={handleFetchData}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Fetch Data
                </button>
                {loading && <DocumentLoading />}
                {error && <DocumentError />}
                {data && (
                    <Suspense fallback={<DocumentLoading />}>
                        <DocumentClassificationDisplay
                            documents={data.documents}
                        />
                    </Suspense>
                )}
            </div>
        </div>
    );
}
