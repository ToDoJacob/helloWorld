function createRow(row) {
    // 2*1=2 3*1=3 4*1=4 ....... 9*1=9
    let tr = document.createElement('tr');
    
    for(let i=2; i<=9; i++){
        let td = document.createElement('td');
        td.innerHTML = i + '*' + row + '=' + (i * row);
        tr.appendChild(td);
    }

    return tr;
}

let table = document.createElement('table');
table.setAttribute('border', '1');

for (let i = 1; i <= 9; i++) {
    table.appendChild(createRow(i));
}

let mul = document.getElementById('multi');
mul.appendChild(table);