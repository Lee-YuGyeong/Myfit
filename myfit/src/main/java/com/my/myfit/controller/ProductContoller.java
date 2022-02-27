package com.my.myfit.controller;

import com.my.myfit.model.dto.ProductModel;
import com.my.myfit.service.ProductService;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;


import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductContoller {
    private final ProductService productService;

    @Operation(summary = "상품 상세 정보 가져오기", description = "상품 상세 정보 가져오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/getProduct")
    public List<ProductModel> getProduct() {

        return productService.getAllProductList();
    }

}
