import Heading from "@/components/heading";
import RoomCard from "@/components/room-card";
import rooms from "@/db/rooms.json";

export default function Home() {
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
