package Quizz.com.example.Quizz.Model;

import javax.persistence.*;
@Entity
public class LessonsModel {
	

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="lessonid")
	private Integer lessonid;
	
	@Column(name="classid")
	private Integer classid;
	
	@Column(name="lessonname")
	private String lessonname;
	
	@Column(name="description")
	private String description;

	public Integer getLessonid() {
		return lessonid;
	}

	public void setLessonid(Integer lessonid) {
		this.lessonid = lessonid;
	}

	public Integer getClassid() {
		return classid;
	}

	public void setClassid(Integer classid) {
		this.classid = classid;
	}

	public String getLessonname() {
		return lessonname;
	}

	public void setLessonname(String lessonname) {
		this.lessonname = lessonname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LessonsModel(Integer lessonid, Integer classid, String lessonname, String description) {
		
		this.lessonid = lessonid;
		this.classid = classid;
		this.lessonname = lessonname;
		this.description = description;
	}

	public LessonsModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
