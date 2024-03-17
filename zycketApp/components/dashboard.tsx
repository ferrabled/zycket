import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";
import SellModal from "./marketplace/sellModal";
import { useRouter } from 'next/navigation'

export default function DashboardComponent() {
  const router = useRouter()
  const [show, setShow] = useState(false)


  function Event() {
    function sellItem() {
      setShow(true)
      console.log('purchased');
    }
    

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>ETHLondon</CardTitle>
          <CardDescription>Bringing developers onchain to build for the future of the internet.</CardDescription>
          <CardDescription>91 Brick Ln, London E1 6QR.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-5">
          <Button variant="destructive" onClick={sellItem}>Marketplace Sell</Button>
          <Button onClick={() => router.push('/verification')}>Entrance Verify</Button>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <div key="1" className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 p-8">
      <main>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Events</h2>
          <div className="flex space-x-4">
            <Button variant="outline">Upcoming</Button>
            <Button variant="outline">Past</Button>
          </div>
        </div>
        <section className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Sunday, March 17</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Event />
              <SellModal show={show} setShow={setShow}/>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester City vs. Tottenham</CardTitle>
                  <CardDescription>A match that you cannot miss!</CardDescription>
                  <CardDescription>Manchester City Stadium</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row gap-5">
                  <Button variant="destructive">Marketplace Sell</Button>
                  <Button onClick={() => router.push('/verification')}>Entrance Verify</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Monday, March 18</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Real Madrid vs. Barcelona</CardTitle>
                  <CardDescription>Best Match of the season!</CardDescription>
                  <CardDescription>Bernabeu Stadium, Madrid</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row gap-5">
          <Button variant="destructive">Marketplace Sell</Button>
          <Button onClick={() => router.push('/verification')}>Entrance Verify</Button>
        </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

