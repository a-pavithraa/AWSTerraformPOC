package com.stockservice.dto.watchlist.details;

import java.io.Serializable;
import java.util.List;

import lombok.Data;
@Data
public class Finance implements Serializable{
	 private List<WatchListDetailResult> result;
	    private Object error;

}
