package Quizz.com.example.Quizz.Repository;

import java.util.*;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;

import Quizz.com.example.Quizz.Model.LessonsModel;

public interface LessonRepository extends CrudRepository<LessonsModel, Integer> {

	@Query("SELECT lsn FROM LessonsModel lsn where lsn.classid=?1 ")
	public List<LessonsModel>findlessonByclassId(Integer classid);
} 
