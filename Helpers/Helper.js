export function convertDateToString(selectedDate) {
  // Define an array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Function to get the day name from the day index
  function getDayName(dayOfWeek) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayOfWeek];
  }

  // Get the day of the week as a number
  const dayOfWeek = selectedDate.getDay();
  // Get the day of the month
  const dayOfMonth = selectedDate.getDate();
  // Get the month
  const monthName = months[selectedDate.getMonth()];
  // Get the year
  const year = selectedDate.getFullYear();
  const formattedDateString = `${getDayName(
    dayOfWeek
  )} ${monthName} ${dayOfMonth} ${year}`;

  return formattedDateString;
}
