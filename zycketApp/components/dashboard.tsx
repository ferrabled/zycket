import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";
import SellModal from "./marketplace/sellModal";

export default function DashboardComponent() {
  
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
          <CardDescription>Emirates Stadium, London</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">93 Feet East</p>
          <Button onClick={sellItem}>Sell</Button>
          <Badge variant="secondary">+776</Badge>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <div key="1" className="min-h-screen bg-gray-100 p-8">
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
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Thursday, March 14</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Event />
              <SellModal show={show} setShow={setShow}/>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester United vs. Liverpool</CardTitle>
                  <CardDescription>Old Trafford, Manchester</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Rich Mix</p>
                  <Button variant="ghost">Attendee</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester City vs. Tottenham</CardTitle>
                  <CardDescription>2b Worship St</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">Attendee</Button>
                  <Badge variant="secondary">+118</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Wednesday, March 13</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Real Madrid vs. Barcelona</CardTitle>
                  <CardDescription>Bernabeu Stadium, Madrid</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">10 York Rd</p>
                  <Button variant="ghost">Attendee</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

