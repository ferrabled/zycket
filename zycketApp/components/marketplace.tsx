import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "./ui/badge"

export default function MarketplaceComponent() {
  return (
    <div key="2" className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 p-8">
      <main>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Marketplace</h2>
          <div className="flex space-x-4">
            <Button variant="outline">All Tickets</Button>
            <Button variant="outline">My Listings</Button>
            <Button variant="outline">Transaction History</Button>
          </div>
        </div>
        <section className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Search and Filter</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="w-full">
        <CardHeader>
          <CardTitle>Saint Patrick's Day</CardTitle>
          <CardDescription>Patron saint of Ireland (In London).</CardDescription>
          <CardDescription>Trafalgar Square.</CardDescription>
          <CardDescription>Seller: 0x12a...9fd</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button onClick={()=>console.log("Get more tokens")}>Purchase Ticket $12</Button>
          <Badge variant="secondary">Member of Friends of Ireland Dao ✅</Badge>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Saint Patrick's Day</CardTitle>
          <CardDescription>Patron saint of Ireland (In London).</CardDescription>
          <CardDescription>Trafalgar Square.</CardDescription>
          <CardDescription>Seller: 0x12a...9fd</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button onClick={()=>console.log("Get more tokens")}>Purchase Ticket $20</Button>
          <Badge variant="secondary">Member of Friends of Ireland Dao ✅</Badge>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Saint Patrick's Day</CardTitle>
          <CardDescription>Patron saint of Ireland (In London).</CardDescription>
          <CardDescription>Trafalgar Square.</CardDescription>
          <CardDescription>Seller: 0xa4a...90d</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button onClick={()=>console.log("Get more tokens")}>Purchase Ticket $22</Button>
          <Badge variant="secondary">Member of Friends of Ireland Dao ✅</Badge>
        </CardContent>
      </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Transaction History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Real Madrid vs. Barcelona</CardTitle>
                  <CardDescription>Bernabeu Stadium, Madrid</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row">
                  <div className="mr-14">
                  <p className="text-sm text-gray-600">Seat: 12C</p>
                  <p className="text-sm text-gray-600">Price: $220</p>
                  </div>
                  <Button>View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>PSG vs. Marseille</CardTitle>
                  <CardDescription>Parc des Princes, Paris</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row">
                  <div className="mr-14">
                  <p className="text-sm text-gray-600">Seat: 12C</p>
                  <p className="text-sm text-gray-600">Price: $220</p>
                  </div>
                  <Button>View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

