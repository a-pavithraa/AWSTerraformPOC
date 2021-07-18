package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Comparison implements Serializable{
    private String symbol;
    private List<Double> high;
    private List<Double> low;
    private double chartPreviousClose;
    private List<Double> close;
    private List<Double> open;
}