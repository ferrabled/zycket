import { Attributes, Ticket } from "@/types";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";


export default function MintForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [promoter, setPromoter] = useState('');
    const [location, setLocation] = useState('');
    const [quantity, setQuantity] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [objectUrl, setObjectUrl] = useState('');
    const [ticket, setTicket] = useState<Ticket>();
    const [isUpdated, setIsUpdated] = useState(false);

    

    const handleSubmit = () => {
        console.log(name, description, promoter, location, quantity, image);
        console.log('submitted');

        //upload metadata to pinata
        const ticket = new Ticket();
        const attributes = new Attributes();
        ticket.name = name;
        ticket.description = description;
        ticket.image = imageUrl;
        attributes.promoter = promoter;
        attributes.location = location;
        attributes.quantity = parseInt(quantity);
        attributes.date = timestamp;
        ticket.attributes = attributes;
        setTicket(ticket);

        uploadMetadata(ticket).then(() => {
            console.log("metadata uploaded");
            setIsUpdated(true);
            document.getElementById("save")!.style.display = "none";
        });


    }


    const handleImage = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];

        uploadtoPinata(file);

    }

    async function uploadtoPinata(file: any) {
        const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
        const data = new FormData();
        data.append('file', file);

        fetch(url, {
            method: 'POST',
            headers: {
                //This should not be here but it is failing to retrieve from the process env
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMTNmNGZjOC0zN2YzLTRlYWUtYjU2Ni1iNGE4MTFjMTJjZmEiLCJlbWFpbCI6Im1pdHJva29zcGVAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRmOWUwNDhmYTgwOTNkODAzYmE3Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjBmMzBjZDZiNTY3NWFiZTgzZWYzNWY0OWI4NDFkZWQ4NzI4MjYzMDZiNjgwZjVkNjM1Y2VhMDA3NzU4NWU0NiIsImlhdCI6MTcxMDYxNjY1OH0.DXTdtkpuVpQZ5EAFRzW4dpCiCp0AbHs5K7fOBy_i_nU` 
            },
            body: data
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setImageUrl("https://ipfs.io/ipfs/"+ data.IpfsHash +"?.png");
        }).catch(error => {
            console.error('Error:', error);
        });
    }


    async function uploadMetadata(ticket: Ticket) {

        const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
        const data = JSON.stringify({
            name: ticket.name,
            description: ticket.description,
            image: ticket.image,
            attributes: [
                {
                    promoter: ticket.attributes.promoter,
                    location: ticket.attributes.location,
                    quantity: ticket.attributes.quantity,
                    date: ticket.attributes.date
                }
            ]
        });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMTNmNGZjOC0zN2YzLTRlYWUtYjU2Ni1iNGE4MTFjMTJjZmEiLCJlbWFpbCI6Im1pdHJva29zcGVAZ3VmdW0uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRmOWUwNDhmYTgwOTNkODAzYmE3Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjBmMzBjZDZiNTY3NWFiZTgzZWYzNWY0OWI4NDFkZWQ4NzI4MjYzMDZiNjgwZjVkNjM1Y2VhMDA3NzU4NWU0NiIsImlhdCI6MTcxMDYxNjY1OH0.DXTdtkpuVpQZ5EAFRzW4dpCiCp0AbHs5K7fOBy_i_nU` 
            },
            body: data
        }).then(response => {
            return response.json();
        }
        ).then(data => {
            console.log(data);
            setObjectUrl("https://ipfs.io/ipfs/"+ data.IpfsHash);
        }).catch(error => {
            console.error('Error:', error);
        });
    }







return (
    <Card className="m-auto mt-10 sm:w-auto md:w-2/3 ">
        <CardHeader className="flex items-start gap-2">
            <CardTitle>Create your Tickets</CardTitle>
            <CardDescription>You're now creating the tickets for your next big event! Congratulations 🎉</CardDescription>
        </CardHeader>
        <CardContent className="flex items-start">
            <div className="grid gap-4 w-full md:gap-6">
                <div className="grid gap-2">
                    <label className="text-base">
                        Name
                    </label>
                    <Input id="name" className="" placeholder="ETHGlobal London 2024" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Image
                    </label>
                    <Input id="image" type="file" accept="image/*" value={image} onChange={e =>
                        handleImage(e)
                    } />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Description
                    </label>
                    <Textarea
                        className=""
                        id="description"
                        placeholder="Bringing developers onchain to build the future of the internet."
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Promoter
                    </label>
                    <Input id="promoter" placeholder="Ethereum Foundation" value={promoter} onChange={(e) => setPromoter(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base">
                        Location
                    </label>
                    <Input id="location" placeholder="91 Brick Ln, London E1 6QR" type="string" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base" >
                        Maximum Quantity
                    </label>
                    <Input id="quantity" placeholder="1000" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <label className="text-base" >
                        Date & Time of the event
                    </label>
                    <Input id="timestamp" placeholder="1001710612469" type="number" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
                </div>
                <Button size="lg" variant="outline" id="save" onClick={
                    handleSubmit
                }>Save</Button>

            </div>
        </CardContent>
    </Card>
);
}