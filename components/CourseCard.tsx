import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
        <Card>
            <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm mb-2">{classInfo}</p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{lesson}</span>
                    <span className="text-sm font-medium">{`You are ${progress}%`}</span>
                </div>
                <Progress value={progress} className="mb-4" />
                <div className="flex justify-between items-center">
                    {status && (
                        <span className="text-sm text-gray-500">{`Status: ${status}`}</span>
                    )}
                    {tag && <Badge variant="secondary">{tag}</Badge>}
                </div>
            </CardContent>
        </Card>
    );
}
