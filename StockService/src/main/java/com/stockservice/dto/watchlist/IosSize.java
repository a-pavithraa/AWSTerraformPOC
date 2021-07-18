package com.stockservice.dto.watchlist;

import java.io.Serializable;

import lombok.Data;

@Data
public class IosSize implements Serializable{
	 private String url;
	 private int width;
	 private int height;

}
