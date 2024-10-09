import Sidebar from "@/components/Sidebar";
import SyllabusDisplay from "./components/SyllabusDisplay";

type Chapter = {
    chapter: string;
    difficulty: string;
    weightage: number;
};

type Subject = {
    subject: string;
    chapters: Chapter[];
};

type ProfileData = {
    profile: {
        syllabus: Subject[];
    };
};

async function getData(): Promise<ProfileData> {
    const res = await fetch("http://192.168.99.12:5000/user?user_id=user_1");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function SyllabusPage() {
    try {
        const data = await getData();
        return (
            <div className="flex h-screen">
                <aside>
                    <Sidebar />
                </aside>
                <SyllabusDisplay syllabus={data.profile.syllabus} />
            </div>
        );
    } catch {
        return <div>Error: Failed to load syllabus data</div>;
    }
}
