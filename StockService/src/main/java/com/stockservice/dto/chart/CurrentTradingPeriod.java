package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class CurrentTradingPeriod implements Serializable{
    private Pre pre;
    private Regular regular;
    private Post post;
}

