package com.mycompany.myapp.config;

import java.nio.file.Path;
import java.nio.file.Paths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurer implements WebMvcConfigurer {

    private final Logger log = LoggerFactory.getLogger(WebConfigurer.class);

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
        // 获取项目根目录
        Path rootDir = Paths.get("").toAbsolutePath();
        String webappDir = rootDir.resolve("src/main/webapp").toString();

        log.info("Static resources will be served from: {}", webappDir);

        registry
            .addResourceHandler("/static/**")
            .addResourceLocations(
                String.format("file:%s/", webappDir), // webapp 目录
                "classpath:/static/" // classpath 目录
            )
            .setCachePeriod(3600)
            .resourceChain(true);

        // 专门为 CSS 文件添加映射
        registry
            .addResourceHandler("/static/css/**")
            .addResourceLocations(
                String.format("file:%s/static/css/", webappDir) // webapp/static/css 目录
            )
            .setCachePeriod(3600)
            .resourceChain(true);
    }
}
