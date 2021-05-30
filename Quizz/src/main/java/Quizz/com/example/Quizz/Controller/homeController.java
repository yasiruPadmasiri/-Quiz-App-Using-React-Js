package Quizz.com.example.Quizz.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Quizz.com.example.Quizz.Model.Classes;
import Quizz.com.example.Quizz.Model.Teacher;
import Quizz.com.example.Quizz.Model.User;
import Quizz.com.example.Quizz.Service.TeacherService;
import Quizz.com.example.Quizz.Service.homeService;

@RestController
@CrossOrigin(allowedHeaders = "*" ,origins = "*")
public class homeController {
	
	@Autowired
	private homeService homeservice;
	
	
	
	@GetMapping("/loginTeacher")
	public List<User> getUsers() {
		System.out.println(homeservice.findUsers());
		 return homeservice.findUsers();
	}
		
	@PostMapping("/StudentignIn")
	public void createAccount(@RequestBody User user) {
		String  checkRole=user.getRole();
		System.out.println(user.getRole());

			System.out.println(user.getRole());
			homeservice.saveUser(user);
	}
	
	@PostMapping("/teacherSignIn")
	public void createTeacherAccount(@RequestBody Teacher teacher) {
		String  checkRole=teacher.getRole();
		System.out.println(checkRole);
		
			System.out.println("adadad"+checkRole);
			homeservice.saveTeacher(teacher);
		
	}
	
	
	
	
	


}
