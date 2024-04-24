

let number1 = parseInt(prompt("Введите первое число: "))
let number2 = parseInt(prompt("Введите второе число: "))

if (confirm("Сложение?")) { 
    alert(number1 + number2)
}
else if (confirm("Умножение?")){ 
    alert(number1 * number2)
}
else if (confirm("Деление?")){ 
    alert(number1 / number2)
}
else if (confirm("Вычитание?")){ 
    alert(number1 - number2)
}