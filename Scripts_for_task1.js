function Hello(form) 
{
    var text=form.text1.value
   alert('Привет, ' + text + '!')
}

function Year(form) 
{
    const this_year = new Date().getFullYear()
    var user_year  = form.text1.value
    var result = this_year - user_year

    alert('Вам ' + result + ' лет.')
}

function Perimeter(form) 
{
    var length = form.text1.value
    var perimeter = 4 * length

    alert('Периметр квадрата равен: ' + perimeter)
}

function Radius(form) 
{
    var p = Math.PI
    var r = form.text1.value
    var sr = r ** 2
    var s = p * sr

    alert('Площадь равна: ' + s.toFixed(2))
}

function Time(form) 
{
   var distance = form.text1.value
   var speed = form.text2.value
   var time = distance / speed
   
   alert('Время равно: ' + time)
}

function Convert(form) 
{
   const usd = 0.026
   var uah = form.text1.value
   var convert = uah * usd

   form.result.value = convert
}

function FlashDrive(form)
{
    var value_in_gb = form.text1.value
    var value_in_mb = value_in_gb * 1024
    var file_count = value_in_mb / 820

    alert('Ваш носитель объемом ' + value_in_gb + ' может вместить ' + file_count.toFixed(0) + ' файлов объемом 812мб')
}

function Store(form)
{
    var budget = form.text1.value
    var price = form.text2.value
    var count = budget / price
    var remainder = budget - count.toFixed(0) * price

    alert('На сумму ' + budget + ' вы сможете купить ' + count.toFixed(0) + ' шоколадок. ' + 'Остача средств: ' + remainder)
}

function Coup(form)
{
    var digit = form.text1.value
    var rev_digit = String(digit).split('').reverse().join('')

    alert('Обратное число равно: ' + rev_digit)
}

function Parity(form)
{
    var digit = form.text1.value
    var is_parity = (digit % 2 === 0) ? 'четное':'нечетное' 
    alert('Число ' + digit + ' - ' + is_parity)
}