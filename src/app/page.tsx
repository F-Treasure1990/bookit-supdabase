import Heading from "@/components/heading";
import { getAllRooms } from "@/features/rooms/actions";
import RoomCard from "@/features/rooms/components/room-card";

export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title="available rooms" />
      <div className="grid gap-x-4 gap-y-6 py-4 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        {rooms.length > 0 ? (
          rooms.map((room, index) => <RoomCard key={index} room={room} />)
        ) : (
          <p>No rooms available at the moment</p>
        )}
      </div>
    </>
  );
}
