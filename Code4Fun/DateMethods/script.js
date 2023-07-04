$(document).ready(function () {
    const date = new Date();
    const currentDate = formatDate(date);
    const endDate = calculateEndDate(date);
    $("#date").append(currentDate);
    $("#endDate").append(endDate);
});

function formatDate(date) {
    const day = addLeadingZero(date.getDate());
    const month = addLeadingZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const time = formatTime(date);

    return `${day}/${month}/${year} ${time}`;
}

function formatTime(date) {
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());

    return `${hours}:${minutes}`;
}

function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

function calculateEndDate(date) {
    date.setFullYear(date.getFullYear() + 1, date.getMonth() + 1);
    date.setHours(23, 59);

    return formatDate(date);
}
