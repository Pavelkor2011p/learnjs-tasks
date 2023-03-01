let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

console.log( getLocalDay(date) );