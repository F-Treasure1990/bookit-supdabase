"use client";

import { format, setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface DateTimePickerProps {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
  placeholder: string;
}

export default function DateTimePicker({
  date,
  onDateChange,
  placeholder,
}: DateTimePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP HH:mm") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
        />
        <div className="border-t border-border p-3">
          <Select
            value={date ? format(date, "HH:mm") : undefined}
            onValueChange={(time) => {
              onDateChange(
                setMinutes(
                  setHours(date || new Date(), parseInt(time.split(":")[0])),
                  parseInt(time.split(":")[1])
                )
              );
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <SelectItem
                  key={hour}
                  value={`${hour.toString().padStart(2, "0")}:00`}
                >
                  {`${hour.toString().padStart(2, "0")}:00`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
}
