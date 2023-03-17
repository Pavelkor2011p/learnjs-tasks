function getSecondsToTomorrow() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(),now.getDate() +1);

    return Math.round((today - now) / 1000);
}


console.log(getSecondsToTomorrow());