package Quizz.com.example.Quizz.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Quizz.com.example.Quizz.Model.User;
import Quizz.com.example.Quizz.Service.homeService;

@RestController
@CrossOrigin(allowedHeaders = "*" ,origins = "*")
public class homeController {
	
	@Autowired
	private homeService homeservice;
	
	@GetMapping("/login")
	public List<User> getUsers() {
		System.out.println(homeservice.findUsers());
		 return homeservice.findUsers();
	}
	
	@PostMapping("/signIn")
	public void createAccount(@RequestBody User user) {
		
		homeservice.saveUser(user);
		
	}
	


}
