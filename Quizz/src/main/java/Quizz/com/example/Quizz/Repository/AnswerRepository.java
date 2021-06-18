package Quizz.com.example.Quizz.Repository;

import org.springframework.data.repository.CrudRepository;

import Quizz.com.example.Quizz.Model.AnswersModel;

public interface AnswerRepository extends CrudRepository<AnswersModel, Integer> {

}
