import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function MarketplaceComponent() {
  return (
    <div key="2" className="min-h-screen bg-gray-100 p-8">
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
                  <CardTitle>Arsenal vs. Chelsea</CardTitle>
                  <CardDescription>Emirates Stadium, London</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 23A</p>
                  <p className="text-sm text-gray-600">Price: $150</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester United vs. Liverpool</CardTitle>
                  <CardDescription>Old Trafford, Manchester</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 15B</p>
                  <p className="text-sm text-gray-600">Price: $120</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Manchester City vs. Tottenham</CardTitle>
                  <CardDescription>2b Worship St, Manchester</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 7C</p>
                  <p className="text-sm text-gray-600">Price: $100</p>
                  <Button variant="ghost">View Details</Button>
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
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 10A</p>
                  <p className="text-sm text-gray-600">Price: $200</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Bayern Munich vs. RB Leipzig</CardTitle>
                  <CardDescription>Allianz Arena, Munich</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 5B</p>
                  <p className="text-sm text-gray-600">Price: $180</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>PSG vs. Marseille</CardTitle>
                  <CardDescription>Parc des Princes, Paris</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Seat: 12C</p>
                  <p className="text-sm text-gray-600">Price: $220</p>
                  <Button variant="ghost">View Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

