import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button asChild className="gradient-cta">
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    );
}
