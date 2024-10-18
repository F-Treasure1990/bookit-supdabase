import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RoomType } from "@/types";

import { Button } from "./ui/button";

function RoomCard({ room }: { room: RoomType }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Image
          className="mb-4 aspect-video w-full rounded-sm object-cover object-center"
          src={`/images/rooms/${room.image}`}
          width={300}
          height={200}
          alt={room.name}
        />
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.availability}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {room.description}
        </p>
        <h4 className="mt-4 w-full scroll-m-20 self-center border-y py-2 text-center text-xl font-semibold tracking-tight">
          <span className="text-sm">£</span>
          {room.price_per_hour}
        </h4>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/rooms/${room.$id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RoomCard;
