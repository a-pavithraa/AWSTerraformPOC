package com.stockservice.dto.watchlist.details;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Position implements Serializable{
	 private String posId;
	    private String symbol;
	    private int sortOrder;
	    private QuoteDetails quoteDetails;
	    private List<Lot> lots;
}
