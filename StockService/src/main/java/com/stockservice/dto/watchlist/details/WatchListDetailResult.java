package com.stockservice.dto.watchlist.details;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class WatchListDetailResult implements Serializable{
	 private String userId;
	 private String userIdType;
	 private List<Portfolio> portfolios;
	 private Map<String,QuoteDetails>  quotes;

}
