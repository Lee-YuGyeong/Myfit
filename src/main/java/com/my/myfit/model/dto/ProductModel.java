package com.my.myfit.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductModel {

    private int product_no, product_purchase_count, product_price, product_stock, category_no;
    private String product_name, product_image, product_content;


}
