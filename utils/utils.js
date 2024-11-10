import {
    Aquarius,
    Aries,
    Capricorn,
    Gemini,
    Leo,
    Libara,
    Pisces,
    Scorpio,
    Taurus,
    Unknown,
    Virgo,
  } from "../svgs/BirthdateIcon";

  export const slug = (val = "", sep = "_") => val.replace(/ /g, sep);

  const months = {
    "Jan.": 1,
    "Feb.": 2,
    "Mar.": 3,
    "Apr.": 4,
    "May": 5,
    "Jun.": 6,
    "Jul.": 7,
    "Aug.": 8,
    "Sep.": 9,
    "Oct.": 10,
    "Nov.": 11,
    "Dec.": 12,
  };

  // Zodiac signs with date ranges
  const zodiacSigns = [
    { symbol: Capricorn, start: [12, 22], end: [1, 20] },
    { symbol: Aquarius, start: [1, 21], end: [2, 18] },
    { symbol: Pisces, start: [2, 19], end: [3, 20] },
    { symbol: Aries, start: [3, 21], end: [4, 20] },
    { symbol: Taurus, start: [4, 21], end: [5, 20] },
    { symbol: Gemini, start: [5, 21], end: [6, 20] },
    { symbol: "Cancer.svg", start: [6, 22], end: [7, 22] },
    { symbol: Leo, start: [7, 23], end: [8, 23] },
    { symbol: Virgo, start: [8, 24], end: [9, 23] },
    { symbol: Libara, start: [9, 24], end: [10, 23] },
    { symbol: Scorpio, start: [10, 24], end: [11, 22] },
    { symbol: "sagittarius.svg", start: [11, 23], end: [12, 21] },
  ];

  // Function to get the zodiac symbol based on birthdate
  export const getBirthDateSymbol = (strDate) => {
    if (strDate === "Unknown") return Unknown;

    const [monthStr, dayStr] = strDate.split(" ");
    const month = months[monthStr];
    const day = parseInt(dayStr, 10);

    for (const { symbol, start, end } of zodiacSigns) {
      const [startMonth, startDay] = start;
      const [endMonth, endDay] = end;

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return symbol;
      }
    }

    return Unknown;
  };

  // Optimized fetch function
  export const fetchData = async (url) => {
    try {
      const response = await fetch(url);


      if (!response.ok) throw new Error(response.statusText);

      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  // utils/pathUtils.js
export const getMemberAvatar = (avatarName) =>
    `/img/members_sm/${avatarName}_avatar.png`;

export const getMemberProfilePicture = (avatarName) =>
    `/img/members_sm/${avatarName}_profile.png`;

export const getMemberProfileURL = (name) =>
    `/members/${name.replace(/ /g, "-")}`;

export const geMembertBgGradient = (color) =>
    `linear-gradient(180deg, ${color} 0%, transparent 100%)`;
