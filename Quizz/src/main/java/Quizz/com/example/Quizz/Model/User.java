package Quizz.com.example.Quizz.Model;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	 public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
	 @GeneratedValue(strategy= GenerationType.AUTO)
	 @Column(name="userid")
	private int userid;
	 
	 @Column(name="email")
	 private String email;
	 
	 @Column(name="password")
	 private String password;
	 
	 @Column(name="role")
	 private String role;
	 
	 @Column(name="fname")
	 private String fname;
	 
	 @Column(name="lname")
	 private String lname;

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User(int userid, String email, String password,String role,String fname,String lname) {
		
		this.userid = userid;
		this.email = email;
		this.password = password;
		this.role=role;
		this.fname=fname;
		this.lname=lname;
	}
	
	 
	 
	
}
