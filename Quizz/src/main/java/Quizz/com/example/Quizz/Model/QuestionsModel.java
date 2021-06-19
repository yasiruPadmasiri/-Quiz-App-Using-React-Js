package Quizz.com.example.Quizz.Model;


import javax.persistence.*;

@Entity
public class QuestionsModel {
	

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="questionid")
	private Integer questionid;

	@Column(name="classid")
	private Integer classid;
	
	@Column(name="lessonid")
	private Integer lessonid;
	
	@Column(name="question")
	private String question;// whitch quiz

	public Integer getQuestionid() {
		return questionid;
	}

	public void setQuestionid(Integer questionid) {
		this.questionid = questionid;
	}

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}

	public Integer getLessonid() {
		return lessonid;
	}

	public void setLessonid(Integer lessonid) {
		this.lessonid = lessonid;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public QuestionsModel(Integer questionid, Integer classid, Integer lessonid, String question) {
		
		this.questionid = questionid;
		this.classid = classid;
		this.lessonid = lessonid;
		this.question = question;
	}

	public QuestionsModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
