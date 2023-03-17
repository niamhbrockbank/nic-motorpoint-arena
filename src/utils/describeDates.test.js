import describeDates from "./describeDates";

test("formats single date correctly", () => {
  const singleDate = [{ date: "2023-05-06" }];

  expect(describeDates(singleDate)).toBe("6th May 2023");
});

test("formats two dates correctly", () => {
  const doubleDate = [{ date: "2023-05-06" }, { date: "2023-06-11" }];

  expect(describeDates(doubleDate)).toBe("6th May 2023 & 11th June 2023");
});

test("formats multiple dates correctly", () => {
  const multipleDates = [
    { date: "2023-05-06" },
    { date: "2023-06-11" },
    { date: "2023-11-23" },
  ];

  expect(describeDates(multipleDates)).toBe(
    "6th May 2023 - 23rd November 2023"
  );
});
