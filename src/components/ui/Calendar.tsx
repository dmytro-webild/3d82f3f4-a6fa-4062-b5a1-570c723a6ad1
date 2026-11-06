"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cls } from "@/lib/utils";

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
}

const Calendar = ({ selected, onSelect, className = "" }: CalendarProps) => (
  <DayPicker
    mode="single"
    selected={selected}
    onSelect={onSelect}
    showOutsideDays
    className={cls("p-3 secondary-button rounded", className)}
    classNames={{
      month_caption: "flex items-center h-8 mb-2",
      nav: "absolute top-0 right-0 flex items-center h-8",
      caption_label: "relative z-[1] inline-flex items-center whitespace-nowrap border-0 text-base font-medium text-secondary-cta-text",
      button_previous: "relative inline-flex items-center justify-center size-8 border-0 bg-transparent p-0 m-0 cursor-pointer text-secondary-cta-text hover:bg-foreground/10 rounded transition-colors duration-300",
      button_next: "relative inline-flex items-center justify-center size-8 border-0 bg-transparent p-0 m-0 cursor-pointer text-secondary-cta-text hover:bg-foreground/10 rounded transition-colors duration-300",
      chevron: "size-4 fill-secondary-cta-text",
      weekdays: "flex",
      weekday: "w-8 text-sm font-medium text-secondary-cta-text/50 text-center",
      week: "flex mt-1",
      day: "size-8 text-center p-0",
      day_button: "size-8 rounded text-sm text-secondary-cta-text hover:bg-foreground/10 cursor-pointer transition-colors duration-300",
      selected: "[&>button]:bg-foreground [&>button]:text-background [&>button]:hover:bg-foreground/90",
      today: "[&>button]:font-bold",
      outside: "[&>button]:opacity-30",
      disabled: "[&>button]:opacity-30 [&>button]:cursor-not-allowed",
    }}
  />
);

export default Calendar;
