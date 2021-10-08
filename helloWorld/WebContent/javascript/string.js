'hello'.slice(0, 3); //-->l
'hello'.substring(0, 3); //-->else
'hello'.substr(1, 2); //-->l
/* 'hello'.match()*/

//970101-2345678
//990301-1234567
//000503-3456789
//0109014567890
//라고 넣으면 주민 뒷자리 첫번째 숫자를 체크하고 남여구분하는 함수를 만드시오.
/* 
//내소스
function checkGender(birthInfo) { // 입력된 주민번호 => 남여구분하는 함수.
    // 2000년 01.01 이전 출생자 주민번호 뒷자리 (1:남자, 2:여자)
    // 2000년 01.01 이후 출생자 주민번호 뒷자리 (3:남자, 4:여자)
    let gen = birthInfo.slice(-7,-6)
    
    if (gen = '1' | '3'){
        return '남자';
    } else {
        return '여자';
    }
} */

//교수님 소스
function checkGender(birthInfo) {
    let today = new Date();
    console.log(today.getFullYear);

    let year = birthInfo.substr(0, 2);
    birthInfo = birthInfo.replace('-', '');
    let s = birthInfo.charAt(6);
    let returnMessage = '';
    if ((s == '1' && parseInt(year) > 21) || (s == '3' && parseInt(year) <= 21)) {
        returnMessage = '남자';
    } else if ((s == '2'&& parseInt(year) >21) || (s == '4' && parseInt(year) <= 21)) {
        returnMessage = '여자';
    } else {
        returnMessage = 'error';
    }
    return returnMessage;
}

console.log(checkGender('970101-2345678'));
console.log(checkGender('990301-1234567'));
console.log(checkGender('000503-3456789'));
console.log(checkGender('0109014567890'));