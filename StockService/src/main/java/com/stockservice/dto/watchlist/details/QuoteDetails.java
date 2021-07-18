package com.stockservice.dto.watchlist.details;

import java.io.Serializable;

import lombok.Data;

@Data
public class QuoteDetails implements Serializable {
	
	 private String language;
	    private String region;
	    private String quoteType;
	    private boolean triggerable;
	    private String quoteSourceName;
	    private String currency;
	    private String shortName;
	    private String fullExchangeName;
	    private String longName;
	    private String financialCurrency;
	    private long averageDailyVolume3Month;
	    private long averageDailyVolume10Day;
	    private double fiftyTwoWeekLowChange;
	    private double fiftyTwoWeekLowChangePercent;
	    private String fiftyTwoWeekRange;
	    private double fiftyTwoWeekHighChange;
	    private double fiftyTwoWeekHighChangePercent;
	    private double fiftyTwoWeekLow;
	    private double fiftyTwoWeekHigh;
	    private long dividendDate;
	    private long earningsTimestamp;
	    private long earningsTimestampStart;
	    private long earningsTimestampEnd;
	    private double trailingAnnualDividendRate;
	    private double trailingPE;
	    private double trailingAnnualDividendYield;
	    private double epsTrailingTwelveMonths;
	    private double epsForward;
	    private double epsCurrentYear;
	    private double priceEpsCurrentYear;
	    private long sharesOutstanding;
	    private double bookValue;
	    private double fiftyDayAverage;
	    private double fiftyDayAverageChange;
	    private double fiftyDayAverageChangePercent;
	    private double twoHundredDayAverage;
	    private double twoHundredDayAverageChange;
	    private double twoHundredDayAverageChangePercent;
	    private long marketCap;
	    private String market;
	    private double regularMarketPrice;
	    private long regularMarketTime;
	    private double regularMarketChange;
	    private double regularMarketOpen;
	    private double regularMarketDayHigh;
	    private double regularMarketDayLow;
	    private long regularMarketVolume;
	    private long priceHlong;
	    private double regularMarketChangePercent;
	    private String regularMarketDayRange;
	    private double regularMarketPreviousClose;
	    private double bid;
	    private double ask;
	    private long bidSize;
	    private long askSize;
	    private String messageBoardId;
	    private String marketState;
	    private String exchange;
	    private double forwardPE;
	    private double priceToBook;
	    private long sourcelongerval;
	    private String exchangeTimezoneName;
	    private String exchangeTimezoneShortName;
	    private long gmtOffSetMilliseconds;
	    private boolean esgPopulated;
	    private boolean tradeable;
	    private long exchangeDataDelayedBy;
	    private String symbol;

}
