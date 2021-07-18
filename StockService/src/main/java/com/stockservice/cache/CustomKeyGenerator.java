package com.stockservice.cache;

import java.lang.reflect.Method;

import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.cache.interceptor.SimpleKey;

public class CustomKeyGenerator  implements KeyGenerator {

	
	public Object generate(Object target, Method method, Object... params) {
		
		StringBuilder paramsKey = new StringBuilder();
		if(params!=null && params.length>0) {
		for(Object param:params) {
			if(param!=null)
			paramsKey.append(param.toString());
		}
			
		}
		return new SimpleKey(method.getName(), paramsKey.toString());
	}

}
