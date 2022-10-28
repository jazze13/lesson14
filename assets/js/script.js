"use strict";


// выполнение по нажатию на кнопку с задержкой
const functionButtons = document.querySelectorAll('.functions_list__button');
functionButtons.forEach(button => {
    button.addEventListener('click', function() {
        switch(this.id) {
            case 'exercises1':
                exercises1();
                break;
            case 'arrays':
                arrays();
                break;
            case 'objects':
                objects();
                break;
            case 'multiArrays':
                multiArrays();
                break;
        }
    })
})




// задачи для решения
function exercises1() {
    console.log('%cЗадачи для решения', 'font-size:20px; font-weight:900;');

    // 1
    let arr = ['привет, ', 'мир', '!'];
    console.log('1: ' + arr.join('') );

    // 2
    let str = ''
    for (let element of arr)
        str += element
    console.log('2: ' + str);

    // 3
    arr[0] = 'пока, ';
    console.log('3: ' + arr.join('') );

    // 4
    let obj = {
        kolya: 100,
        petya: 101
    }
    console.log('4: ', obj.kolya, obj.petya);

    // 5
    arr = {
        'ru':['голубой', 'красный', 'зеленый'],
        'en':['blue', 'red', 'green']
    }
    console.log('5: ' + arr.ru[1]);
}

// работа с массивами
function arrays() {
    console.log('%cРабота с массивами', 'font-size:20px; font-weight:900;');
    
    // 1
    let arr = ['a', 'b', 'c'];
    alert('1: ' + arr);

    // 2
    console.log('2: ', arr[0], arr[1], arr[2]);

    // 3
    arr = ['a', 'b', 'c', 'd'];
    console.log('3: ', `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

    // 4
    arr = [2, 5, 3, 9];
    let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
    console.log('4: ' + result);
}

// Объекты (ассоциативные массивы)
function objects() {
    console.log('%cОбъекты (ассоциативные массивы)', 'font-size:20px; font-weight:900;');
    
    // 1
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    console.log('1: ', obj['c'], obj.c);

    // 2
    obj = {
        коля:1000,
        вася:500,
        петя:200
    }

    console.log('2: ', obj['коля'], obj['петя'])

    // 3
    obj = {
        1:'monday',
        2:'tuesday',
        3:'wednesday',
        4:'thursday',
        5:'friday',
        6:'saturday',
        7:'sunday'
    }

    console.log(obj[5]);

    // 4
    let day = 5;
    console.log(obj[day]);
}

// многомерные массивы
function multiArrays() {
    console.log('%cМногомерные массивы', 'font-size:20px; font-weight:900;');
    
    // 1
    let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
    console.log('1: ' + arr[1][0]);

    // 2
    let obj = {
        js: ['jQuerry', 'Angular'],
        php: 'hello',
        css: 'world'
    }

    console.log('2: ' + obj.js[0]);

    // 3
    obj = {
        ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
        en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    }

    console.log('3: ', obj.ru[0], obj.en[2]);

    // 4
    let lang = 'ru';
    let day = 5;

    console.log('4: ', obj[lang][day - 1]);
}




// ripple click effect
const click_effect = document.querySelectorAll('.click_effect');
click_effect.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        let face = document.createElement('span');
        face.className = 'face';
        face.style.top = ripple.style.top;
        face.style.left = ripple.style.left;

        this.appendChild(ripple);
        this.appendChild(face);

        setTimeout(() => {
            ripple.remove();
            face.remove();
        }, 500);
    })
})