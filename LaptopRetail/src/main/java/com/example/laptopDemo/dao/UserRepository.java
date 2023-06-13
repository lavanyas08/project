package com.example.laptopDemo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.laptopDemo.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails,Integer>{
	
	@Modifying
	@Query("update UserDetails s set s.password=?1 where s.username=?2")
	public int updateByPassword(String password,String username);
	
	@Modifying
	@Query("delete from UserDetails s  where s.username=?1")
	public int deleteUserByName(String username);
}
