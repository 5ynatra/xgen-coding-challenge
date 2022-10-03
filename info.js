window.htmlTemplate1 = `
 <div class="product card col-md-2">
    <a href="{{product_url}}">
        <img src="{{image}}" class="card-img-top" alt="{{prod_name}}">
        <div class="card-body">
          <h4 class="card-title">{{prod_name}}</h4>
          <h5 class="card-title">{{short_description}}</h5>
          <h6 class="card-text">{{currency_symbol}}{{price}}</h6>
        </div>    
    </a>
</div>
`

window.htmlTemplate2 = `
 <div class="product card col-md-2">
    <a href="{{product_url}}">
        <img src="{{image}}" class="card-img-top" alt="{{prod_name}}">
        <div class="card-body">
          <h4 class="card-title">{{prod_name}} - {{manufacturer}}</h4>
          <h6 class="card-text">{{currency_symbol}}{{price}}</h6>    
        </div>
    </a>
</div>
`

window.products = [
  {
    "short_description": "Green Women's Top",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_2",
    "product_types": ["green", "top"],
    "prod_code": "4596234223693",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355642.jpg?v=1587584694",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 2"
  },
  {
    "short_description": "Navy Women's Pants",
    "product_url": "https://piedpiperstore.myshopify.com/products/pants_20",
    "product_types": ["pants"],
    "prod_code": "4596236255309",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788362829],
    "category_ids": [161788362829],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355560.jpg?v=1587584791",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Pants 20"
  },
  {
    "short_description": "Camo Women's Tshirt",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_13",
    "product_types": ["camo", "top"],
    "prod_code": "4596234682445",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17342044.jpg?v=1587584735",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "44.00",
    "prod_name": "Top 13"
  },
  {
    "short_description": "Striped Women's Tank",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_10",
    "product_types": ["stripe", "top"],
    "prod_code": "4596234584141",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/20023083.jpg?v=1587584717",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 10"
  },
  {
    "short_description": "Suede Women's Coat",
    "product_url": "https://piedpiperstore.myshopify.com/products/coat_10",
    "product_types": ["suede", "coat", "coats"],
    "prod_code": "4596237107277",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "300.00",
    "currency": "USD",
    "categories": [161788461133],
    "category_ids": [161788461133],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17316459.jpg?v=1587584814",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Coat 10"
  },
  {
    "short_description": "Floral Summer Dress",
    "product_url": "https://piedpiperstore.myshopify.com/products/dress_13",
    "product_types": ["floral", "red", "white", "dress"],
    "prod_code": "4596233404493",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788002381],
    "category_ids": [161788002381],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17106679.jpg?v=1587584670",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Dress 13"
  },
  {
    "short_description": "Navy Women's Top",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_6",
    "product_types": ["navy", "top"],
    "prod_code": "4596234420301",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355599.jpg?v=1587584707",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "44.00",
    "prod_name": "Top 6"
  },
  {
    "short_description": "Green Women's Top",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_16",
    "product_types": ["green", "top"],
    "prod_code": "4596234813517",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19017706.jpg?v=1587584741",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 16"
  },
  {
    "short_description": "Blue Women's Pants",
    "product_url": "https://piedpiperstore.myshopify.com/products/pants_6",
    "product_types": ["blue", "pants"],
    "prod_code": "4596235501645",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788362829],
    "category_ids": [161788362829],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19109567.jpg?v=1587584763",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Pants 6"
  },
  {
    "short_description": "Navy Women's Top",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_14",
    "product_types": ["navy", "top"],
    "prod_code": "4596234747981",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19329164.jpg?v=1587584737",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 14"
  },
  {
    "short_description": "Floral Women's Top",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_3",
    "product_types": ["navy", "top"],
    "prod_code": "4596234289229",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19355648.jpg?v=1587584697",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 3"
  },
  {
    "short_description": "Blue Fuzzy Women's Coat",
    "product_url": "https://piedpiperstore.myshopify.com/products/coat_15",
    "product_types": ["blue", "coat"],
    "prod_code": "4596237500493",
    "manufacturer": "XGen",
    "is_in_stock": "1",
    "price": "300.00",
    "currency": "USD",
    "categories": [161788461133],
    "category_ids": [161788461133],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/17278769.jpg?v=1587584839",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Coat 15"
  },
  {
    "short_description": "Black Women's Tee",
    "product_url": "https://piedpiperstore.myshopify.com/products/top_18",
    "product_types": ["black", "top"],
    "prod_code": "4596235010125",
    "manufacturer": "XGen",
    "is_in_stock": "0",
    "price": "54.00",
    "currency": "USD",
    "categories": [161788198989],
    "category_ids": [161788198989],
    "image": "https://cdn.shopify.com/s/files/1/0257/3693/7549/products/19329180.jpg?v=1587584746",
    "currency_symbol": "$",
    "type_id": "simple",
    "sale_price": "None",
    "prod_name": "Top 18"
  }
]
