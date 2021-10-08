package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;

@WebServlet("/CheckEmpServlet")
public class CheckEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public CheckEmpServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String id = request.getParameter("checkId");
//		id = "109";
		
		// {"retCode":"OK"} / {"retCode":"NG"}
		PrintWriter out = response.getWriter();
		
		EmpDAO dao = new EmpDAO();
		if(dao.checkId(id)) {
			// 입력한 아이디로 신규 생성.
			out.println("{\"retCode\":\"OK\"}");
			
		} else {
			// 있거나 에러발생.
			out.println("{\"retCode\":\"NG\"}");
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
