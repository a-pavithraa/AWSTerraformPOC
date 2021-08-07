package com.stockservice.dto.news;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Ntk implements Serializable{
	private List<Object> stream;
	private boolean nextPage;
	private Pagination pagination;

}
