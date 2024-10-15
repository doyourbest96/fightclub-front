import { TimeDifference } from "@/types";

export function diffTimeFromNow(targetDate: Date): TimeDifference {
  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const millisecondsDiff = targetDate.getTime() - now.getTime();

  // If the target date is in the past, return a message
  if (millisecondsDiff < 0) {
    return {
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1,
    };
  }

  // Calculate total seconds from milliseconds
  const totalSeconds = Math.floor(millisecondsDiff / 1000);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
