package com.stockservice.dto.news;

import java.io.Serializable;

import lombok.Data;

@Data
public class DataBean implements Serializable{
	private Ntk ntk;
	private Main main;

}
