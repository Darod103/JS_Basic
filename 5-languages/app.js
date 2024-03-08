const language = prompt('Введя язык (en,ru,ja)');
switch(language) {
    case 'ru':
        alert('Привет!');
        break
    case 'en':
        alert('Hello');
        break
    case 'ja':
        alert("レビュー !");
        break;
    default:
        alert('Я незнаю такого языка');
        break;
}
