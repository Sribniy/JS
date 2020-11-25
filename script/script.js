let mission = 1000;
let income = 'Фриланс';
let money = prompt('Ваш месячный доход?', '1000');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Хлеб, вода, мука');
let deposit = confirm ('Есть ли у вас депозит в банке?');
let expenses1 = prompt( 'Введите обязательную статью расходов?', 'Кино');
let amount1 = prompt ('Во сколько это обойдется?', 50);
let expenses2 = prompt( 'Введите обязательную статью расходов?', 'Вино');
let amount2 = prompt ('Во сколько это обойдется?', 50);


let showTypeof = function(item){
    console.log (typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function (){
    return +amount1 + +amount2;
};
console.log ('Расходы за месяц ' + getExpensesMonth());


let getAccumulatedMonth = function (){
    return money - getExpensesMonth();
};
console.log ('Накопления за месяц  ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function (){
    return money / accumulatedMonth;
};
console.log ('Цель буде достигнута за ' + getTargetMonth() + ' месяца');

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Ваш дневной бюджет ' + budgetDay);

let getStatusIncome = function(){   
if (budgetDay >=1200){
    return('У вас высокий уровень дохода!');
}else if (budgetDay >=600 && budgetDay < 1200 ) {
    return('У вас средний уровень дохода!'); 
}else if (budgetDay >= 0 && budgetDay < 600) {
    return('К сожалению у вас уровень дохода ниже среднего!'); 
}else if (budgetDay < 0) {
    return('Что то пошло не так');
}   
};
console.log(getStatusIncome());

 /*let getAccumulatedMonth = 0;
 const sum1 = function(a, b) {
    getAccumulatedMonth = Number (a) -  Number (b);
 };
 sum1(money, getExpensesMonth);
  console.log('Накопления за месяц (Доходы минус расходы) ' + getAccumulatedMonth);

let accumulatedMonth = getAccumulatedMonth;

let getTargetMonth = 0;
const sum3 = function(a, b) {
    getTargetMonth = Math.floor(a / b);
};
sum3(mission, accumulatedMonth);
 console.log('Цель будет достигнути через ' + getTargetMonth + ' месяца');

 let budgetDay = Math.floor(accumulatedMonth / 30);
 
console.log(addExpenses);

console.log(budgetDay);*/
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

/*console.log(typeof money);
console.log(typeof income);
console.log(deposit);
console.log(money);
console.log(addExpenses);

console.log(expenses1);
console.log(expenses2);
console.log(amount1);
console.log(amount2);
console.log('Ваша цель будет достигнута через: ' + tar + ' месяцев');
console.log(addExpenses.length);
console.log('Ваш бюджет на день ' + budgetDay + ' рублей');




*/