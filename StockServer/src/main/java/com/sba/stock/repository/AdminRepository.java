package com.sba.stock.repository;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.Admin;
import com.sba.stock.entity.Company;


public interface AdminRepository extends CrudRepository<Admin, Long> {

}
