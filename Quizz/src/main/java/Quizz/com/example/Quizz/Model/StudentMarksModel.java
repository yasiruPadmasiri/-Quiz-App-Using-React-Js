package Quizz.com.example.Quizz.Model;


import javax.persistence.*;

@Entity
public class StudentMarksModel {


	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="stundentMarksId")
	private Integer stundentMarksId;
	
	@Column(name="quizModel")
	private Integer quizModel;
	
	
	@Column(name="studentId")
	private Integer studentId;
	
	@Column(name="marks")
	private Integer marks;

	public Integer getStundentMarksId() {
		return stundentMarksId;
	}

	public void setStundentMarksId(Integer stundentMarksId) {
		this.stundentMarksId = stundentMarksId;
	}

	public Integer getQuizModel() {
		return quizModel;
	}

	public void setQuizModel(Integer quizModel) {
		this.quizModel = quizModel;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public Integer getMarks() {
		return marks;
	}

	public void setMarks(Integer marks) {
		this.marks = marks;
	}

	public StudentMarksModel(Integer stundentMarksId, Integer quizModel, Integer studentId, Integer marks) {
		
		this.stundentMarksId = stundentMarksId;
		this.quizModel = quizModel;
		this.studentId = studentId;
		this.marks = marks;
	}

	public StudentMarksModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
