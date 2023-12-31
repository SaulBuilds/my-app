/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pQ7EVn52f6m
 */
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { CardHeader, CardContent, Card } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { PinIcon } from "./ui/icons/PinIcon"
import { MenuIcon } from "./ui/icons/MenuIcon"
import { DataCard } from "./DataCard"
import ZkViews from './zkViews/ZkViews'

export function ZkLanding() {
  return (
    <>
      <header className="bg-gray-600 text-white p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PinIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">zkPin</h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-4" side="right">
            <nav className="grid gap-2">
              <Link href="#">Home</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Services</Link>
              <Link href="#">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-col items-center justify-center h-screen bg-gray-400">
      <DataCard />
      <div>
      <ZkViews />
      </div>
      </main>
    </>
  )
}