package com.example.laptopDemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.laptopDemo.model.UserDetails;
import com.example.laptopDemo.service.UserService;


@RestController
@CrossOrigin
public class UserController {
	


	    @Autowired
		UserService userServ;
	    
	    
	    @GetMapping("/checklogin")
	    public String login(@RequestParam String user,@RequestParam String password)
	    {
	    	return userServ.login(user, password);
	    }
	    
	    @PostMapping("/register")
	    public UserDetails register(@RequestBody UserDetails user) {
	    	return userServ.register(user);
	    }
	    
	    @GetMapping("/getall")
	    public List<UserDetails> getAll(){
	    	return userServ.getAll();
	    }
	    
	    @DeleteMapping("/delete")
	    public void delete(@RequestParam int id) {
	    	userServ.deleteCust(id);
	    }
	    @PutMapping("/updateByPassword")
		public String updateByPassword(@RequestParam String password,@RequestParam String username)
		{
			
			int result=userServ.updateByPassword1(password, username);
			if(result>0)
			{
				return "updated";
			}
			else
			{
				return "not updated";
			}
		}
	    @DeleteMapping("/deleteByUsername/{username}")
		 public String deleteUserByNAME(@PathVariable String username) {
			 int result=userServ.deleteUserByName(username);
			 if(result>0)
				 return "User record deleted";
			 else
				 return "Problem occured while deleting";
		 }
}


