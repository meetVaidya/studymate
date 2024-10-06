import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Grades() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Grades</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Mid-term paper</h3>
                                <p className="text-sm text-gray-500">Summer term</p>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-blue-600 mt-2 md:mt-0">
                            98
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Art History</h3>
                                <p className="text-sm text-gray-500">Summer term</p>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-blue-600 mt-2 md:mt-0">
                            72
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">Maths & Numbers</h3>
                                <p className="text-sm text-gray-500">Summer term</p>
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-blue-600 mt-2 md:mt-0">
                            34
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
