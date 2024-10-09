"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

export default function SignupForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        dob: undefined as Date | undefined,
        email: "",
        phone: "",
        standard: "",
        syllabus: "",
        chapters: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date: Date | undefined) => {
        setFormData((prev) => ({ ...prev, dob: date }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>
                        Create your account in two simple steps.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Date of Birth</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={`w-full justify-start text-left font-normal ${
                                                    !formData.dob &&
                                                    "text-muted-foreground"
                                                }`}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {formData.dob ? (
                                                    format(formData.dob, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={formData.dob}
                                                onSelect={handleDateChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="standard">Standard</Label>
                                    <Select
                                        onValueChange={(value) =>
                                            handleSelectChange(
                                                "standard",
                                                value
                                            )
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your standard" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">
                                                1st Standard
                                            </SelectItem>
                                            <SelectItem value="2">
                                                2nd Standard
                                            </SelectItem>
                                            <SelectItem value="3">
                                                3rd Standard
                                            </SelectItem>
                                            <SelectItem value="4">
                                                4th Standard
                                            </SelectItem>
                                            <SelectItem value="5">
                                                5th Standard
                                            </SelectItem>
                                            <SelectItem value="6">
                                                6th Standard
                                            </SelectItem>
                                            <SelectItem value="7">
                                                7th Standard
                                            </SelectItem>
                                            <SelectItem value="8">
                                                8th Standard
                                            </SelectItem>
                                            <SelectItem value="9">
                                                9th Standard
                                            </SelectItem>
                                            <SelectItem value="10">
                                                10th Standard
                                            </SelectItem>
                                            <SelectItem value="11">
                                                11th Standard
                                            </SelectItem>
                                            <SelectItem value="12">
                                                12th Standard
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="syllabus">Syllabus</Label>
                                    <Input
                                        id="syllabus"
                                        name="syllabus"
                                        value={formData.syllabus}
                                        onChange={handleInputChange}
                                        placeholder="Enter your syllabus"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="chapters">Chapters</Label>
                                    <Input
                                        id="chapters"
                                        name="chapters"
                                        value={formData.chapters}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Chapter 1, Chapter 2, Chapter 3"
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {step > 1 && (
                        <Button
                            variant="outline"
                            onClick={() => setStep(step - 1)}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                    )}
                    {step < 2 ? (
                        <Button
                            onClick={() => setStep(step + 1)}
                            className="ml-auto"
                        >
                            Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            className="ml-auto"
                        >
                            Submit
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
