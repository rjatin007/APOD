export const formatDate = date => {
    var month_names = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"];
    let newDate = new Date(`${date}`)
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    return `${day}-${month_names[month]}-${year}`
}
export const returnDate = (d) => {

    let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

}
export const getDate = () => {
    let date = new Date();
    return {
        current_date: returnDate(new Date(date.getTime() - (1 * 24 * 60 * 60 * 100))),
        start_date: returnDate(new Date(date.getTime() - (10 * 24 * 60 * 60 * 1000)))
    }
}