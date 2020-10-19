/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let element of array) {
    fn(element);
  }
}

// forEach([1, 2, 3], (el) => console.log(el));

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  let newArray = [];
  for (let element of array) {
    newArray.push(fn(element));
  }
  return newArray;
}

// let array = map([1, 2, 3], (el) => el ** 2)
// console.log(array);
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial = null) {
  let newArr = initial ? [initial, ...array] : array;
  let result;
  for (let element of newArr) {
    result = result ? fn(result, element) : element;
  }
  return result;
}

console.log(reduce([1, 2, 3], (all, current) => all * current,30) )

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  return Object.keys(obj).map(v => v.toUpperCase())
}

console.log(upperProps({ name: 'Сергей', lastName: 'Петров' }));

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */

function createProxy(obj) {

  return new Proxy(obj, {
    set: function(obj, prop, value) {
      obj[prop] = value * 2;
      return  true;
    }
  });
}


const obj = createProxy({});
obj.foo = 2;
console.log(obj.foo); // 4

export { forEach, map, reduce, upperProps, createProxy };
