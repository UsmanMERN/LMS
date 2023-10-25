import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-medium text-sky-700'>Hello World</h1>
      <Button variant="destructive">this is button</Button>
    </main>
  )
}
