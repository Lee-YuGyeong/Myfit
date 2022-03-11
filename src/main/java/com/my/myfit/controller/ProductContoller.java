package com.my.myfit.controller;

import com.my.myfit.model.dto.ProductModel;
import com.my.myfit.service.ProductService;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
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
    @GetMapping("/allProductsssssssss")
    public List<ProductModel> getAllProduct() {

        return productService.getAllProductList();
    }

    @Operation(summary = "특정 상품 상세 정보 가져오기", description = "특정 상품 상세 정보 가져오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/product")
    public ProductModel getSearchProduct(@RequestParam("product_no") int product_no) {

        return productService.getProductList(product_no);
    }

    @Operation(summary = "검색한 상품 상세 정보 가져오기", description = "검색한 상품 상세 정보 가져오기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/searchProducts")
    public List<ProductModel> getSearchProduct(@RequestParam("product_name") String product_name) {

        return productService.getSearchProductList(product_name);
    }

    @Operation(summary = "상품 추가하기", description = "상품 추가하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @PostMapping("/product")
    public boolean insertProduct(ProductModel dto) {



        return productService.insertProduct(dto);
    }


    @Operation(summary = "상품 수정하기", description = "상품 수정하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @PutMapping("/product")
    public boolean updateProduct(ProductModel dto) {

        return productService.updateProduct(dto);
    }

    @Operation(summary = "상품 삭제하기", description = "상품 삭제하기")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @DeleteMapping("/product")
    public boolean deleteProduct(@RequestParam("product_no") int product_no) {

        return productService.deleteProduct(product_no);
    }
}
