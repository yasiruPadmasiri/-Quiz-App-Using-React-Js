package Quizz.com.example.Quizz.Model;

import javax.persistence.*;

@Entity
public class Classes {
	

	@Id
	 @GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="classid")
	private Integer classid;
	
	
	@Column(name="grade")
	private Integer grade;

	@Column(name="classname")
	private String classname;
	
	@Column(name="subject")
	private  String subject;
	

	@Column(name="email")
	private String email;
	


	public Classes(Integer classid, Integer grade, String classname, String subject, String email) {
		
		this.classid = classid;
		this.grade = grade;
		this.classname = classname;
		this.subject = subject;
		this.email = email;
	}


	public Classes() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getClassid() {
		return classid;
	}


	public void setClassid(Integer classid) {
		this.classid = classid;
	}


	public Integer getGrade() {
		return grade;
	}


	public void setGrade(Integer grade) {
		this.grade = grade;
	}


	public String getClassname() {
		return classname;
	}


	public void setClassname(String classname) {
		this.classname = classname;
	}


	public String getSubject() {
		return subject;
	}


	public void setSubject(String subject) {
		this.subject = subject;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	
	
	
	
	
	

}
