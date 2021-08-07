package com.stockservice;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stockservice.dto.Root;
import com.stockservice.dto.chart.ChartDetails;
import com.stockservice.dto.marketmovers.MarketMovers;
import com.stockservice.dto.news.News;
import com.stockservice.dto.spark.SparkBean;
import com.stockservice.dto.watchlist.WatchList;
import com.stockservice.dto.watchlist.details.Position;
import com.stockservice.dto.watchlist.details.QuoteDetails;
import com.stockservice.dto.watchlist.details.WatchListDetailResult;
import com.stockservice.dto.watchlist.details.WatchListDetails;
import com.stockservice.dto.watchlist.performance.WatchListPerformaceFinance;
import com.stockservice.service.Stockservice;
import com.stockservice.webservice.RapidAPIRestClient;

@RestController
public class StockServiceController {
	
	@Autowired
	Stockservice stockService;
	
	@GetMapping(path="/health")
	public String getHealthCheck() {
		return "Success";
	}

	@GetMapping(path = "/api/ticks")
	public Root getTicks(Authentication authentication) {

		Root response = stockService.getTrendingTickers();
		System.out.println(authentication.getName());

		return response;
	}

	@GetMapping(path = "/api/watchList")
	public WatchList getWatchList() {

		WatchList response = stockService.getWatchList();
		
		return response;
	}
	
	@GetMapping(path = "/api/watchListPerformance")
	public WatchListPerformaceFinance getWatchListPerformance(@RequestParam String pfId,@RequestParam String userId) {

		WatchListPerformaceFinance response = stockService.getWatchListPerformance(pfId, "^GSPC", userId);
		System.out.println(response);
		
		return response;
	}
	
	@GetMapping(path = "/api/watchListDetails")
	public WatchListDetails getWatchListDetails(@RequestParam String pfId,@RequestParam String userId) {

		WatchListDetails response = stockService.getWatchListDetails(pfId, userId);
		
		
		return response;
	}
	@GetMapping(path = "/api/marketMovers")
	public MarketMovers getMarketMovers(@RequestParam String region,@RequestParam int count,@RequestParam int start) {
		
try {
	System.out.println("Market movers called");
	MarketMovers response = stockService.getMarketMovers(region, count,start);
	
	
	return response;
}
catch(Exception e) {
	e.printStackTrace();
}
return null;
}
	
	
	@GetMapping(path = "/api/chartDetails")
	public ChartDetails getChartDetails(@RequestParam String symbol) {

		ChartDetails response = stockService.getChartListForSymbol(symbol, "1mo", "1y","^GDAXI,^FCHI","US");
		
		return response;
	}
	
	@GetMapping(path = "/api/sparkDetails")
	public SparkBean getSparkDetails() {

	return stockService.getSparkDetails("AMZN,AAPL,WDC,REYN,AZN,YM=F", "15m", "1d");
		
		
	}
	
	@GetMapping(path = "/api/news")
	public News getNews() {

	return stockService.getNews("US");
		
		
	}

}
