package com.stockservice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.stockservice.dto.Root;
import com.stockservice.dto.chart.ChartDetails;
import com.stockservice.dto.watchlist.WatchList;
import com.stockservice.dto.watchlist.details.Position;
import com.stockservice.dto.watchlist.details.QuoteDetails;
import com.stockservice.dto.watchlist.details.WatchListDetailResult;
import com.stockservice.dto.watchlist.details.WatchListDetails;
import com.stockservice.dto.watchlist.performance.WatchListPerformaceFinance;
import com.stockservice.webservice.RapidAPIRestClient;

@Service
public class Stockservice {
	
	@Autowired
	private RapidAPIRestClient stockService;
	
	 @Cacheable("stockServiceCache")
	public Root getTrendingTickers() {
		return stockService.getTrendingTickers();
		
	}
	 @Cacheable("watchListCache")
	 public WatchList getWatchList() {
		 return stockService.getPopularWatchList();
	 }
	 @Cacheable("watchListPerformance")
	 public WatchListPerformaceFinance getWatchListPerformance( String pfId,String symbol,String userId) {
		 return stockService.getWatchListPerformance(pfId, symbol, userId);
	 }
	 @Cacheable("watchListDetails")
	 public WatchListDetails getWatchListDetails( String pfId, String userId) {
		 WatchListDetails response = stockService.getWatchListDetails(pfId, userId);
		 WatchListDetailResult result = response.getFinance().getResult().get(0);
			Map<String,QuoteDetails> quoteMap = result.getQuotes();
			List<Position> positions =result.getPortfolios().get(0).getPositions();
			positions.stream().forEach(x->{
				if(quoteMap.containsKey(x.getSymbol())) {
					x.setQuoteDetails(quoteMap.get(x.getSymbol()));
				}
			});
			result.setQuotes(null);
			System.out.println(response);
			return response;
	 }
	 @Cacheable("chartDetails")	 
	 public ChartDetails getChartListForSymbol(String symbol, String interval, String range,String comparisons,String region) {
		 return stockService.getChartListForSymbol(symbol, interval, range,comparisons,region);
	 }

}
