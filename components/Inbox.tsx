import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Inbox() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Inbox</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-1">
                            Your document has been categorized
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                            Need help studying? Contact our AI assistant for
                            more information.
                        </p>
                        <Button variant="outline" size="sm">
                            View Details
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
