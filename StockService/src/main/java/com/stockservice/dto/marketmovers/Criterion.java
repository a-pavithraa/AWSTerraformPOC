package com.stockservice.dto.marketmovers;

import java.io.Serializable;
import java.util.List;

import lombok.Data;

@Data
public class Criterion implements Serializable {
	
	private String field;
    private List<String> operators;
    public String getField() {
		return field;
	}
	public void setField(String field) {
		this.field = field;
	}
	public List<String> getOperators() {
		return operators;
	}
	public void setOperators(List<String> operators) {
		this.operators = operators;
	}
	public List<Double> getValues() {
		return values;
	}
	public void setValues(List<Double> values) {
		this.values = values;
	}
	public List<Integer> getLabelsSelected() {
		return labelsSelected;
	}
	public void setLabelsSelected(List<Integer> labelsSelected) {
		this.labelsSelected = labelsSelected;
	}
	private List<Double> values;
    private List<Integer> labelsSelected;

}
