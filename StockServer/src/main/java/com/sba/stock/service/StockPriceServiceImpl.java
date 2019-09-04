package com.sba.stock.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sba.stock.entity.StockPrice;
import com.sba.stock.repository.StockPriceRepository;


@Service
public class StockPriceServiceImpl implements StockPriceService {

	@Autowired
	StockPriceRepository stockPriceRepo;

	public List<StockPrice> getStockPrices() {
		return (List<StockPrice>) stockPriceRepo.findAll();
	}

	@Override
	public StockPrice createStockPrice(StockPrice stockPrice) {
		return stockPriceRepo.save(stockPrice);
	}

	@Override
	public Optional<StockPrice> getStockPriceById(Long id) {
		return stockPriceRepo.findById(id);
	}

	@Override
	public List<StockPrice> getStockPricesbyCompanyId(long id) {
		return stockPriceRepo.getByCompanyId(id);
	}

	@Override
	public void exportExcel(MultipartFile file) {
		try {

			List<StockPrice> stockList = new ArrayList<>();
			XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
			XSSFSheet worksheet = workbook.getSheetAt(0);

			for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
				StockPrice stock = new StockPrice();

				XSSFRow row = worksheet.getRow(i);
				System.out.println("Before");
				stock.setCompanyId((long) row.getCell(1).getNumericCellValue());
				System.out.println("middle");
				stock.setStockExchangeName((String) row.getCell(2).getStringCellValue());
				System.out.println("middle");
				stock.setCurrentPrice((long) row.getCell(3).getNumericCellValue());
				System.out.println("middle");
				stock.setDate((String) row.getCell(4).getStringCellValue());
				System.out.println("middle");
				stock.setTime((String) row.getCell(5).getStringCellValue());
				System.out.println("After");
				stockList.add(stock);

				stockPriceRepo.save(stock);
			}
			System.out.println(stockList);
			workbook.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	@Override
	public List<StockPrice> getStockPricesCompare1(long companyId, long stockExchangeId, String periodicity) {

		List<StockPrice> stocks = new ArrayList<>();
		List<String[]> dates = new ArrayList<>();
		List<String[]> times = new ArrayList<>();
		List<String> day = new ArrayList<>();
		List<String> month = new ArrayList<>();
		List<String> year = new ArrayList<>();
		List<String> hour = new ArrayList<>();

		stocks = stockPriceRepo.getByCompanyId(companyId);

		for (StockPrice stock : stocks) {
			dates.add(stock.getDate().split("/"));
			times.add(stock.getTime().split(":"));
		}

		for (String[] s : dates) {
			day.add(s[0]);
			month.add(s[1]);
			year.add(s[2]);
		}
		
		for (String[] s : times) {
			hour.add(s[0]);
		}
		System.out.println(day);
		System.out.println(month);
		System.out.println(year);
		System.out.println(hour);

//		for (String[] s : times) {
//			for (String s1 : s)
//				System.out.println(s1);
//		}

		return stocks;
	}

}
