export type AllFlags = { path: string; name: string };

// Contains user numbers and their canonical numbers
// (prime factors and their degrees).
export type CanonicalData = {
  [key: string]: { [key: string]: { degree: number } };
};
// example:
// const canonical: CanonicalData = {
//   "24": { "2": { degree: 3 }, "3": { degree: 1 } },
//   "36": { "2": { degree: 2 }, "3": { degree: 2 } },
//   "60": { "2": { degree: 2 }, "3": { degree: 1 }, "5": { degree: 1 } },
//   "108": { "2": { degree: 3 }, "3": { degree: 2 } },
// };

export type MinMaxDegree = {
  [key: string]: {
    count: number;
    minDegree: number;
    maxDegree: number;
    answer: number;
  };
};
// example:
// const data: MinMaxDegree = {
//   "2": { count: 4, minDegree: 2, maxDegree: 3 },
//   "3": { count: 4, minDegree: 1, maxDegree: 2 },
//   "5": { count: 1, minDegree: 1, maxDegree: 1 },
//   userNumbers: [24, 36, 60, 108],
// };
