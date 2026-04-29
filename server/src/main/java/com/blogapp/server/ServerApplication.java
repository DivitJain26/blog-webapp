package com.blogapp.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class ServerApplication {
    @Autowired
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

}
