package Quizz.com.example.Quizz.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Quizz.com.example.Quizz.Model.Classes;
import Quizz.com.example.Quizz.Model.Teacher;
import Quizz.com.example.Quizz.Service.TeacherService;

@RestController
@CrossOrigin(allowedHeaders = "*" ,origins = "*")
public class TeacherController {
	
	
	@Autowired
	private TeacherService  teacher;
	
	@PostMapping("/createClass")
	public void teacher(@RequestBody Classes createClass) {
		System.out.println("assdasdad");
		teacher.createClasses(createClass);
		
	}
	

}
