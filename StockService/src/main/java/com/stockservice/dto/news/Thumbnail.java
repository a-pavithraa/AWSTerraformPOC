package com.stockservice.dto.news;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Thumbnail implements Serializable{
	
	private List<Resolution> resolutions;

}
