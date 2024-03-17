'use client'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";



export default function Component() {
  const { walletConnector } = useDynamicContext();
  
  function Event() {

    function purchaseItem() {
      walletConnector?.fetchPublicAddress().then((address) => {
        console.log(address);
        fetch("/api/mint", {
          method: 'POST',
          body: JSON.stringify({
              BASEcollectionAddress: "0xEE4a35c10eD0108bB222D2b1527D070ca99333D5",
              SPICYcollectionAddress:"0x8A9CdD69cD6bAb61Cd3f2659874291cc0578C731",
              ALFAcollectionAddress:"0x17EfC4f95CDC4889A42911541ec9aFE3B2d6c74d",
              sentToAddress: address,
          })
          })
          .then(response => response.json())
      });
      
    
    }
  
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>ETHLondon</CardTitle>
          <CardDescription>Bringing developers onchain to build for the future of the internet.</CardDescription>
          <CardDescription>91 Brick Ln, London E1 6QR.</CardDescription>
          <CardDescription>800 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button onClick={purchaseItem}>Purchase Ticket</Button>
          <Badge variant="secondary">+776</Badge>
          <Badge variant="secondary">No requirements</Badge>
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
              <Card className="w-full">
        <CardHeader>
          <CardTitle>Arsenal vs. Chelsea</CardTitle>
          <CardDescription>League match between the leader and 3rd place.</CardDescription>
          <CardDescription>Hornsey Rd, London N7 7AJ.</CardDescription>
          <CardDescription>127000 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button variant="outline" onClick={()=>console.log("Get more tokens")}>Purchase Ticket</Button>
          <Badge variant="secondary">+15000</Badge>
          <Badge variant="destructive">5 fan tokens needed</Badge>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Saint Patrick's Day</CardTitle>
          <CardDescription>Patron saint of Ireland (In London).</CardDescription>
          <CardDescription>Trafalgar Square.</CardDescription>
          <CardDescription>280 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button variant="outline" onClick={()=>console.log("Get more tokens")}>Purchase Ticket</Button>
          <Badge variant="destructive">280</Badge>
          <Badge variant="secondary">Member of Friends of Ireland Dao ✅</Badge>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Techno Party</CardTitle>
          <CardDescription>House & Techno Party All Night Long (East London).</CardDescription>
          <CardDescription>Bow Bridge LDN.</CardDescription>
          <CardDescription>125 tickets</CardDescription>
        </CardHeader>
        <CardContent className="mt-[-10px] flex flex-row gap-5">
          <Button variant="outline" onClick={()=>console.log("Get more tokens")}>Purchase Ticket</Button>
          <Badge variant="secondary">+50</Badge>
          <Badge variant="destructive">Member of Techno Dao</Badge>
        </CardContent>
      </Card>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">Monday, March 18</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="w-full">
              <CardHeader>
                <CardTitle>Bayern Munich vs. RB Leipzig</CardTitle>
                <CardDescription>League match featuring some of the best teams.</CardDescription>
                <CardDescription>Werner-Heisenberg-Allee 25, Munich E1 6QR.</CardDescription>
                <CardDescription>8000 tickets</CardDescription>
              </CardHeader>
              <CardContent className="mt-[-10px] flex flex-row gap-5">
                <Button onClick={()=>console.log("Get more tokens")}>Purchase Ticket</Button>
                <Badge variant="secondary">+7500</Badge>
                <Badge variant="secondary">2 Fan tokens ✅</Badge>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Taylor Swift Concert</CardTitle>
                <CardDescription>Bringing developers onchain to build for the future of the internet.</CardDescription>
                <CardDescription>91 Brick Ln, London E1 6QR.</CardDescription>
                <CardDescription>800 tickets</CardDescription>
              </CardHeader>
              <CardContent className="mt-[-10px] flex flex-row gap-5">
                <Button onClick={()=>console.log("Get more tokens")}>Purchase Ticket</Button>
                <Badge variant="secondary">+776</Badge>
                <Badge variant="secondary">No requirements</Badge>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

