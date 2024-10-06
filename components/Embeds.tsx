import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Embeds() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Embeds</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video mb-4">
                    <img
                        src="/science-basics.jpg"
                        alt="Science Basics"
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
                <h3 className="font-semibold mb-1">Science Basics</h3>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        Currently embedded:
                    </span>
                    <Badge variant="secondary">34/40</Badge>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-500">Presence:</span>
                    <span className="text-sm font-medium">Mandatory</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                    Ends in: 45 min.
                </div>
            </CardContent>
        </Card>
    );
}
