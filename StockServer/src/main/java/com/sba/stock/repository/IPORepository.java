package com.sba.stock.repository;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.IPO;


public interface IPORepository extends CrudRepository<IPO, Long> {

	
}
