package co.yedam.serv;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.EmpDAO;

@WebServlet("/delEmpServlet")
public class DelEmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public DelEmpServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();

		String delId = request.getParameter("delId");

		EmpDAO dao = new EmpDAO();
		if (dao.deleteEmployee(delId) != -1) {
			// {"retCode":"success", "id":delId}
			out.println("{\"retCode\":\"success\", \"id\":" + delId + "}");
		} else {
			// {"retCode":"fail"}
			out.println("{\"retCode\":\"fail\"}");
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
