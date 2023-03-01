let login = prompt('Введите логин');

if (login === '' || login === null) {
    alert('Отменено');
} else if (login === 'Админ') {
    let password = prompt('Введите пароль');
    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else alert('Неверный пароль');
} else alert('Неверный логин');