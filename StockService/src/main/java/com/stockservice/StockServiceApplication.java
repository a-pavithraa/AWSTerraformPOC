package com.stockservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.openfeign.EnableFeignClients;

import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.jwk.source.RemoteJWKSet;
import com.nimbusds.jose.proc.JWSKeySelector;
import com.nimbusds.jose.proc.JWSVerificationKeySelector;
import com.nimbusds.jose.util.DefaultResourceRetriever;
import com.nimbusds.jose.util.ResourceRetriever;
import com.nimbusds.jwt.proc.ConfigurableJWTProcessor;
import com.nimbusds.jwt.proc.DefaultJWTProcessor;
import com.stockservice.security.JwtConfiguration;
import com.stockservice.webservice.RapidAPIRestClient;

import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import static com.nimbusds.jose.JWSAlgorithm.RS256;
@SpringBootApplication
@ComponentScan(basePackages = {"com.stockservice.security","com.stockservice"})
@EnableCaching
@EnableFeignClients(
	    basePackageClasses = {	
	    		RapidAPIRestClient.class
	    		
	    })
public class StockServiceApplication {
	@Autowired
	private JwtConfiguration jwtConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(StockServiceApplication.class, args);
	}
	@Bean
	public ConfigurableJWTProcessor configurableJWTProcessor() throws MalformedURLException {
		ResourceRetriever resourceRetriever =
				new DefaultResourceRetriever(jwtConfiguration.getConnectionTimeout(),
						jwtConfiguration.getReadTimeout());
		URL jwkSetURL= new URL(jwtConfiguration.getJwkUrl());
		JWKSource keySource= new RemoteJWKSet(jwkSetURL, resourceRetriever);
		ConfigurableJWTProcessor jwtProcessor= new DefaultJWTProcessor();
		JWSKeySelector keySelector= new JWSVerificationKeySelector(RS256, keySource);
		jwtProcessor.setJWSKeySelector(keySelector);
		return jwtProcessor;
	}


}
