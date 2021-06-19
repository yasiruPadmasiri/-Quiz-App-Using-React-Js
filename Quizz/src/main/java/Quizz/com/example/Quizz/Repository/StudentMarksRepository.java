package Quizz.com.example.Quizz.Repository;

import org.springframework.data.repository.CrudRepository;

import Quizz.com.example.Quizz.Model.StudentMarksModel;

public interface StudentMarksRepository extends CrudRepository<StudentMarksModel, Integer> {

}
