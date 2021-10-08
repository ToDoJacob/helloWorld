<%@page import="co.yedam.common.EmpDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form/get.jsp</title>
</head>
<body>
<%
	EmpDAO dao = new EmpDAO();
	//String id = request.getParameter("userId"); //userId=guest
	//userId라는 파라미터값 (guest)를 받아와서 String id 에 담겠습니다.
	//String pw = request.getParameter("userPw"); //userPw=1234
	//out.println("<h1>아이디: " + id + "</h1>");
	//out.println("<h1>비번: " + pw + "</h1>");
	//dao.deleteEmp(Integer.parseInt(id));
	//out.println("<h3>정상적으로 삭제</h3>");
	
	
	String id = request.getParameter("employeeId"); 
	String phone = request.getParameter("phone"); 
	String salary = request.getParameter("salary");
	dao.updateEmp(id, phone, salary);
	out.println("<h3>정상적으로 수정됨.</h3>");
	
	
%>
</body>
</html>