export const slug = (val = "", sep = "_") => val.replace(/ /g, sep);

const months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
};

export const getBirthDateSymbol = (strDate) => {
    if(strDate === "Unknown") return "/img/birthdate/Unknown.svg";
    let [month, day] = strDate.split(" ");
    month = months[month];
    const path = "/img/birthdate/";
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22))
        return `${path}Capricorn.svg`;
    if ((month == 1 && day >= 21) || (month == 2 && day <= 18))
        return `${path}Aquarius.svg`;
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20))
        return `${path}Pisces.svg`;
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20))
        return `${path}Aries.svg`;
    if ((month == 4 && day >= 21) || (month == 5 && day <= 20))
        return `${path}Taurus.svg`;
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
        return `${path}Gemini.svg`;
    if ((month == 6 && day >= 22) || (month == 7 && day <= 22))
        return `${path}Cancer.svg`;
    if ((month == 7 && day >= 23) || (month == 8 && day <= 23))
        return `${path}Leo.svg`;
    if ((month == 8 && day >= 24) || (month == 9 && day <= 23))
        return `${path}Virgo.svg`;
    if ((month == 9 && day >= 24) || (month == 10 && day <= 23))
        return `${path}Libra.svg`;
    if ((month == 10 && day >= 24) || (month == 11 && day <= 22))
        return `${path}Scorpio.svg`;
    if ((month == 11 && day >= 23) || (month == 12 && day <= 21))
        return `${path}sagittarius.svg`;
};
