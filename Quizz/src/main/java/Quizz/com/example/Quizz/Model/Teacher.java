package Quizz.com.example.Quizz.Model;


import javax.persistence.*;


@Entity
public class Teacher {
	
	
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
	 
//	 @Column(name="class")
//	 @OneToMany()
//	 private Classes classes;
//	 

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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Teacher(int userid, String email, String password, String role, String fname, String lname) {
		
		this.userid = userid;
		this.email = email;
		this.password = password;
		this.role = role;
		this.fname = fname;
		this.lname = lname;
	}

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

}
