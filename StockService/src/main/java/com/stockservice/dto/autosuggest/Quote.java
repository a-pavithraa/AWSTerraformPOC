package com.stockservice.dto.autosuggest;

import java.io.Serializable;

import lombok.Data;

@Data
public class Quote implements Serializable {
	   private String exchange;
	    private String shortname;
	    private String quoteType;
	    private String symbol;
	    private String index;
	    private double score;
	    private String typeDisp;
	    private String longname;
	    private boolean isYahooFinance;

}
