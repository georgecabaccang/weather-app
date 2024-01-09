// format unix time to be able to display date
export function timeConverter(unixTime: number) {
    const date = new Date(unixTime * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dayToDisplay = day < 10 ? `0${day}` : day;
    const monthToDisplay = month < 10 ? `0${month}` : month;

    return `${dayToDisplay}/${monthToDisplay}/${year}`;
}
