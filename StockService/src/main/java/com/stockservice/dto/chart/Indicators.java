package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Indicators implements Serializable{
    private List<Quote> quote;
    private List<AdjClose> adjclose;
}
