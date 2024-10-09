"use client";

import React, { useEffect, useState } from "react";
import TimeBlock from "./TimeBlock";

interface EventData {
    date: string;
    time: string;
    title: string;
    description: string;
}

const Schedule: React.FC<{ user_id: string; prompt: string }> = ({
    user_id,
    prompt,
}) => {
    const [timeBlocksData, setTimeBlocksData] = useState<EventData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Define the fetchData function inside the useEffect hook
        const fetchData = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch(
                    "http://192.168.99.12:5000/portfolio/roadmap",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ user_id, prompt }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                // Assuming the API returns data in the format you provided
                const data = await response.json();
                setTimeBlocksData(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [user_id, prompt]); // Run the effect whenever user_id or prompt changes

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="schedule-container p-4">
            {timeBlocksData.map((event, index) => (
                <TimeBlock
                    key={index}
                    date={event.date}
                    time={event.time}
                    title={event.title}
                    description={event.description}
                />
            ))}
        </div>
    );
};

export default Schedule;
