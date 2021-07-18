package com.stockservice.dto.watchlist.performance;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.stockservice.dto.watchlist.Portfolio;

import lombok.Data;

@Data
public class Symbols implements Serializable{
    @JsonProperty("^GSPC") 
    private Portfolio gSPC;
}