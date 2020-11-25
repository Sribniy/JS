  
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

let getExpensesMonth = function (a, b){
    return +a + +b;
}(amount1, amount2);
console.log("Расходы за месяц " + getExpensesMonth);

let getAccumulatedMonth = function (a, b){
    return a - b;
}(money, getExpensesMonth);
console.log('Накопления за месяц  ' + getAccumulatedMonth);
 
let accumulatedMonth = getAccumulatedMonth;

let getTargetMonth = function (){
    return Math.ceil(money / accumulatedMonth);
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