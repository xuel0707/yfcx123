package com.mycompany.myapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
        configurer
            .ignoreAcceptHeader(false)
            .defaultContentType(MediaType.TEXT_HTML)
            .mediaType("css", MediaType.valueOf("text/css"))
            .mediaType("js", MediaType.valueOf("application/javascript"));
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            .addResourceHandler("/static/css/**")
            .addResourceLocations("file:src/main/webapp/static/css/", "classpath:/static/css/")
            .setCachePeriod(3600)
            .resourceChain(true);

        registry
            .addResourceHandler("/static/js/**")
            .addResourceLocations("file:src/main/webapp/static/js/")
            .setCachePeriod(3600)
            .resourceChain(true);
    }
}
