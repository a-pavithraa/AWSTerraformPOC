package com.stockservice.webservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.stockservice.dto.Root;
import com.stockservice.dto.chart.ChartDetails;
import com.stockservice.dto.watchlist.WatchList;
import com.stockservice.dto.watchlist.details.WatchListDetails;
import com.stockservice.dto.watchlist.performance.WatchListPerformaceFinance;

@FeignClient(name = "airFranceCargoTrackAwb", url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/", configuration = StockServiceFeignConfig.class)
public interface RapidAPIRestClient {
	@RequestMapping(method = RequestMethod.GET, value = "/get-trending-tickers", consumes = "application/json")
	Root getTrendingTickers();

	@RequestMapping(method = RequestMethod.GET, value = "/get-popular-watchlists", consumes = "application/json")
	WatchList getPopularWatchList();
	@RequestMapping(method = RequestMethod.GET, value = "/get-watchlist-performance", consumes = "application/json")
	WatchListPerformaceFinance getWatchListPerformance(@RequestParam(value="pfId")String pfId, @RequestParam(value="symbols")String symbols, @RequestParam(value="userId")String userId );
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-watchlist-detail", consumes = "application/json")
	WatchListDetails getWatchListDetails(@RequestParam(value="pfId")String pfId,  @RequestParam(value="userId")String userId );
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-charts", consumes = "application/json")	
	ChartDetails getChartListForSymbol(@RequestParam(value="symbol")String symbols,@RequestParam(value="interval")String interval,@RequestParam(value="range")String range,@RequestParam(value="comparisons")String comparisons,@RequestParam(value="region")String region);
}
