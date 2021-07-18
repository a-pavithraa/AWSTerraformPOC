package com.stockservice.dto.watchlist;

import java.io.Serializable;

import lombok.Data;

@Data
public class SortOption implements Serializable{
	
	 private String sortField;
	 private Object sortOrder;
	 private String sortTitle;

}
