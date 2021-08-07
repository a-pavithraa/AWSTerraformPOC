package com.stockservice.dto.news;

import java.io.Serializable;

import lombok.Data;

@Data
public class News implements Serializable{
	
	 private DataBean data;
	    private String status;

}
