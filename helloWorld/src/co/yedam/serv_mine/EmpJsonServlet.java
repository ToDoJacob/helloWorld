package co.yedam.serv_mine;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;
import co.yedam.common.Employee;

@WebServlet("/empJsonServlet.json")
public class EmpJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public EmpJsonServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		EmpDAO dao = new EmpDAO(); //인스턴스 생성
		List<Employee> list = dao.getEmpList();
		// {"name":"Hongkildong", "age":15, "score": 80} ==> JSON 타입 데이터
//		out.println("{\"name\":\"Hongkildong\", \"age\":15, \"score\": 80}");
		// {"empId":"?(DB에서가지고온값)", "lname":"?", "email":"?", "hireDate":"?", "job":"?"} 
		int cnt = 0 , lastCnt = list.size();
		out.println("[");
		for (Employee emp : list) {
			out.println("{\"empId\":\"" + emp.getEmployeeId()
						+"\", \"lname\":\"" + emp.getLastName()
						+"\", \"email\":\"" + emp.getEmail()
						+"\", \"hireDate\":\"" + emp.getHireDate()
						+"\", \"job\":\"" + emp.getJobId() + "\"}");
			// , 마지막 건 뒤에 ,는 없애기
			cnt++;
			if(cnt != lastCnt) {
				out.println(",");
			}
		}
		out.println("]");
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		doGet(request, response);
	}

}
