package com.stockservice.dto.watchlist;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class BackgroundImage implements Serializable{
	@JsonProperty("ios:sizesmall") 
    private IosSize iosSizesmall;
    @JsonProperty("ios:sizecard_small_fixed") 
    private IosSize iosSizecardSmallFixed;
    @JsonProperty("ios:sizeextra_large") 
    private IosSize iosSizeextraLarge;
    @JsonProperty("ios:sizeipad_portrait_retina") 
    private IosSize iosSizeipadPortraitRetina;
    @JsonProperty("ios:sizeipad_portrait") 
    private IosSize iosSizeipadPortrait;
    @JsonProperty("ios:sizesquare_large") 
    private IosSize iosSizesquareLarge;
    @JsonProperty("ios:sizemedium") 
    private IosSize iosSizemedium;
    @JsonProperty("ios:sizelarge_new_fixed") 
    private IosSize iosSizelargeNewFixed;
    @JsonProperty("ios:sizecard_large_fixed") 
    private IosSize iosSizecardLargeFixed;

}
