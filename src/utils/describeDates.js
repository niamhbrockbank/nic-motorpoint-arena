import moment from "moment";

/**
 * Converts an array of dates into human readable description of dates
 * @param {string[]} dateArr Array of date strings
 * @returns {string} Description of the dates available
 */
export default function describeDates(dateArr) {
  const numOfDates = dateArr.length;

  if (dateArr[0].date === ""){
    return ""
  }

  const longFormDates = dateArr.map((d) =>
    moment(d.date).format("Do MMMM YYYY")
  );

  if (numOfDates === 1) {
    return longFormDates[0];
  } else if (numOfDates === 2) {
    return `${longFormDates[0]} & ${longFormDates[1]}`;
  }

  return `${longFormDates[0]} - ${longFormDates[numOfDates - 1]}`;
}
