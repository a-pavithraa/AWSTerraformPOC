package com.stockservice.dto.watchlist.details;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Portfolio implements Serializable{
	private String userId;
    private String pfId;
    private int pfVersionId;
    private int sortOrder;
    private String pfName;
    private String baseCurrency;
    private String slug;
    private String cashCurrency;
    private boolean consolidateLots;
    private boolean defaultPf;
    private boolean following;
    private long originDate;
    private long creationDate;
    private long lastUpdated;
    private List<Position> positions;
   
    private boolean isMine;
}
