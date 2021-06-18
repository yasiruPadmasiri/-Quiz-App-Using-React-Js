package Quizz.com.example.Quizz.Model;

import javax.persistence.*;

@Entity
public class AnswersModel {


	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="answermodelid")
	private Integer answermodelid;
	
	@Column(name="questionid")
	private Integer questionid;
	
	@Column(name="questionOne")
	private String questionOne;

	@Column(name="questionTwo")
	private String questionTwo;

	@Column(name="questionThree")
	private String questionThree;

	@Column(name="questionFour")
	private String questionFour;
	
	@Column(name="answer")
	private Integer answer;

	public AnswersModel(Integer answermodelid, Integer questionid, String questionOne, String questionTwo,
			String questionThree, String questionFour,Integer answer) {
		
		this.answermodelid = answermodelid;
		this.questionid = questionid;
		this.questionOne = questionOne;
		this.questionTwo = questionTwo;
		this.questionThree = questionThree;
		this.questionFour = questionFour;
		this.answer=answer;
	}

	public Integer getAnswer() {
		return answer;
	}

	public void setAnswer(Integer answer) {
		this.answer = answer;
	}

	public AnswersModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getAnswermodelid() {
		return answermodelid;
	}

	public void setAnswermodelid(Integer answermodelid) {
		this.answermodelid = answermodelid;
	}

	public Integer getQuestionid() {
		return questionid;
	}

	public void setQuestionid(Integer questionid) {
		this.questionid = questionid;
	}

	public String getQuestionOne() {
		return questionOne;
	}

	public void setQuestionOne(String questionOne) {
		this.questionOne = questionOne;
	}

	public String getQuestionTwo() {
		return questionTwo;
	}

	public void setQuestionTwo(String questionTwo) {
		this.questionTwo = questionTwo;
	}

	public String getQuestionThree() {
		return questionThree;
	}

	public void setQuestionThree(String questionThree) {
		this.questionThree = questionThree;
	}

	public String getQuestionFour() {
		return questionFour;
	}

	public void setQuestionFour(String questionFour) {
		this.questionFour = questionFour;
	}
	
	
	
	
	
}
