package com.sba.stock.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "ipo") 
public class IPO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ipo")
	@SequenceGenerator(name="ipo", sequenceName = "iposeq")
	@Column(name = "id")
	private long id;
	@Column(name = "companycode")
	private String companycode;
	@Column(name = "stockexchange")
	private String stockexchange;	
	@Column(name = "pricepershare")
	private String pricepershare;
	@Column(name = "totalshares")
	private String totalshares;
	@Temporal(TemporalType.DATE)
	@Column(name = "openingdate")
	private Date openingdate;
	@Column(name = "remarks")
	private String remarks;
	
	public IPO() {
		
	}
	
	public IPO(String companycode, String stockexchange, String pricepershare, String totalshares, Date openingdate,
			String remarks) {
		super();
		this.companycode = companycode;
		this.stockexchange = stockexchange;
		this.pricepershare = pricepershare;
		this.totalshares = totalshares;
		this.openingdate = openingdate;
		this.remarks = remarks;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCompanycode() {
		return companycode;
	}
	public void setCompanycode(String companycode) {
		this.companycode = companycode;
	}
	public String getStockexchange() {
		return stockexchange;
	}
	public void setStockexchange(String stockexchange) {
		this.stockexchange = stockexchange;
	}
	public String getPricepershare() {
		return pricepershare;
	}
	public void setPricepershare(String pricepershare) {
		this.pricepershare = pricepershare;
	}
	public String getTotalshares() {
		return totalshares;
	}
	public void setTotalshares(String totalshares) {
		this.totalshares = totalshares;
	}
	public Date getOpeningdate() {
		return openingdate;
	}
	public void setOpeningdate(Date openingdate) {
		this.openingdate = openingdate;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
	
	@Override
	public String toString() {
		return "IPO [id=" + id + ", companycode=" + companycode + ", stockexchange=" + stockexchange
				+ ", pricepershare=" + pricepershare + ", totalshares=" + totalshares + ", openingdate=" + openingdate
				+ ", remarks=" + remarks + "]";
	}

	
}
