package co.yedam.common;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO{
	
	public List<Employee> getEmpList() {
		connect();
		List<Employee> list = new ArrayList<>();
		
		String sql = "select * from empl_demo order by 1 desc";
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()) {
				Employee emp = new Employee();
				emp.setEmployeeId(rs.getInt("employee_id"));
				emp.setLastName(rs.getString("last_name"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date").substring(0, 10));
				emp.setJobId(rs.getString("job_id"));
				
				list.add(emp); //list컬렉션에 추가하겠습니다
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	
	
	public boolean insertEmp(Employee emp) {
		connect();
		String sql = "insert into empl_demo (employee_id, last_name, email, job_id, hire_date)\r\n"
				+ "values(?, ?, ?, ?, ?)";
				
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getEmployeeId());
			psmt.setString(2, emp.getLastName());
			psmt.setString(3, emp.getEmail());
			psmt.setString(4, emp.getJobId());
			psmt.setString(5, emp.getHireDate());
			int r = psmt.executeUpdate();
			System.out.println(r + " 입력됨.");
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}
		
	}
	

	public void updateEmp(String id, String phone, String salary) {
		connect();
		String sql = "update empl_demo set phone_number=?, salary=? where employee_id=?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, phone);
			psmt.setString(2, salary);
			psmt.setString(3, id);
			int r = psmt.executeUpdate();
			System.out.println(r + "건 수정됨.");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
	}
	
	
	public void deleteEmp(int empId) { // deleteEmp 를 get.jsp에서 호출 할 것이다.
		connect(); // conn = dbconnect.Connection
		String sql = "delete from empl_demo where employee_id = " + empId;
		// empId를 받아오면 sql 쿼리를 실행한다.
		try {
			stmt = conn.createStatement(); // Employee emp = new Employee();
			int r = stmt.executeUpdate(sql); //쿼리 실행하고 실행된 건수 담는다.
			System.out.println(r + "건 삭제됨.");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}
}
