package com.stockservice.dto.news;

import java.io.Serializable;

import lombok.Data;

@Data
public class Resolution implements Serializable {
	private String url;
	private int width;
	private int height;
	private String tag;
}
