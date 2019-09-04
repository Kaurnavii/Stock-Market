package com.sba.stock.service;

import java.util.List;
import java.util.Optional;

import com.sba.stock.entity.Company;
import com.sba.stock.entity.IPO;
import com.sba.stock.entity.User;

public interface UserService {

	public List<User> getUsers();
	public User createUser(User user);
	public User updateUser(User user);
	 public Optional<User> getUserById(Long userId); 
	 
	 public List<IPO> getIPOs();
}
