package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Description:
 * @Author: guoyy
 * @Date 2022/11/21 16:07
 */
@RestController
public class DemoController {

    @GetMapping("hello")
    public String hello(){
        System.out.println("hello");
        return "Hello world!";
    }
}
