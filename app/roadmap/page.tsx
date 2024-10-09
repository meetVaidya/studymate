'use client';

import React, { useState } from "react";
import Schedule from "./components/Schedule"; // Assuming Schedule is in the same directory
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const App: React.FC = () => {
    const [userId, setUserId] = useState<string>("user_1");
    const [prompt, setPrompt] = useState<string>("Provide the roadmap for my exams");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-screen h-screen flex">
            <aside>
                <Sidebar />
            </aside>
            <div className="app-container p-4 flex flex-col mx-10 my-20 w-full">
                <h1 className="text-2xl font-bold mb-4">RoadMap</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="mb-4">
                            <Label htmlFor="userId">User ID:</Label>
                            <Input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="prompt">Prompt:</Label>
                            <Input
                                type="text"
                                id="prompt"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                ) : (
                    <Schedule user_id={userId} prompt={prompt} />
                )}
            </div>
        </div>
    );
};

export default App;
