'use client';

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Calendar() {
    const [calendarData, setCalendarData] = useState<{ date: string; title: string; }[] | null>(null);
    const [userId, setUserId] = useState("user_1");
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://192.168.99.12:5000/user?user_id=${userId}`
            );
            const data = await response.json();
            setCalendarData(data.profile.calendar);
        }

        fetchData();
    }, [userId]);

    const getEventForDay = (day: number) => {
        if (!calendarData) return null;

        const event = calendarData.find(
            (entry: { date: string | number | Date; }) => new Date(entry.date).getDate() === day
        );

        return event ? (
            <div className="mt-1 text-xs bg-blue-100 text-blue-800 rounded px-1">
                {event.title}
            </div>
        ) : null;
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Your Schedule
                </CardTitle>
                <Badge variant="outline">Oct 01- Oct 31, 2024</Badge>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                        User ID
                    </label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2">
                    {days.map((day) => (
                        <div
                            key={day}
                            className="aspect-square flex flex-col items-center justify-center border rounded-lg p-2"
                        >
                            <span className="text-sm font-medium">{day}</span>
                            {getEventForDay(day)}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
