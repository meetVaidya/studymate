import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Calendar() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Your Schedule
                </CardTitle>
                <Badge variant="outline">Oct 01- Oct 31, 2024</Badge>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
                    {days.map((day) => (
                        <div
                            key={day}
                            className="aspect-square flex flex-col items-center justify-center border rounded-lg p-2"
                        >
                            <span className="text-sm font-medium">{day}</span>
                            {day === 4 && (
                                <div className="mt-1 text-xs bg-blue-100 text-blue-800 rounded px-1">
                                    English 101
                                </div>
                            )}
                            {day === 10 && (
                                <div className="mt-1 text-xs bg-green-100 text-green-800 rounded px-1">
                                    Human Biology
                                </div>
                            )}
                            {day === 15 && (
                                <div className="mt-1 text-xs bg-yellow-100 text-yellow-800 rounded px-1">
                                    World Economy
                                </div>
                            )}
                            {day === 19 && (
                                <div className="mt-1 text-xs bg-purple-100 text-purple-800 rounded px-1">
                                    Paper Review
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
