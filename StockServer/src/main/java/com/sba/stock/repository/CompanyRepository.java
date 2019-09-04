package com.sba.stock.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.Company;


public interface CompanyRepository extends CrudRepository<Company, Long> {


	
}
