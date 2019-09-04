package com.sba.stock.service;

import java.util.List;
import java.util.Optional;

import com.sba.stock.entity.Admin;
import com.sba.stock.entity.Company;
import com.sba.stock.entity.IPO;
import com.sba.stock.entity.Stock;
import com.sba.stock.entity.User;



public interface AdminService {
	
	public List<Admin> getAdmin();
	
	public List<Company> getCompany();	
	public Company createCompany(Company company);
	public Company updateCompany(Company company);
	
	public IPO createIPO(IPO ipo);
	public IPO updateIPO(IPO ipo);
	
	public List<Stock> getStocks();	
	public Stock createStock(Stock stock);
	public Stock updateStock(Stock stock);

}
