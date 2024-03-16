import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function ZHeader() {
  return (
    <header className="flex flex-row items-center justify-between	w-[80vw]">
      <div><h1 className="text-2xl font-bold text-gray-800 mr-20">ZYCKET</h1></div>
      <nav className="flex items-center space-x-4">
        <Button variant="ghost" > Calendars </Button>
        <Button variant="ghost"> Explore </Button>
        <Button variant="ghost"> Marketplace </Button>
        <Button variant="ghost"> Dashboard </Button>
        <Button variant="default"> Create event </Button>
      </nav>
    </header>
  );
}