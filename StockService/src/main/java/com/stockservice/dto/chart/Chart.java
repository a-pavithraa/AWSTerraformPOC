package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Chart implements Serializable{
    private List<Result> result;
    private Object error;
}
