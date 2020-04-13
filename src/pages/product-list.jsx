import React from "react"
import {
  ReactiveBase,
  MultiList,
  RangeSlider,
  ReactiveList,
  CategorySearch,
  MultiDropdownList,
  SelectedFilters,
  DataSearch,
  ResultCard,
} from "@appbaseio/reactivesearch"
import { Row, Col, Typography, Rate } from "antd"
import { Link } from 'gatsby'

const { Text, Title, Paragraph } = Typography

const ProductList = data => {
  const onData = () => {
    return {
      image: "https://www.bigstockphoto.com/images/homepage/module-6.jpg",
      title: data.title,
      description: (
        <div>
          <div className="min-price">{data.price.min}</div>
          <div className="max-price">{data.price.max}</div>
          <div className="info">{data.description}</div>
        </div>
      ),
      url: data.id,
    }
  }
  return (
    <section className="container">
      <ReactiveBase
        app="bd-search-commerce"
        credentials="U4Qmk1o65:a1d0b646-cc8d-4cac-a34c-3ac20c282ecf"
      >
        <div className="top-search">
          <DataSearch
            componentId="searchbox"
            autosuggest={true}
            highlight={true}
            queryFormat="or"
            showFilter={true}
            dataField={["brand", "product_name", "categories", "description"]}
          />
          <SelectedFilters />
        </div>
        <Row className="search-wrapper">
          <Col className="left-column" span="8">
            <MultiDropdownList
              componentId="searchBrand"
              dataField="brand.keyword"
              title="brands"
              react={{
                and: ["searchbox"],
              }}
            />
            <MultiDropdownList
              componentId="searchCategories"
              dataField="categories.keyword"
              title="categories"
              react={{
                and: ["searchbox"],
              }}
            />
            {/* <MultiList
              componentId="list-3"
              dataField="price.range.keyword"
              showCount={true}
              showSearch={false}
              size={100}
              style={{
                marginBottom: 20,
              }}
              title="priceRange"
            /> */}
          </Col>
          <Col className="left-column" span="16">
            <ReactiveList
              componentId="results"
              dataField="name"
              size={8}
              showResultStats={false}
              pagination={true}
              react={{
                and: ["searchbox", "searchBrand", "searchCategories"],
              }}
              render={({ data }) => (
                <ReactiveList.ResultCardsWrapper>
                  {data.map(item => (
                    <ResultCard key={item._id}>
                      <ResultCard.Image src={item.image[0]} />
                      <ResultCard.Title
                        dangerouslySetInnerHTML={{
                          __html: item.name,
                        }}
                      />
                      <ResultCard.Description>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Link to={'/tftRbzc6Pic7NyCkg'}>
                            <Paragraph ellipsis={{ rows: 2 }} level={4}>
                              {item.product_name}
                            </Paragraph>
                          </Link>
                          <Text>{item.retail_price}</Text>
                          <Rate
                            disabled
                            defaultValue={Math.floor(item.product_rating)}
                          />
                          <Text>{item.retail_price}</Text>
                        </div>
                      </ResultCard.Description>
                    </ResultCard>
                  ))}
                </ReactiveList.ResultCardsWrapper>
              )}
            />
          </Col>
        </Row>
      </ReactiveBase>
    </section>
  )
}

export default ProductList

// {
//     "brand": "couponsmall",
//     "categories": [
//         "Mobiles & Accessories",
//         "Tablet Accessories",
//         "Keyboards",
//         "couponsmall Keyboards",
//         "couponsmall key 343 Wired USB Tablet Keyboard (B..."
//     ],
//     "crawl_timestamp": "2016-03-10 07:45:58 +0000",
//     "description": "Key Features of couponsmall key 343 Wired USB Tablet Keyboard Size: Standard,Specifications of couponsmall key 343 Wired USB Tablet Keyboard (Black) General Specifications Interface Wired USB Brand couponsmall Model key 343 Sales Package keyboard, USBconnector Type Tablet Keyboard Model Name key 343 Color Black Size Standard Warranty Covered in Warranty 0 Warranty Summary 0 Warranty Service Type 0 Not Covered in Warranty na",
//     "discounted_price": "351",
//     "image": [
//         "http://img5a.flixcart.com/image/keyboard/tablet-keyboard/r/z/y/couponsmall-key-343-1100x1100-imaefv2emhpp3tku.jpeg",
//         "http://img5a.flixcart.com/image/keyboard/tablet-keyboard/r/z/y/couponsmall-key-343-original-imaefv2emhpp3tku.jpeg",
//         "http://img6a.flixcart.com/image/keyboard/tablet-keyboard/h/a/f/cm-key-339-original-imadvfhjghvzcgdw.jpeg"
//     ],
//     "is_FK_Advantage_product": false,
//     "overall_rating": "0.39",
//     "pid": "ACCEG7AG8EUZRRZY",
//     "product_name": "couponsmall key 343 Wired USB Tablet Keyboard",
//     "product_rating": "0.39",
//     "product_url": "http://www.flipkart.com/couponsmall-key-343-wired-usb-tablet-keyboard/p/itmeg7ag9pwbzy4a?pid=ACCEG7AG8EUZRRZY",
//     "retail_price": "1009",
//     "specifications": [
//         {
//             "key": "Interface",
//             "value": "Wired USB"
//         },
//         {
//             "key": "Brand",
//             "value": "couponsmall"
//         },
//         {
//             "key": "Model",
//             "value": "key 343"
//         },
//         {
//             "key": "Sales Package",
//             "value": "keyboard, USBconnector"
//         },
//         {
//             "key": "Type",
//             "value": "Tablet Keyboard"
//         },
//         {
//             "key": "Model Name",
//             "value": "key 343"
//         },
//         {
//             "key": "Color",
//             "value": "Black"
//         },
//         {
//             "key": "Size",
//             "value": "Standard"
//         },
//         {
//             "key": "Covered in Warranty",
//             "value": "0"
//         },
//         {
//             "key": "Warranty Summary",
//             "value": "0"
//         },
//         {
//             "key": "Warranty Service Type",
//             "value": "0"
//         },
//         {
//             "key": "Not Covered in Warranty",
//             "value": "na"
//         }
//     ],
//     "uniq_id": "5530d3015e7827bb9a1124af38c4db9c"
// }
