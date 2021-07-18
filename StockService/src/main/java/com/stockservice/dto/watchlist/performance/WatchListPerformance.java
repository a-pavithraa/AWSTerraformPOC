package com.stockservice.dto.watchlist.performance;

import java.io.Serializable;

import com.stockservice.dto.watchlist.Portfolio;

import lombok.Data;

@Data
public class WatchListPerformance implements Serializable{
	
	private Portfolio portfolio;
	private Symbols symbols;
	

}
