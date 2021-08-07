package com.stockservice.dto.marketmovers;

import java.io.Serializable;

import lombok.Data;

@Data
public class Quote implements Serializable {
	
	 private String language;
     private String region;
     private String quoteType;
     private String quoteSourceName;
     private boolean triggerable;
     private Object firstTradeDateMilliseconds;
     private int priceHint;
     private String exchange;
     private String market;
     private String fullExchangeName;
     private String marketState;
     private int sourceInterval;
     private int exchangeDataDelayedBy;
     private String exchangeTimezoneName;
     private String exchangeTimezoneShortName;
     private int gmtOffSetMilliseconds;
     private boolean esgPopulated;
     private boolean tradeable;
     private String symbol;
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getQuoteType() {
		return quoteType;
	}
	public void setQuoteType(String quoteType) {
		this.quoteType = quoteType;
	}
	public String getQuoteSourceName() {
		return quoteSourceName;
	}
	public void setQuoteSourceName(String quoteSourceName) {
		this.quoteSourceName = quoteSourceName;
	}
	public boolean isTriggerable() {
		return triggerable;
	}
	public void setTriggerable(boolean triggerable) {
		this.triggerable = triggerable;
	}
	public Object getFirstTradeDateMilliseconds() {
		return firstTradeDateMilliseconds;
	}
	public void setFirstTradeDateMilliseconds(Object firstTradeDateMilliseconds) {
		this.firstTradeDateMilliseconds = firstTradeDateMilliseconds;
	}
	public int getPriceHint() {
		return priceHint;
	}
	public void setPriceHint(int priceHint) {
		this.priceHint = priceHint;
	}
	public String getExchange() {
		return exchange;
	}
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
	public String getMarket() {
		return market;
	}
	public void setMarket(String market) {
		this.market = market;
	}
	public String getFullExchangeName() {
		return fullExchangeName;
	}
	public void setFullExchangeName(String fullExchangeName) {
		this.fullExchangeName = fullExchangeName;
	}
	public String getMarketState() {
		return marketState;
	}
	public void setMarketState(String marketState) {
		this.marketState = marketState;
	}
	public int getSourceInterval() {
		return sourceInterval;
	}
	public void setSourceInterval(int sourceInterval) {
		this.sourceInterval = sourceInterval;
	}
	public int getExchangeDataDelayedBy() {
		return exchangeDataDelayedBy;
	}
	public void setExchangeDataDelayedBy(int exchangeDataDelayedBy) {
		this.exchangeDataDelayedBy = exchangeDataDelayedBy;
	}
	public String getExchangeTimezoneName() {
		return exchangeTimezoneName;
	}
	public void setExchangeTimezoneName(String exchangeTimezoneName) {
		this.exchangeTimezoneName = exchangeTimezoneName;
	}
	public String getExchangeTimezoneShortName() {
		return exchangeTimezoneShortName;
	}
	public void setExchangeTimezoneShortName(String exchangeTimezoneShortName) {
		this.exchangeTimezoneShortName = exchangeTimezoneShortName;
	}
	public int getGmtOffSetMilliseconds() {
		return gmtOffSetMilliseconds;
	}
	public void setGmtOffSetMilliseconds(int gmtOffSetMilliseconds) {
		this.gmtOffSetMilliseconds = gmtOffSetMilliseconds;
	}
	public boolean isEsgPopulated() {
		return esgPopulated;
	}
	public void setEsgPopulated(boolean esgPopulated) {
		this.esgPopulated = esgPopulated;
	}
	public boolean isTradeable() {
		return tradeable;
	}
	public void setTradeable(boolean tradeable) {
		this.tradeable = tradeable;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

}
