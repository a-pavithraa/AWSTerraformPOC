package com.stockservice.dto.watchlist.details;

import java.io.Serializable;

import lombok.Data;

@Data
public class Lot implements Serializable {
	 private String lotId;
	    private int sortOrder;
	    private String tradeDate;
	    private double purchasePrice;
	    private double quantity;

}
