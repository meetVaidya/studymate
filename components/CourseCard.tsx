import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    progress: number;
    lesson?: string;
    classInfo: string;
    status?: string;
    tag?: string;
}

export default function CourseCard({
    title,
    description,
    image,
    progress,
    lesson,
    classInfo,
    status,
    tag,
}: CourseCardProps) {
    return (
        <Card className="max-w-full md:max-w-md lg:max-w-lg">
            <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Image
                        src={image}
                        alt={title}
                        width={80}
                        height={80}
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="text-center md:text-left">
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-2">{classInfo}</p>
                <div className="flex flex-col md:flex-row justify-between items-center mb-2 space-y-2 md:space-y-0">
                    <span className="text-sm font-medium">{lesson}</span>
                    <span className="text-sm font-medium">{`You are ${progress}%`}</span>
                </div>
                <Progress value={progress} className="mb-4" />
                <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    {status && (
                        <span className="text-sm text-gray-500">{`Status: ${status}`}</span>
                    )}
                    {tag && <Badge variant="secondary">{tag}</Badge>}
                </div>
            </CardContent>
        </Card>
    );
}
