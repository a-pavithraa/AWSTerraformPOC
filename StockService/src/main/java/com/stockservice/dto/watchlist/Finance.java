package com.stockservice.dto.watchlist;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Finance implements Serializable {
	
	   private List<WatchListResult> result;
	   private Object error;
}
