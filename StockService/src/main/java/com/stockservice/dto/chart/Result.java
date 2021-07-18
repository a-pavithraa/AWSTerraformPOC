package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Result implements Serializable{
    private Meta meta;
    private List<Integer> timestamp;
    private List<Comparison> comparisons;
    private Indicators indicators;
}
