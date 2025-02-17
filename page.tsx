import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DiscIcon as DiscordIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white perspective-deeper">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute-cat-cat-ffdOAGVBlnIoNYuiO2XUFx02NELbkX.png"
            alt="Cat Icon"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
        <Button asChild variant="ghost" className="text-white gap-2 hover:bg-white/10">
          <Link href="https://discord.gg/t7VWZRUS" target="_blank" rel="noopener noreferrer">
            <DiscordIcon className="w-5 h-5" />
            Join The Discord
          </Link>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <Card className="w-full max-w-md p-0 bg-transparent border-0 shadow-2xl">
          <div className="relative overflow-hidden rounded-lg group transition-all duration-500 ease-out hover:transform-style-3d hover:rotate-x-[-35deg] hover:translate-z-32 hover:scale-110 cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute-cat-cat-ffdOAGVBlnIoNYuiO2XUFx02NELbkX.png"
                alt="Background"
                fill
                className="object-cover object-[center_40%]"
                priority
              />
            </div>
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-indigo-900/80 animate-gradient mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.5),transparent)]" />
            <div className="relative p-16 flex flex-col items-center backdrop-blur-[2px] transition-transform duration-500 group-hover:transform group-hover:translate-z-32 group-hover:scale-110">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                GET JONGOS V1
              </h2>
            </div>
          </div>
        </Card>

        <h1 className="text-4xl font-bold mt-8 mb-2">Jongos</h1>
        <p className="text-xl text-zinc-400 mb-2"></p>
        <p className="text-zinc-500 mb-6">Jongos V1 now available for all</p>

        <Button asChild size="lg" className="gap-2 bg-black text-white hover:bg-black/80">
          <Link
            href="https://www.mediafire.com/file/coq27w9slnrda6p/Jongos+V1.zip/file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Jongos V1
          </Link>
        </Button>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-zinc-600">
        <p></p>
      </footer>
    </div>
  )
}

