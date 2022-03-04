package com.my.myfit.service;

import com.my.myfit.model.dao.ProductMapper;
import com.my.myfit.model.dto.ProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

    private final ProductMapper productMapper;

    @Override
    public List<ProductModel> getAllProductList() {
        return productMapper.getAllProductList();
    }

    @Override
    public ProductModel getProductList(int product_no) {
        return productMapper.getProductList(product_no);
    }

    @Override
    public List<ProductModel> getSearchProductList(String product_name) {
        return productMapper.getSearchProductList(product_name);
    }

    @Override
    public boolean insertProduct(ProductModel dto) {
        Integer result = productMapper.insertProduct(dto);

        if (result==1){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean updateProduct(ProductModel dto) {
        Integer result = productMapper.updateProduct(dto);

        if (result>=1){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean deleteProduct(int product_no) {
        Integer result = productMapper.deleteProduct(product_no);
        if (result>0){
            return true;
        }else{
            return false;
        }
    }
}
