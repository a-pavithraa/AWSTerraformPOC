package com.stockservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stockservice.dto.autosuggest.AutoSuggest;
import com.stockservice.service.Stockservice;

@RestController
public class AutoSuggestController {
	@Autowired
	Stockservice stockService;
	
	
	@GetMapping(path = "/api/autosuggest")
	public AutoSuggest getTicks(@RequestParam String q,@RequestParam String region) {

		

		return stockService.autoComplete(q, region);
	}
}
