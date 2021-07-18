package com.stockservice;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurer;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.cache.interceptor.CacheResolver;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.cache.interceptor.SimpleCacheErrorHandler;
import org.springframework.cache.interceptor.SimpleKeyGenerator;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.stockservice.cache.Memcached;

@Configuration
public class MemcachedConfiguration implements CachingConfigurer {

    @Value("${memcached.addresses}")
    private String memcachedAddresses;

    @Value("${memcached.expiration.sec}")
    private int expirationSec;

    @Override
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        try {
            cacheManager.setCaches(internalCaches());
            return cacheManager;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private Collection<Memcached> internalCaches() throws IOException {
        final Collection<Memcached> caches = new ArrayList<>();
        caches.add(new Memcached("stockServiceCache", memcachedAddresses, expirationSec));
        return caches;
    }

    @Override
    public KeyGenerator keyGenerator() {
        return new SimpleKeyGenerator();
    }

    @Override
    public CacheErrorHandler errorHandler() {
        return new SimpleCacheErrorHandler();
    }

    @Override
    public CacheResolver cacheResolver() {
        return null;
    }
}