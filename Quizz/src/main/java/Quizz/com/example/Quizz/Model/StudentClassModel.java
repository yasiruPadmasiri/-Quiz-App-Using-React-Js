package Quizz.com.example.Quizz.Model;
import javax.persistence.*;

@Entity
public class StudentClassModel {
	
	@Id
	 @GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="studentclassid")
	private Integer studentclassid;
	
	@Column(name="classid")
	private Integer classid;
	
	@Column(name="studentid")
	private  Integer studentid;

	public Integer getStudentclassid() {
		return studentclassid;
	}

	public void setStudentclassid(Integer studentclassid) {
		this.studentclassid = studentclassid;
	}

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}

	public Integer getStudentid() {
		return studentid;
	}

	public void setStudentid(Integer studentid) {
		this.studentid = studentid;
	}

	public StudentClassModel(Integer studentclassid, Integer classid, Integer studentid) {
		
		this.studentclassid = studentclassid;
		this.classid = classid;
		this.studentid = studentid;
	}

	public StudentClassModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
