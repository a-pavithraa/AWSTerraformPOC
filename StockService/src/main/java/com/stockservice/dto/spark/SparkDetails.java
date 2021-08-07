package com.stockservice.dto.spark;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class SparkDetails implements Serializable {

	private List<Double> close;
	private List<Long> timestamp;
	private String symbol;
	private double previousClose;
	private double chartPreviousClose;
	private Long end;
	private Long start;
	private Long dataGranularity;

}
