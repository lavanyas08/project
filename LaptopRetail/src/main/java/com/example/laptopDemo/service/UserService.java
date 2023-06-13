package com.example.laptopDemo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.laptopDemo.dao.LaptopRepository;
import com.example.laptopDemo.dao.UserRepository;
import com.example.laptopDemo.model.UserDetails;

import jakarta.transaction.Transactional;

@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	LaptopRepository repo;

	public String login(String user,String pass) {
		List<UserDetails> li = userRepo.findAll();
		String res = null;
		for(UserDetails l : li) {
			if(l.getUsername().equals(user)&&l.getPassword().equals(pass)) {
				res = "Login sucessfull";
			}
		}
		if(res==null) {
			res= "Login failed";
		}
		return res;
	}
	
	public UserDetails register(UserDetails user) {
		return userRepo.save(user);
	}
	
	public List<UserDetails> getAll(){
		return userRepo.findAll();
	}
	public void deleteCust(int id) {
		userRepo.deleteById(id);
	}
	@Transactional
	public int updateByPassword1(String password, String username) {
		// TODO Auto-generated method stub
		return userRepo.updateByPassword(password, username);
	}
	@Transactional
	public int deleteUserByName(String username) {
		//return lapRepository.deleteLaptopByBrand(brand);
		return userRepo.deleteUserByName(username);
	}
}
