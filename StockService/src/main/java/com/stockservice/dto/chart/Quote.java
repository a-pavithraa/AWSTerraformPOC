package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Quote implements Serializable{
	
    private List<Double> high;
    private List<Double> close;
    private List<Double> low;
    private List<Double> open;
    private List<Long> volume;
}
