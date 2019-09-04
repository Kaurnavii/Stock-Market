package com.sba.stock.repository;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.Stock;


public interface StockRepository extends CrudRepository<Stock, Long> {

	
}
