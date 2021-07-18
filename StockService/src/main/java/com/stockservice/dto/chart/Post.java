package com.stockservice.dto.chart;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Post implements Serializable{
    private String timezone;
    private long start;
    private long end;
    private long gmtoffset;
}
