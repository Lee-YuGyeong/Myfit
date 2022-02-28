package com.my.myfit.service;

import com.my.myfit.model.dto.ProductModel;

import java.util.List;

public interface ProductService {

    public List<ProductModel> getAllProductList();
    public ProductModel getProductList(int product_no);
    public List<ProductModel> getSearchProductList(String product_name);
    public boolean insertProduct(ProductModel dto);
    public boolean updateProduct(ProductModel dto);
    public boolean deleteProduct(int product_no);
}
