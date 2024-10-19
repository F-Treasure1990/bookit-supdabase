"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import DateTimePicker from "./room-date-time-picker.client";

export default function RoomBookingForm() {
  const [startDateTime, setStartDateTime] = useState<Date>();
  const [endDateTime, setEndDateTime] = useState<Date>();

  return (
    <div className="flex flex-col gap-4">
      <DateTimePicker
        date={startDateTime}
        onDateChange={setStartDateTime}
        placeholder="Pick a check-in date & time"
      />
      <DateTimePicker
        date={endDateTime}
        onDateChange={setEndDateTime}
        placeholder="Pick a check-out date & time"
      />
      <Button className="col-span-2 mt-4 w-full" size="lg">
        Book Now
      </Button>
    </div>
  );
}
