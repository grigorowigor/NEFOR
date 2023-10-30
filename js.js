//1

// // Получаем ссылки на инпут и абзац
// var input = document.getElementById('myInput');
// var paragraph = document.getElementById('myParagraph');

// // Добавляем обработчик события потери фокуса инпутом
// input.addEventListener('blur', function() {
//     // Получаем значение инпута
//     var inputValue = input.value;

//     // Добавляем значение инпута в конец текста абзаца
//     paragraph.textContent += ' ' + inputValue;
// });

//2
// Получаем кнопку и абзац
// var calculateButton = document.getElementById("calculateButton");
// var resultParagraph = document.getElementById("result");

// // Добавляем обработчик события для кнопки
// calculateButton.addEventListener("click", function() {
//     // Получаем значения из инпутов
//     var num1 = parseFloat(document.getElementById("input1").value);
//     var num2 = parseFloat(document.getElementById("input2").value);
//     var num3 = parseFloat(document.getElementById("input3").value);

//     // Проверяем, что введены числа
//     if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//         // Считаем сумму
//         var sum = num1 + num2 + num3;
//         // Выводим сумму в абзац
//         resultParagraph.textContent = "Сумма: " + sum;
//     } else {
//         // Если введены некорректные значения, выводим сообщение об ошибке
//         resultParagraph.textContent = "Пожалуйста, введите корректные числа";
//     }
// });

3

// Получаем ссылки на элементы
// var numberInput = document.getElementById("numberInput");
// var calculateButton = document.getElementById("calculateButton");
// var resultElement = document.getElementById("result");

// // Добавляем обработчик события клика на кнопке
// calculateButton.addEventListener("click", function() {
//     // Получаем значение из элемента ввода
//     var inputValue = numberInput.value;

//     // Проверяем, что введено число
//     if (!isNaN(inputValue)) {
//         // Преобразуем значение в строку, чтобы разбить на цифры
//         var numString = inputValue.toString();

//         // Инициализируем переменную для хранения суммы
//         var sum = 0;

//         // Проходимся по каждой цифре и суммируем их
//         for (var i = 0; i < numString.length; i++) {
//             sum += parseInt(numString[i]);
//         }

//         // Выводим сумму в элемент результата
//         resultElement.innerHTML = "Сумма цифр числа: " + sum;
//     } else {
//         resultElement.innerHTML = "Введите корректное число.";
//     }
// });

// 4

// // Получаем элемент input
// var inputElement = document.getElementById('numbers');

// // Добавляем обработчик события потери фокуса
// inputElement.addEventListener('blur', function() {
//     // Получаем введенные числа и разделяем их по запятой
//     var numbers = inputElement.value.split(',');

//     // Преобразуем строки в числа и вычисляем среднее арифметическое
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += parseFloat(numbers[i]);
//     }
//     var average = sum / numbers.length;

//     // Выводим результат в алерте
//     alert("Среднее арифметическое: " + average);
// });

// 5

// function splitFullName() {
//     var fullName = document.getElementById('fullNameInput').value;
//     var splitNames = fullName.split(' ');
//     document.getElementById('surnameInput').value = splitNames[0] || '';
//     document.getElementById('nameInput').value = splitNames[1] || '';
//     document.getElementById('patronymicInput').value = splitNames[2] || '';
// }

// 6

// function formatName() {
//     const input = document.getElementById("fullNameInput");
//     const fullName = input.value;
  
//     // Разбиваем ФИО на отдельные слова
//     const words = fullName.split(" ");
  
//     // Преобразуем каждое слово, делая первую букву заглавной
//     const formattedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
//     // Объединяем отформатированные слова и устанавливаем их в инпут
//     input.value = formattedWords.join(" ");
//   }

7

// // Находим элемент ввода текста
// const inputElement = document.getElementById('textInput');

// // Находим элемент, куда будем выводить количество слов
// const wordCountElement = document.getElementById('wordCount');

// // Добавляем обработчик события "blur" (потеря фокуса) к инпуту
// inputElement.addEventListener('blur', () => {
//   // Получаем текст из инпута
//   const text = inputElement.value;

//   // Разбиваем текст на слова с помощью пробелов в качестве разделителя
//   const words = text.split(' ');

