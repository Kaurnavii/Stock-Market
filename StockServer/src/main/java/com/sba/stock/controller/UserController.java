package com.sba.stock.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sba.stock.entity.Company;
import com.sba.stock.entity.IPO;
import com.sba.stock.entity.User;
import com.sba.stock.service.UserService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping(path = "/users")
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@PostMapping(path = "/users/create")
	public User createUser(@RequestBody User user) {
		User _user = userService.createUser(user);
		return _user;
	}
	
	@PutMapping(path="/user/update")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

	@GetMapping(path = "/user/{userId}")
	public Optional<User> getUserById(@PathVariable Long userId) {
		return userService.getUserById(userId);
	}
	
	@GetMapping(path = "/ipo")
	public List<IPO> getIPOs() {
		return userService.getIPOs();
	}
	

}
