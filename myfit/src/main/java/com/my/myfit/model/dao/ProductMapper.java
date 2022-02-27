package com.my.myfit.model.dao;

import com.my.myfit.model.dto.ProductModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ProductMapper {

    List<ProductModel> getAllProductList();

}
