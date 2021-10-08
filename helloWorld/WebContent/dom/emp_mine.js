let xhtp = new XMLHttpRequest();
		xhtp.onload = function() {
			let data = JSON.parse(xhtp.responseText)
			showEmpList(data);		
			
		}
		xhtp.open('get', '../empJsonServlet.json'); //dom/empList.html이 있는
		xhtp.send();
		
		function showEmpList(data) {
			let table, tr, td, txt;
			table = document.createElement('table');
			table.setAttribute('border', '1');
			
			
			//타이틀 헤더
			tr = document.createElement('tr');
			table.appendChild(tr);
			for (let field in data[0]){
			th = document.createElement('th');
			txt = document.createTextNode(field.toUpperCase());
			th.appendChild(txt);
			tr.appendChild(th);
            }
            th = document.createElement('th');
            th.innerHTML='삭제';
            tr.appendChild(th);
        
            
			
			for (let obj of data){
				tr = document.createElement('tr');
				table.appendChild(tr);
//				for(let field in obj[0]) {
				for(let field in obj) {
					td = document.createElement('td');
					//let id = data[obj].childNodes[field].firstChild.nodeValue;
//					txt = document.createTextNode(id);
					txt = document.createTextNode(obj[field]);
					td.appendChild(txt);
					tr.appendChild(td);
                    
				}
                td = document.createElement('td');
                    td.innerHTML='<button>삭제</button>';
                    tr.appendChild(td);
			}
			document.getElementById('show').appendChild(table);
		}
			
			function getRow(row) {
				}
			
			function getTitle() {
			}