package com.stockservice.cache;

import java.io.IOException;
import java.util.concurrent.Callable;
import net.spy.memcached.AddrUtil;
import net.spy.memcached.ConnectionFactoryBuilder;
import net.spy.memcached.MemcachedClient;
import net.spy.memcached.transcoders.SerializingTranscoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.Cache;
import org.springframework.cache.support.SimpleValueWrapper;

public class Memcached implements Cache {

    private static final Logger LOGGER = LoggerFactory.getLogger(Memcached.class);

    private String name;

    private MemcachedClient cache;

    private int expiration;

    public Memcached(String name, String memcachedAddresses, int expiration) throws IOException {
        this.name = name;
        this.expiration = expiration;
        cache = new MemcachedClient(
            new ConnectionFactoryBuilder()
                .setTranscoder(new SerializingTranscoder())
                .setProtocol(ConnectionFactoryBuilder.Protocol.BINARY)
                .build(),
            AddrUtil.getAddresses(memcachedAddresses));
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public Object getNativeCache() {
        return cache;
    }

    @Override
    public ValueWrapper get(final Object key) {
        Object value = null;
        try {
            value = cache.get(key.toString());
        } catch (final Exception e) {
            LOGGER.warn(e.getMessage());
        }
        if (value == null) {
            LOGGER.debug("cache miss for key: " + key.toString());
            return null;
        }
        LOGGER.debug("cache hit for key: " + key.toString());
        return new SimpleValueWrapper(value);
    }


    @Override
    public void put(final Object key, final Object value) {
        if (value != null) {
            cache.set(key.toString(), expiration, value);
            LOGGER.debug("cache put for key: " + key.toString());
        }
    }


    @Override
    public void evict(final Object key) {
        this.cache.delete(key.toString());
        LOGGER.debug("cache delete for key: " + key.toString());
    }

    @Override
    public void clear() {
        cache.flush();
        LOGGER.debug("cache clear completed");
    }

    @Override
    public <T> T get(Object o, Class<T> aClass) {
        return null;
    }

    @Override
    public <T> T get(Object o, Callable<T> callable) {
        return null;
    }

    @Override
    public ValueWrapper putIfAbsent(Object o, Object o1) {
        return null;
    }
}