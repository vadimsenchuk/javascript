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

appData.expenses[
  prompt('Введите обязательную статью расходов в этом месяце', '')
] = prompt('Во сколько обойдется?', '');
appData.expenses[
  prompt('Введите обязательную статью расходов в этом месяце', '')
] = prompt('Во сколько обойдется?', '');

console.log(appData);

alert('Ваш бюджет на 1 день: ' + money / 30);
