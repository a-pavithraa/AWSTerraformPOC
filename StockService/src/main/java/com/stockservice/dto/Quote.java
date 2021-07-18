package com.stockservice.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class Quote implements Serializable{
	 public String language;
	 public String region;
	 public String quoteType;
	 public boolean triggerable;
	 public String quoteSourceName;
	 public double regularMarketPrice;
	 public int regularMarketTime;
	 public double regularMarketChange;
	 public double regularMarketChangePercent;
	 public double regularMarketPreviousClose;
	 public String fullExchangeName;
	 public int sourceInterval;
	 public String exchangeTimezoneName;
	 public String exchangeTimezoneShortName;
	 public int gmtOffSetMilliseconds;
	 public boolean esgPopulated;
	 public boolean tradeable;
	 public String marketState;
	 public String exchange;
	 public int exchangeDataDelayedBy;
	 public String market;
	 public String shortName;
	 public String symbol;
	 public int priceHint;
	 public String longName;
	}
