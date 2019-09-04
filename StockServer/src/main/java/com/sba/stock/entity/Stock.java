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
@Table(name = "stock") 
public class Stock {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "stock")
	@SequenceGenerator(name="stock", sequenceName = "stockseq")
	@Column(name = "id")
	private long id;
	@Column(name = "stockname")
	private String stockname;
	@Column(name = "ceo")
	private String ceo;	
	@Column(name = "description")
	private String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "ipodate")
	private Date ipodate;
	
	public Stock() {
		
	}
	
	public Stock(String stockname, String ceo, String description, Date ipodate) {
		super();
		this.stockname = stockname;
		this.ceo = ceo;
		this.description = description;
		this.ipodate = ipodate;
	}



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getStockname() {
		return stockname;
	}



	public void setStockname(String stockname) {
		this.stockname = stockname;
	}



	public String getCeo() {
		return ceo;
	}



	public void setCeo(String ceo) {
		this.ceo = ceo;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public Date getIpodate() {
		return ipodate;
	}



	public void setIpodate(Date ipodate) {
		this.ipodate = ipodate;
	}



	@Override
	public String toString() {
		return "Stock [id=" + id + ", stockname=" + stockname + ", ceo=" + ceo + ", description=" + description
				+ ", ipodate=" + ipodate + "]";
	}
	
	

}
