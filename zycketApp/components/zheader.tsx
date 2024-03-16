'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation'


export default function ZHeader() {
  const router = useRouter()

  return (
    <header className="flex flex-row items-center justify-between	w-[80vw]">
      <div><h1 className="text-2xl font-bold text-gray-800 mr-20">ZYCKET</h1></div>
      <nav className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => router.push('/')}> Explore </Button>
        <Button variant="ghost" onClick={() => router.push('/marketplace')}> Marketplace </Button>
        <Button variant="ghost" onClick={() => router.push('/dashboard')}> Profile </Button>
        <Button variant="ghost" onClick={() => router.push('/dashboard/organizer')}> Event Dashboard </Button>
        <Button variant="default" onClick={() => router.push('/event/new')}> Create event </Button>
      </nav>
    </header>
  );
}