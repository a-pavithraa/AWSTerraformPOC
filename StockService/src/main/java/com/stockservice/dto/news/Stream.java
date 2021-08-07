package com.stockservice.dto.news;

import java.io.Serializable;

import lombok.Data;

@Data
public class Stream implements Serializable{
	public String id;
    public Content content;

}
