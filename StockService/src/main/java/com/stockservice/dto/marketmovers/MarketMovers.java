package com.stockservice.dto.marketmovers;

import java.io.Serializable;

import lombok.Data;

@Data
public class MarketMovers implements Serializable {
	private Finance finance;

	public Finance getFinance() {
		return finance;
	}

	public void setFinance(Finance finance) {
		this.finance = finance;
	} 

}
