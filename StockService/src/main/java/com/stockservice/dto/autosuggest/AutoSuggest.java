package com.stockservice.dto.autosuggest;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class AutoSuggest implements Serializable {
	private List<Object> explains;
    private int count;
    private List<Quote> quotes;
    private List<News> news;
    private List<Object> nav;
    private List<Object> lists;
    private List<Object> researchReports;
    private int totalTime;
    private int timeTakenForQuotes;
    private int timeTakenForNews;
    private int timeTakenForAlgowatchlist;
    private int timeTakenForPredefinedScreener;
    private int timeTakenForCrunchbase;
    private int timeTakenForNav;
    private int timeTakenForResearchReports; 

}
