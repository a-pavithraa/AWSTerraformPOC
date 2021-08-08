package com.stockservice.dto.news;

import java.io.Serializable;

import lombok.Data;

@Data
public class Stream implements Serializable{
	private String id;
	private Content content;

}
