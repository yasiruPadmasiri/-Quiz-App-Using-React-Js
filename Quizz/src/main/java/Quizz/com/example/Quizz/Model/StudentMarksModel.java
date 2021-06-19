package Quizz.com.example.Quizz.Model;


import javax.persistence.*;

@Entity
public class StudentMarksModel {


	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="stundentMarksId")
	private Integer stundentMarksId;
	
	
}
