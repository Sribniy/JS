let money = 300;
let income = 'Фриланс';
let addExpenses = 'Интернет, такси, коммуналка';
let deposit = false;
let mission = 1000;
let period = 9;
let budgetDay = money / 30;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);