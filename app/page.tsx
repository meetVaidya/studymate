import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import CourseCard from "@/components/CourseCard";
import Calendar from "@/components/Calendar";
import Embeds from "@/components/Embeds";
import Grades from "@/components/Grades";
import Inbox from "@/components/Inbox";

const data = [
    {
        title: "System Fundamentals",
        description: "Learn the basics of computer systems",
        image: "/systemfundamentals.svg",
        progress: 67,
        lesson: "Lesson 8 out of 12",
        classInfo: "Currently studying Gantt charts",
    },
    {
        title: "Computer Networks",
        description: "Learn about computer networks",
        image: "/computernetworks.svg",
        progress: 33,
        lesson: "Lesson 4 out of 12",
        classInfo: "Understanding the OSI model",
        tag: "Due Homework",
    },
    {
        title: "Data Structures",
        description: "Learn about data structures",
        image: "/dsa.svg",
        progress: 50,
        status: "Pending",
        classInfo: "Understanding linked lists",
        tag: "Open Exam",
    },
    {
        title: "Database Management",
        description: "Learn about database management",
        image: "/database.svg",
        progress: 100,
        status: "Signed up",
        classInfo: "Pending concepts for MySQL",
    },
    {
        title: "System Fundamentals",
        description: "Learn the basics of computer systems",
        image: "/systemfundamentals.svg",
        progress: 67,
        lesson: "Lesson 8 out of 12",
        classInfo: "Currently studying Gantt charts",
    },
    {
        title: "Database Management",
        description: "Learn about database management",
        image: "/database.svg",
        progress: 100,
        status: "Signed up",
        classInfo: "Pending concepts for MySQL",
    },
];

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            />
                        </div>
                        <Button variant="ghost" size="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                    {data.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
                <Calendar />
            </main>
            <aside className="w-80 bg-white p-8 overflow-auto">
                <Embeds />
                <Grades />
                <Inbox />
            </aside>
        </div>
    );
}
