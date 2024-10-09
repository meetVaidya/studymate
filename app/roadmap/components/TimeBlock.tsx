import React from "react";

interface TimeBlockProps {
    date: string;
    time: string;
    title: string;
    description: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({
    date,
    time,
    title,
    description,
}) => {
    return (
        <div className="time-block border p-4 rounded-lg shadow-md mb-4 bg-white">
            <h2 className="font-bold text-lg text-blue-600">{title}</h2>
            <p className="text-gray-500">
                <span className="font-semibold">Date:</span> {date}
            </p>
            <p className="text-gray-500">
                <span className="font-semibold">Time:</span> {time}
            </p>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
};

export default TimeBlock;
