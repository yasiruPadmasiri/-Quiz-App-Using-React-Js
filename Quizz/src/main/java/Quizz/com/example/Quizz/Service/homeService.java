package Quizz.com.example.Quizz.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Quizz.com.example.Quizz.Model.User;
import Quizz.com.example.Quizz.Repository.userRepository;

@Service
public class homeService {
	
	@Autowired
	private  userRepository userrepo;
	
	public List<User> findUsers() {
		 return  (List<User>) userrepo.findAll();
	}

}
