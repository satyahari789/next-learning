import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1>Authentication</h1>
            <Link href="/auth/login">
                <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
                <Button>Register</Button>
            </Link>
        </div>
    );
}