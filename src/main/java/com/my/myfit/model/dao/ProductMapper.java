package com.my.myfit.model.dao;

import com.my.myfit.model.dto.ProductModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ProductMapper {

    List<ProductModel> getAllProductList();
    ProductModel getProductList(int product_no);
    List<ProductModel> getSearchProductList(String product_name);
    public Integer insertProduct(ProductModel dto);
    public Integer updateProduct(ProductModel dto);
    public Integer deleteProduct(int product_no);
}
