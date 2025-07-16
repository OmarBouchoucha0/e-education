import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
            <h1 className="text-4xl font-bold">Welcome to the LMS</h1>
            <p className="max-w-lg text-center text-muted-foreground">
                Modern e-education platform powered by Next.js, Supabase & shadcn/ui.
            </p>

            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/login">Sign In</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/courses">Browse Courses</Link>
                </Button>
            </div>
        </main>
    )
}
