let messages = ['Hello', 'Good Morning', 'Hi']

let ulTag = document.createElement('ul');
// ulTag.innerHTML = '<li>Hello</li>';

for (let i = 0; i < messages.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = messages[i];
    ulTag.appendChild(liTag);
}



// div에 자손으로 ulTag 붙여주기.
let divShow = document.getElementById('show');
divShow.appendChild(ulTag);

let fruits = [{
    name: '사과',
    price: 1000
}, {
    name: '바나나',
    price: 2000
}, {
    name: '체리',
    price: 3000
}];

//교수님 div찾기 소스
let divFruit = document.getElementById('fruit');
let ulTag2 = document.createElement('ul');

for (let fruit of fruits) {
    let li = document.createElement('li');
    li.innerHTML = fruit.name + ', ' + fruit.price
    ulTag2.appendChild(li);
}
divFruit.appendChild(ulTag2);

//내 div찾기 소스
/* let divFruit = document.getElementById('fruit');
let ulTag2 = document.createElement('ul');

for (let i=0; i<fruits.length; i++) {
let li = document.createElement('li');
li.innerHTML = fruits[i].name +', ' + fruits[i].price;
ulTag2.appendChild(li);
}
divFruit.appendChild(ulTag2); */

//div찾기 2
let multi = document.getElementById('multi');
let t = document.createElement('table');
t.setAttribute('border', '1');

let num = 3; //몇단?


//thead 영역
let tr = document.createElement('tr');
let th = document.createElement('th');
th.innerHTML = num + '단';
tr.appendChild(th);
t.appendChild(tr);

//tbody 영역
for (let i = 1; i < 10; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = num + '*' + i + '=' + (num * i);
    tr.appendChild(td);
    t.appendChild(tr);
}
multi.appendChild(t);