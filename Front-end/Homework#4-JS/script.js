"use strict"
// 5. Написать код, который выводит в консоль название оценки. Пример: 2 - плохо, 3 - средне, 4 - хорошо, 5 - отлично.
// Если оценка отличается - вывести слово "Ошибка". Мы создаем переменную 'mark', которой присваиваем значение оценки.
// Вывод совершаем с помощью команды 'console.log'
var mark= prompt ("\"Введите число от 2 до 5\"");
if (mark==2) {
            alert('Плохо');
}   else if (mark==3) {
            alert('Средне');
}   else  if (mark==4) {
            alert ('Хорошо');
}   else  if (mark==5) {
            alert ('Отлично');
}		else {
						alert ('Ошибка');
}
					
var mark = 5;
switch (mark) {
	case 2:
		console.log ("Bad");
			break;
	case 3:
		console.log ("Medium");
			break;
	case 4:
		console.log ("Good");
			break;
	case 5:
		console.log ("Super");
		break;
		default :
		console.log ("Error");
		break;
}
// 3. Разобраться, что такое тернарный оператор(с помощью гугла). Переписать код ниже с его помощью.

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
var result = (a + b < 4) ? "Мало" : "Много" ;