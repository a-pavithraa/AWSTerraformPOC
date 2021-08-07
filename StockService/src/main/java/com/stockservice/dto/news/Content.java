package com.stockservice.dto.news;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class Content implements Serializable{
	
	 private String id;
	 private String contentType;
	 private String title;
	 private Date pubDate;
	 private Thumbnail thumbnail;
	 private ClickThroughUrl clickThroughUrl;
	 private Provider provider;
	 private Finance finance;

}
