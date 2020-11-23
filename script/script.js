let mission = 1000;
let income = 'Фриланс'
let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = prompt ('Есть ли у вас депозит в банке?');
let expenses1 = prompt( 'Введите обязательную статью расходов?');
let amount1 = prompt ('Во сколько это обойдется?');
let expenses2 = prompt( 'Введите обязательную статью расходов?');
let amount2 = prompt ('Во сколько это обойдется?');
let budgetMonth = money - (Number(amount1) + Number(amount2));
let tar = parseInt(mission / budgetMonth);
let budgetDay = parseInt(budgetMonth / 30);

console.log(typeof money);
console.log(typeof income);
console.log(Boolean(deposit));
console.log(money);
console.log(addExpenses);

console.log(expenses1);
console.log(expenses2);
console.log(amount1);
console.log(amount2);
console.log(budgetMonth);
console.log('Ваша цель будет достигнута через: ' + tar + ' месяцев');
console.log(budgetDay);
console.log(addExpenses.length);
/*;

let deposit = false;
let addExpenses = 'Интернет, такси, коммуналка';
let period = 9;
let budgetDay ;*/


/*console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);*/