//   // Фильтруем пустые строки (например, если в начале или в конце текста есть пробелы)
//   const nonEmptyWords = words.filter(word => word.trim() !== '');

//   // Получаем количество слов
//   const wordCount = nonEmptyWords.length;

//   // Выводим количество слов в элемент с id "wordCount"
//   wordCountElement.textContent = `Количество слов: ${wordCount}`;
// });

8

// // Получаем ссылку на input элемент
// var dateInput = document.getElementById("dateInput");

// // Добавляем обработчик события blur
// dateInput.addEventListener("blur", function() {
//     // Получаем введенную дату
//     var inputDate = dateInput.value;

//     // Разбиваем дату на части
//     var parts = inputDate.split('.');

//     if (parts.length === 3) {
//         // Переформатируем дату в нужный формат
//         var formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
        
//         // Устанавливаем новый формат даты в input
//         dateInput.value = formattedDate;
//     }
// });

9

// function checkPalindrome() {
//     // Get the value from the input
//     var word = document.getElementById("wordInput").value.toLowerCase();

//     // Remove spaces from the word (if any)
//     word = word.replace(/\s/g, '');

//     // Check if the word is a palindrome
//     var isPalindrome = true;
//     for (var i = 0; i < Math.floor(word.length / 2); i++) {
//         if (word[i] !== word[word.length - 1 - i]) {
//             isPalindrome = false;
//             break;
//         }
//     }

//     // Display the result
//     var resultElement = document.getElementById("result");
//     if (isPalindrome) {
//         resultElement.innerHTML = "The word '" + word + "' is a palindrome.";
//     } else {
//         resultElement.innerHTML = "The word '" + word + "' is not a palindrome.";
//     }
// }

10

// document.getElementById('numberInput').addEventListener('blur', function() {
//     var inputValue = this.value;
//     var containsThree = /3/.test(inputValue);

//     var resultElement = document.getElementById('result');
//     resultElement.textContent = containsThree ? 'The number contains the digit 3' : 'The number does not contain the digit 3';
// });

11

// document.getElementById('addNumbersButton').addEventListener('click', function() {
//     var paragraphs = document.querySelectorAll('#paragraphs p');

//     for (var i = 0; i < paragraphs.length; i++) {
//         var paragraph = paragraphs[i];
//         var paragraphNumber = i + 1;

//         // Добавляем порядковый номер в конец каждого абзаца
//         paragraph.textContent += ' ' + paragraphNumber;
//     }
// });

12

// // Получите все элементы <a> на странице
// const links = document.querySelectorAll('a');

// // Переберите каждую ссылку и добавьте href в круглых скобках
// links.forEach(link => {
//   const href = link.getAttribute('href'); // Получаем значение атрибута href
//   link.setAttribute('href', `${href} (${href})`); // Устанавливаем новое значение href
// });

14


// // Функция для вычисления квадрата числа и записи его в абзац
// function calculateSquareAndDisplay(id) {
//     const paragraph = document.getElementById(id);
//     const number = parseInt(paragraph.textContent);
//     const square = number * number;
//     paragraph.textContent = square;
// }

// // Назначение обработчика события для каждого абзаца
// document.getElementById('paragraph1').addEventListener('click', function () {
//     calculateSquareAndDisplay('paragraph1');
// });

// document.getElementById('paragraph2').addEventListener('click', function () {
//     calculateSquareAndDisplay('paragraph2');
// });

// document.getElementById('paragraph3').addEventListener('click', function () {
//     calculateSquareAndDisplay('paragraph3');
// });
// </script>

15

// // Функция для определения дня недели по дате
// function getDayOfWeek(dateString) {
//     const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const dateParts = dateString.split('.');
    
//     if (dateParts.length !== 3) {
//       return "Неверный формат даты";
//     }
  
//     const day = parseInt(dateParts[0]);
//     const month = parseInt(dateParts[1]) - 1; // Месяцы в JavaScript начинаются с 0
//     const year = parseInt(dateParts[2]);
  
//     const inputDate = new Date(year, month, day);
//     const dayOfWeek = daysOfWeek[inputDate.getDay()];
  
//     return dayOfWeek;
//   }
  
//   // Получаем элемент ввода даты
//   const dateInput = document.getElementById("yourInputId");
  
