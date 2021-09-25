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
    May: 5,
    "Jun.": 6,
    "Jul.": 7,
    "Aug.": 8,
    "Sep.": 9,
    "Oct.": 10,
    "Nov.": 11,
    "Dec.": 12,
};

export const getBirthDateSymbol = (strDate) => {
    if (strDate === "Unknown") return Unknown;
    let [month, day] = strDate.split(" ");
    month = months[month];
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22))
        return Capricorn;
    if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) return Aquarius;
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return Pisces;
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) return Aries;
    if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) return Taurus;
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return Gemini;
    if ((month == 6 && day >= 22) || (month == 7 && day <= 22))
        return `Cancer.svg`;
    if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) return Leo;
    if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) return Virgo;
    if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) return Libara;
    if ((month == 10 && day >= 24) || (month == 11 && day <= 22))
        return Scorpio;
    if ((month == 11 && day >= 23) || (month == 12 && day <= 21))
        return `sagittarius.svg`;
};

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw Error(response.statusText);

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
