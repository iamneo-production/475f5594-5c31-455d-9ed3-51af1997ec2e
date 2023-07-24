package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class advisoraccount {
	@Id
	private String mailid;
	private String name;
	private String areaofinterest;
	private String eq;
	private int years;
	private String location;
	private String language;
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

	public String getAreaofinterest() {
		return areaofinterest;
	}
	public void setAreaofinterest(String areaofinterest) {
		this.areaofinterest = areaofinterest;
	}
	public String getEq() {
		return eq;
	}
	public void setEq(String eq) {
		this.eq = eq;
	}
	

	public int getYears() {
		return years;
	}
	public void setYears(int years) {
		this.years = years;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public advisoraccount(String mailid, String name, String ph, String areaofinterest, String eq, int age,
			String gender, int years, String location, String language) {
		super();
		this.mailid = mailid;
		this.name = name;
		
		this.areaofinterest = areaofinterest;
		this.eq = eq;
	
		this.years = years;
		this.location = location;
		this.language = language;
	}
	public advisoraccount() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
