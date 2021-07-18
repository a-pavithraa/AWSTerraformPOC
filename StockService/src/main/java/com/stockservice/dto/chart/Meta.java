package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Meta implements Serializable{
    private String currency;
    private String symbol;
    private String exchangeName;
    private String instrumentType;
    private long firstTradeDate;
    private long regularMarketTime;
    private long gmtoffset;
    private String timezone;
    private String exchangeTimezoneName;
    private double regularMarketPrice;
    private double chartPreviousClose;
    private long priceHint;
    private CurrentTradingPeriod currentTradingPeriod;
    private String dataGranularity;
    private String range;
    private List<String> validRanges;
}
