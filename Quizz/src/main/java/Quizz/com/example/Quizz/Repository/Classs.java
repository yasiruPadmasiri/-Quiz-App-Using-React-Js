package Quizz.com.example.Quizz.Repository;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import Quizz.com.example.Quizz.Model.Classes;

public interface Classs extends CrudRepository<Classes, Integer> {
	@Query("SELECT cls FROM Classes cls where cls.email=?1")
	public List<Classes> getallclasses(String email);

}
