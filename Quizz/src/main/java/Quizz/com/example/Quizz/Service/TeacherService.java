package Quizz.com.example.Quizz.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Quizz.com.example.Quizz.Model.Classes;
import Quizz.com.example.Quizz.Repository.Classs;

@Service
public class TeacherService {

	@Autowired
	private Classs classes;
	
	
	public void createClasses(Classes createClass) {
		  classes.save(createClass);
	}


	public void getdetails() {
		
		// TODO Auto-generated method stub
		
	}
	
	
}
