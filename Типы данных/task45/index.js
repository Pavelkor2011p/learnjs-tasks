function formatDate(date) {
    let now = new Date() - date;

    if (now < 1000) {
        return 'прямо сейчас';
    }
    let sec = Math.floor(now / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }
    let min = Math.floor(now / 60000);

    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(item => item.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );