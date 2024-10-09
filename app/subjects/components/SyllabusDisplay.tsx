"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Chapter = {
    chapter: string;
    difficulty: string;
    weightage: number;
};

type Subject = {
    subject: string;
    chapters: Chapter[];
};

type SyllabusProps = {
    syllabus: Subject[];
};

export default function SyllabusDisplay({ syllabus }: SyllabusProps) {
    const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case "easy":
                return "bg-green-100 text-green-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "hard":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="container mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-4">Syllabus</h1>
            {syllabus.map((subject, index) => (
                <Card key={index} className="w-full">
                    <CardHeader>
                        <CardTitle>{subject.subject}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion
                            type="single"
                            collapsible
                            value={expandedSubject || undefined}
                            onValueChange={setExpandedSubject}
                        >
                            <AccordionItem value={subject.subject}>
                                <AccordionTrigger>
                                    View Chapters
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2">
                                        {subject.chapters.map(
                                            (chapter, chapterIndex) => (
                                                <li
                                                    key={chapterIndex}
                                                    className="flex justify-between items-center"
                                                >
                                                    <span>
                                                        {chapter.chapter}
                                                    </span>
                                                    <div className="flex items-center space-x-2">
                                                        <Badge
                                                            className={getDifficultyColor(
                                                                chapter.difficulty
                                                            )}
                                                        >
                                                            {chapter.difficulty}
                                                        </Badge>
                                                        <span className="text-sm text-gray-500">
                                                            Weightage:{" "}
                                                            {chapter.weightage}%
                                                        </span>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
