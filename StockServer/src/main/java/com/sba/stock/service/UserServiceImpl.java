package com.sba.stock.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba.stock.entity.IPO;
import com.sba.stock.entity.User;
import com.sba.stock.repository.IPORepository;
import com.sba.stock.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	IPORepository ipoRepository;

	@Override
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	 @Override 
	 public Optional<User> getUserById(Long userId) {
		 return(Optional<User>) userRepository.findById(userId); }

	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<IPO> getIPOs() {
		return (List<IPO>) ipoRepository.findAll();
	}
	 
}
