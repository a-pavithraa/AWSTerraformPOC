package com.stockservice.dto.marketmovers;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class CriteriaMeta implements Serializable{
	 private int size;
	    private int offset;
	    private String sortField;
	    private String sortType;
	    private String quoteType;
	    private String topOperator;
	    private List<Criterion> criteria;
		public int getSize() {
			return size;
		}
		public void setSize(int size) {
			this.size = size;
		}
		public int getOffset() {
			return offset;
		}
		public void setOffset(int offset) {
			this.offset = offset;
		}
		public String getSortField() {
			return sortField;
		}
		public void setSortField(String sortField) {
			this.sortField = sortField;
		}
		public String getSortType() {
			return sortType;
		}
		public void setSortType(String sortType) {
			this.sortType = sortType;
		}
		public String getQuoteType() {
			return quoteType;
		}
		public void setQuoteType(String quoteType) {
			this.quoteType = quoteType;
		}
		public String getTopOperator() {
			return topOperator;
		}
		public void setTopOperator(String topOperator) {
			this.topOperator = topOperator;
		}
		public List<Criterion> getCriteria() {
			return criteria;
		}
		public void setCriteria(List<Criterion> criteria) {
			this.criteria = criteria;
		}

}
