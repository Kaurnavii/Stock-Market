package com.sba.stock.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.sba.stock.entity.StockPrice;



public interface StockPriceRepository extends CrudRepository<StockPrice, Long>{

	public List<StockPrice> getByCompanyId(long companyId);
}
