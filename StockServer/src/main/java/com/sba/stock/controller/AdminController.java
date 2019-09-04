package com.sba.stock.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sba.stock.entity.Admin;
import com.sba.stock.entity.Company;
import com.sba.stock.entity.IPO;
import com.sba.stock.entity.Stock;
import com.sba.stock.entity.User;
import com.sba.stock.repository.CompanyRepository;
import com.sba.stock.service.AdminService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@Autowired
	CompanyRepository companyRepository;

	@GetMapping(path = "/admin")
	public List<Admin> getAdmin() {
		System.out.println(adminService.getAdmin().size()+"dhyfgjgikhljuhl");
		return adminService.getAdmin();
		
	}
	
	@GetMapping(path = "/company")
	public List<Company> getCompanies() {
		return adminService.getCompany();
	}

	@PostMapping(path = "/company/create")
	public Company createUser(@RequestBody Company company) {
		Company _company = adminService.createCompany(company);
		return _company;
	}

	
	  @PutMapping(path="/company/update")
	  public Company updateCompany(@RequestBody Company company)
	  {
		  return adminService.updateCompany(company); 
	}
	 

		@PostMapping(path = "/ipo/create")
		public IPO createIPO(@RequestBody IPO ipo) {
			IPO _ipo = adminService.createIPO(ipo);
			return _ipo;
		}
		 @PutMapping(path="/ipo/update")
		    public IPO updateIPO(@RequestBody IPO ipo){
		        return adminService.updateIPO(ipo);
		    }
		 
		 @GetMapping(path = "/stock")
			public List<Stock> getstocks() {
				return adminService.getStocks();
			}

			@PostMapping(path = "/stock/create")
			public Stock createStock(@RequestBody Stock stock) {
				Stock _stock = adminService.createStock(stock);
				return _stock;
			}
			 @PutMapping(path="/stock/update")
			    public Stock updateStock(@RequestBody Stock stock){
			        return adminService.updateStock(stock);
			    }
			 
	/*
	 * @PostMapping("/import") public void
	 * mapReapExcelDatatoDB(@RequestParam("file") MultipartFile reapExcelDataFile)
	 * throws IOException {
	 * 
	 * List<Test> tempStudentList = new ArrayList<Test>(); XSSFWorkbook workbook =
	 * new XSSFWorkbook(reapExcelDataFile.getInputStream()); XSSFSheet worksheet =
	 * workbook.getSheetAt(0);
	 * 
	 * for(int i=1;i<worksheet.getPhysicalNumberOfRows() ;i++) { Test tempStudent =
	 * new Test();
	 * 
	 * XSSFRow row = worksheet.getRow(i);
	 * 
	 * tempStudent.setId((int) row.getCell(0).getNumericCellValue());
	 * tempStudent.setContent(row.getCell(1).getStringCellValue());
	 * tempStudentList.add(tempStudent); } }
	 */

}
