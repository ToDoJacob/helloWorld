// TR 태그 생성 연습
function createTr(person) {
    let tag = '<tr>';
    for (let field in person) {
        tag += '<td>' + person[field] + '</td>';
    }
    if(person.score >= 60) {
        tag += '<td class="pass">pass</td>' ;
    } else {
        tag += '<td class="fail">fail</td>' ;
    }
    tag += '</tr>';
    return tag;

}

function createTable() {
    let tag = '<table border="1">';
    tag += '<thead><tr>'
}

createTable();
