let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const kim = {
    name: '김동관',
    age: 20,
    score: 90
}
const han = {
    name: '한동일',
    age: 21,
    score: 89
}

for(let field in han){
    console.log(field + '-' + han[field])
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 98
}

console.log(kim.name);    // 1
console.log(kim['age']); // 2
let field = 'score';
console.log(kim[field]); // 3

// const persons = [kim,han,yun];
// for(let i=0; i < persons.length; i++){
// console.log(persons[i].name); //persons라는 배열에 저장된 kim이라는 변수의
//                             //name을 출력해달라
// console.log(persons[i]['age']);
// field = 'score';
// console.log(persons[i][field]);
// console.log('=======')
// }

// const persons2 = [kim,han,yun];
// for(let person of persons2){
// console.log(person[i].name); 
// console.log(person[i]['age']);
// field = 'score';
// console.log(person[i][field]);
// console.log('=======')
// }

const persons = [kim,han,yun];
for (let person of persons){
    document.write('<ul>')
    for(let field in person){
        console.log(person[field]);
        document.write('<li class="'+ field+ '">' + person[field] + '</li>')
    }
    document.write('</ul>')
    console.log('======')
}

