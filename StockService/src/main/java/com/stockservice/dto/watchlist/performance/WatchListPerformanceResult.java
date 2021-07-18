package com.stockservice.dto.watchlist.performance;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class WatchListPerformanceResult implements Serializable{
	 private List<WatchListPerformance> result;
}
