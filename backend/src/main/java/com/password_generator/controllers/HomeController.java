package com.password_generator.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.Data;

@RestController
public class HomeController {

    @GetMapping("/greetingMessage")
    public GreetingMessageDTO getHello() {
        GreetingMessageDTO messageDTO = new GreetingMessageDTO();
        messageDTO.setMessage("Hi from the back end");
        return messageDTO;
    }

    @Data
    public static class GreetingMessageDTO {
        String message;
    }
}
