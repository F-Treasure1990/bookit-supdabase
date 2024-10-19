"use server";

import { redirect } from "next/navigation";

import { eq } from "drizzle-orm";

import db from "@/db";
import rooms, { SelectRoom } from "@/db/schema/rooms";

export async function getAllRooms() {
  try {
    const rooms = await db.query.rooms.findMany();
    return rooms;
  } catch (error) {
    console.error("Failed to get rooms", error);
    redirect("/error");
  }
}

export async function getRoomById(id: SelectRoom["id"]): Promise<SelectRoom[]> {
  try {
    const room = db.select().from(rooms).where(eq(rooms.id, id));
    return room;
  } catch (error) {
    console.error("failed to find room", error);
    redirect("/error");
  }
}
