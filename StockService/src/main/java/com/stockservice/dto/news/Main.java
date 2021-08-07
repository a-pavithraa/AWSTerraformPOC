package com.stockservice.dto.news;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Main implements Serializable {
	
	private List<Stream> stream;
	private boolean nextPage;
	private Pagination pagination;

}
