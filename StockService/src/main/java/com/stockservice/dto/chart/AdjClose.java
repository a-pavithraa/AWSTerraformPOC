package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class AdjClose implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Double> adjclose;
}
