package com.stockservice.dto.autosuggest;

import java.io.Serializable;

import lombok.Data;

@Data
public class News  implements Serializable{
	
	 private String uuid;
	    private String title;
	    private String publisher;
	    private String link;
	    private int providerPublishTime;
	    private String type;

}
