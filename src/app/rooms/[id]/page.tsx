import Image from "next/image";

import { LucideIcon, MapPin, PoundSterling, Users } from "lucide-react";

import Heading from "@/components/heading";
import { Card, CardContent } from "@/components/ui/card";
import { getRoomById } from "@/features/rooms/actions";
import RoomBookingForm from "@/features/rooms/components/room-form.client";

export default async function RoomPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [ room ] = await getRoomById(id);

  if (!room) {
    return <Heading title="Room not found" />;
  }

  return (
    <Card className="w-full max-w-7xl overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-5/12">
            <Image
              src={`/images/rooms/${room.image}`}
              alt={room.name}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1 p-6">
            <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {room.name}
            </h2>
            <p className="mb-3 border-b pb-3">{room.description}</p>
            <div className="mb-4 flex flex-col gap-4 md:grid-rows-2">
              <RoomInfoOpt icon={Users}>
                Size: <span className="font-semibold">{room.sqft}m²</span>{" "}
              </RoomInfoOpt>

              <RoomInfoOpt icon={PoundSterling}>
                Price:{" "}
                <span className="font-semibold">
                  <span className="text-xs">£</span>
                  {room.price_per_hour}/hr
                </span>
              </RoomInfoOpt>

              <RoomInfoOpt icon={MapPin}>
                <span>
                  Address: <span className="font-semibold">{room.address}</span>
                </span>
              </RoomInfoOpt>
            </div>
            <div className="mb-6 mt-2 inline-block rounded-md bg-green-100 px-3 py-1 text-green-800">
              {room.availability}
            </div>
            <RoomBookingForm />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RoomInfoOpt({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center">
      <Icon className="mr-2 h-4 w-4" />
      <p>{children}</p>
    </div>
  );
}
