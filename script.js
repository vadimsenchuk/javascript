'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', ''),
  appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    optinalExpenses: {}
  };

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
  let b = prompt('Во сколько обойдется?', '');

  appData.expenses[a] = b;
}

console.log(appData);

alert('Ваш бюджет на 1 день: ' + money / 30);
