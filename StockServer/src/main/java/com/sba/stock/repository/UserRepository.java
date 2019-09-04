package com.sba.stock.repository;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
