package com.avengers.zipcar.controller;

import com.avengers.zipcar.entity.Promotion;
import com.avengers.zipcar.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PromotionController {

    @Autowired
    PromotionService promotionService;

    @RequestMapping("/api/promotions/all")
    public List<Promotion> getPromotions() {
        return promotionService.getAllPromotionServices();
    }

}
