import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const rooms = pgTable("rooms", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 500 }).notNull(),
  address: varchar("address", { length: 250 }).notNull(),
  availability: varchar("availability", { length: 100 }).notNull(),
  sqft: varchar("sqft", { length: 25 }),
  capacity: varchar("capacity", { length: 25 }),
  location: varchar("location", { length: 250 }),
  price_per_hour: varchar("price_per_hour", { length: 25 }).notNull(),
  amenities: varchar("amenities", { length: 500 }),
  image: varchar("image", { length: 2048 }).notNull(),
});

export type InsertRoom = typeof rooms.$inferInsert;
export type SelectRoom = typeof rooms.$inferSelect;

// Schema for selecting room - can be used to validate API Response
export const selectRoomSchema = createSelectSchema(rooms, {
  name: (schema) =>
    schema.name.min(1, { message: "Name is required" }).max(100),
}).omit({
  id: true,
});

// Schema for inserting room - can be used to validate API Request
export const insertRoomSchema = createInsertSchema(rooms);

export default rooms;
