package com.stockservice.dto.watchlist;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Portfolio implements Serializable {
	private String userId;
    private String pfId;
    private String slug;
    private String name;
    private String description;
    private String shortDescription;
    private int symbolCount;
    private int followerCount;
    private Brand brand;
    private Object createdAt;
    private Object updatedAt;
    private double dailyPercentGain;
    private BackgroundImage backgroundImage;
    private boolean isFollowed;
  
    private double oneDayPercentChange;
    private double oneMonthPercentChange;
    private double oneYearPercentChange;
    private double lifetimePercentChange;
    private int originTimestamp;
 
   


}
