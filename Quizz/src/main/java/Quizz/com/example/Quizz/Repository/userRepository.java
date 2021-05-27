package Quizz.com.example.Quizz.Repository;

import org.springframework.data.repository.CrudRepository;

import Quizz.com.example.Quizz.Model.User;

public interface userRepository extends CrudRepository<User, Integer> {

}
