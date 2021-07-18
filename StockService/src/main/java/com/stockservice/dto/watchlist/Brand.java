package com.stockservice.dto.watchlist;

import java.io.Serializable;

import lombok.Data;

@Data
public class Brand implements Serializable {
	 private String name;
	 private String displayName;
	 private String url;
	 private String slug;
	 private String logoUrl;

}
