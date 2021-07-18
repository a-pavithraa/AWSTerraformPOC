package com.stockservice.dto.watchlist;

import java.io.Serializable;
import java.util.List;

public class WatchListResult implements Serializable{
	 public String id;
	    public String name;
	    public int total;
	    public List<Portfolio> portfolios;
	    public SortOption selectedSortOption;
	    public List<SortOption> otherSortOptions;

}
