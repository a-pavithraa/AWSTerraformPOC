package com.stockservice.dto;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Result implements Serializable{
	 public int count;
	 public List<Quote> quotes;
	 public long jobTimestamp;
	 public long startInterval;
	}