import moment from "moment";

export function converterTime(timestamp) {
    const date = new Date(timestamp*1000);
    const timeStampCon = date.getHours() + ':' + date.getMinutes() + "0";
    return {
        time:timeStampCon,
        date: moment(date).format("dd D")
    };
}