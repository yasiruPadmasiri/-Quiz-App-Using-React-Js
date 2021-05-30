package Quizz.com.example.Quizz.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Quizz.com.example.Quizz.Model.Teacher;
import Quizz.com.example.Quizz.Model.User;
import Quizz.com.example.Quizz.Repository.Teachers;
import Quizz.com.example.Quizz.Repository.userRepository;

@Service
public class homeService {
	
	@Autowired
	private  userRepository userrepo;
	
	
	@Autowired
	private Teachers teacherrepo;
	
	
	
	public List<User> findUsers() {
		 return  (List<User>) userrepo.findAll();
	}
	
	
	public void  saveUser(User user) {
		userrepo.save(user);
	}
	
	public void saveTeacher(Teacher teacher) {
		System.out.println(teacher.getRole());
		teacherrepo.save(teacher);
		System.out.println(teacher.getRole());
	}
	
	
	
	

}