//   // Добавляем обработчик события потери фокуса
//   dateInput.addEventListener("blur", function () {
//     const inputValue = dateInput.value;
//     const dayOfWeek = getDayOfWeek(inputValue);
//     alert(`День недели: ${dayOfWeek}`);
//   });

16

// const inputField = document.getElementById('inputField');
// const incrementButton = document.getElementById('incrementButton');
// const decrementButton = document.getElementById('decrementButton');

// incrementButton.addEventListener('click', () => {
//     let value = parseInt(inputField.value);
//     if (!isNaN(value)) {
//         value += 1;
//         inputField.value = value;
//     }
// });

// decrementButton.addEventListener('click', () => {
//     let value = parseInt(inputField.value);
//     if (!isNaN(value) && value > 0) {
//         value -= 1;
//         inputField.value = value;
//     }
// });

17

// // Получаем ссылки на элементы DOM
// const totalClicksInput = document.getElementById("totalClicks");
// const paragraph1 = document.getElementById("paragraph1");
// const paragraph2 = document.getElementById("paragraph2");
// const paragraph3 = document.getElementById("paragraph3");

// let totalClicks = 0;

// // Функция для обработки нажатий
// function handleParagraphClick() {
//     totalClicks++;
//     totalClicksInput.value = totalClicks;
// }

// // Назначаем обработчики событий для каждого абзаца
// paragraph1.addEventListener("click", handleParagraphClick);
// paragraph2.addEventListener("click", handleParagraphClick);
// paragraph3.addEventListener("click", handleParagraphClick);

19

// // Получите все дивы на странице
// const divs = document.querySelectorAll('div');

// // Обойдите каждый див
// divs.forEach((div) => {
//   // Получите текст внутри дива
//   const text = div.textContent;

//   // Обрежьте текст до 10 символов
//   const trimmedText = text.slice(0, 10);

//   // Если текст был длиннее 10 символов, добавьте троеточие в конце
//   if (text.length > 10) {
//     div.textContent = trimmedText + '...';
//   } else {
//     div.textContent = trimmedText;
//   }
// });


21

{/* <script>
    function convertToFahrenheit() {
        // Получите значение из инпута
        var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);

        // Проверьте, что введенное значение является числом
        if (!isNaN(fahrenheit)) {
            // Переведите температуру из Фаренгейта в Цельсии
            var celsius = (fahrenheit - 32) * 5/9;
            // Выведите результат в абзац
            document.getElementById("celsiusResult").textContent = "Температура в градусах Цельсия: " + celsius.toFixed(2) + " °C";
        } else {
            alert("Пожалуйста, введите корректное число в градусах Фаренгейта.");
        }
    }
</script> */}

22
// // Получаем элементы DOM
// const inputNumber = document.getElementById("inputNumber");
// const calculateButton = document.getElementById("calculateButton");
// const resultParagraph = document.getElementById("result");

// // Функция для вычисления факториала
// function calculateFactorial() {
//   // Получаем значение из инпута
//   const inputNumberValue = inputNumber.value;

//   // Парсим введенное значение в целое число
//   const number = parseInt(inputNumberValue);

//   // Проверяем, что введенное значение является целым положительным числом
//   if (!isNaN(number) && number >= 0) {
//     // Вычисляем факториал
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }

//     // Выводим результат в абзац
//     resultParagraph.textContent = `Факториал числа ${number} равен ${factorial}`;
//   } else {
//     // Если введено некорректное значение, выводим сообщение об ошибке
//     resultParagraph.textContent = "Введите целое неотрицательное число.";
//   }
// }

// // Назначаем обработчик клика на кнопку
// calculateButton.addEventListener("click", calculateFactorial);

23

<script>
    function solveEquation() {
        var a = parseFloat(document.getElementById('a').value);
        var b = parseFloat(document.getElementById('b').value);
        var c = parseFloat(document.getElementById('c').value);

        var discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            document.getElementById('result').textContent = 'Корни уравнения: x1 = ' + x1 + ', x2 = ' + x2;
        } else if (discriminant === 0) {
            var x = -b / (2 * a);
            document.getElementById('result').textContent = 'Уравнение имеет один корень: x = ' + x;
        } else {
            document.getElementById('result').textContent = 'Уравнение не имеет действительных корней';
        }
    }
</script>