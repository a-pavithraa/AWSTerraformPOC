package com.stockservice.webservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.stockservice.dto.Root;
import com.stockservice.dto.autosuggest.AutoSuggest;
import com.stockservice.dto.chart.ChartDetails;
import com.stockservice.dto.marketmovers.MarketMovers;
import com.stockservice.dto.news.News;
import com.stockservice.dto.spark.SparkBean;
import com.stockservice.dto.watchlist.WatchList;
import com.stockservice.dto.watchlist.details.WatchListDetails;
import com.stockservice.dto.watchlist.performance.WatchListPerformaceFinance;

@FeignClient(name = "airFranceCargoTrackAwb", url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/", configuration = StockServiceFeignConfig.class)
public interface RapidAPIRestClient {
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-trending-tickers", consumes = "application/json")
	Root getTrendingTickers();

	@RequestMapping(method = RequestMethod.GET, value = "/market/get-popular-watchlists", consumes = "application/json")
	WatchList getPopularWatchList();
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-watchlist-performance", consumes = "application/json")
	WatchListPerformaceFinance getWatchListPerformance(@RequestParam(value="pfId")String pfId, @RequestParam(value="symbols")String symbols, @RequestParam(value="userId")String userId );
	
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-watchlist-detail", consumes = "application/json")
	WatchListDetails getWatchListDetails(@RequestParam(value="pfId")String pfId,  @RequestParam(value="userId")String userId );
	
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-charts", consumes = "application/json")	
	ChartDetails getChartListForSymbol(@RequestParam(value="symbol")String symbols,@RequestParam(value="interval")String interval,@RequestParam(value="range")String range,@RequestParam(value="comparisons")String comparisons,@RequestParam(value="region")String region);
	
	
	@RequestMapping(method = RequestMethod.GET, value = "/auto-complete", consumes = "application/json")	
	AutoSuggest autoComplete(@RequestParam(value="q")String q,@RequestParam(value="region")String region);
	
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-movers", consumes = "application/json")	
	MarketMovers getMarketMovers(@RequestParam(value="region")String region,@RequestParam(value="count")int count,@RequestParam(value="start")int start);
	
	@RequestMapping(method = RequestMethod.GET, value = "/market/get-spark", consumes = "application/json")	
	SparkBean getSpark(@RequestParam(value="symbols")String symbols,@RequestParam(value="interval")String interval,@RequestParam(value="range")String range);
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/news/v2/list", consumes = "text/plain")	
	News getNews(@RequestParam(value="region")String region);
	
}
