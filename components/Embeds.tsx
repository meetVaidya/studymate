import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Embeds() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Current</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video mb-4">
                    <Image
                        src="/dsa-basics.jpg"
                        alt="DSA Basics"
                        width={400}
                        height={200}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>
                <h3 className="font-semibold mb-1 text-lg md:text-xl">DSA Basics</h3>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <span className="text-sm text-gray-500">
                        Currently embedded:
                    </span>
                    <Badge variant="secondary" className="mt-1 md:mt-0">34/40</Badge>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">Presence:</span>
                    <span className="text-sm font-medium mt-1 md:mt-0">Mandatory</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                    Ends in: 45 min.
                </div>
            </CardContent>
        </Card>
    );
}
