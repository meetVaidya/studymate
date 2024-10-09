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

type DocumentClassificationDisplayProps = {
    documents: Document[];
};

export default function DocumentClassificationDisplay({
    documents,
}: DocumentClassificationDisplayProps) {
    const [expandedDocument, setExpandedDocument] = useState<string | null>(
        null
    );

    return (
        <div className="container mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold mb-4">
                Document Classifications
            </h1>
            {documents.map((doc, index) => (
                <Card key={index} className="w-full">
                    <CardHeader>
                        <CardTitle >
                            {doc.classification.subject}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion
                            type="single"
                            collapsible
                            value={expandedDocument || undefined}
                            onValueChange={setExpandedDocument}
                        >
                            <AccordionItem value={`doc-${index}`}>
                                <AccordionTrigger>
                                    View Classification Details
                                    <span className="sr-only">
                                        for {doc.classification.subject}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2">
                                        <p>
                                            <strong>Chapter Name:</strong>{" "}
                                            {doc.classification.chapter_name}
                                        </p>
                                        <p>
                                            <strong>Document Type:</strong>{" "}
                                            {doc.classification.document_type}
                                        </p>
                                        {doc.classification
                                            .syllabus_or_date_changes && (
                                            <p>
                                                <strong>
                                                    Syllabus/Date Changes:
                                                </strong>{" "}
                                                {
                                                    doc.classification
                                                        .syllabus_or_date_changes
                                                }
                                            </p>
                                        )}
                                        <div>
                                            <strong>Subject:</strong>
                                            <Badge
                                                className="ml-2"
                                                variant="secondary"
                                            >
                                                {doc.classification.subject}
                                            </Badge>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
