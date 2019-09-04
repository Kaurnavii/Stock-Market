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
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "company") 
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "company")
	@SequenceGenerator(name="company", sequenceName = "companyseq")
	@Column(name = "id")
	private long id;
	@Column(name = "companyname")
	private String companyname;
	@Column(name = "ceo")
	private String ceo;	
	@Column(name = "turnover")
	private String turnover;
	@Column(name = "description")
	private String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "ipodate")
	private Date ipodate;
	
	public Company() {
		
	}
	
	public Company(String companyname, String ceo, String turnover, String description, Date ipodate) {
		super();
		this.companyname = companyname;
		this.ceo = ceo;
		this.turnover = turnover;
		this.description = description;
		this.ipodate = ipodate;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getTurnover() {
		return turnover;
	}
	public void setTurnover(String turnover) {
		this.turnover = turnover;
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
		return "Company [id=" + id + ", companyname=" + companyname + ", ceo=" + ceo + ", turnover=" + turnover
				+ ", description=" + description + ", ipodate=" + ipodate + "]";
	}


	
}
