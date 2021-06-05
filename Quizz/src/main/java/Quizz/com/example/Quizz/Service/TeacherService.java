package Quizz.com.example.Quizz.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Quizz.com.example.Quizz.Model.Classes;
import Quizz.com.example.Quizz.Model.StudentClassModel;
import Quizz.com.example.Quizz.Repository.Classs;
import Quizz.com.example.Quizz.Repository.studentClassRepository;

@Service
public class TeacherService {

	@Autowired
	private Classs classes;
	
	
	@Autowired 
	private studentClassRepository studentclassrepo;
	
	
	public void createClasses(Classes createClass) {
		  classes.save(createClass);
	}


	public void getdetails() {
		
		// TODO Auto-generated method stub
		
	}


	public List<Classes> getClassesByEmain(String email) {
		// TODO Auto-generated method stub
		return  classes.getallclasses(email);
		
	}


	public List<StudentClassModel> getclassStudents() {
		// TODO Auto-generated method stub
		return (List<StudentClassModel>) studentclassrepo.findAll() ;
	}


	public void addmyStudents(StudentClassModel addstudent) {
		// TODO Auto-generated method stub
		studentclassrepo.save(addstudent);
	}
	
	
}
