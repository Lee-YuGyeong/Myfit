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
}
