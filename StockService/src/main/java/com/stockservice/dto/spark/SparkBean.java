package com.stockservice.dto.spark;

import java.io.Serializable;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class SparkBean implements Serializable {
	
	
	 @JsonProperty("AAPL") 
	    public SparkDetails aAPL;
	    @JsonProperty("YMF") 
	    public SparkDetails yMF;
	    @JsonProperty("AZN") 
	    public SparkDetails aZN;
	    @JsonProperty("WDC") 
	    public SparkDetails wDC;
	    @JsonProperty("AMZN") 
	    public SparkDetails aMZN;
	    @JsonProperty("REYN") 
	    public SparkDetails rEYN;

}
