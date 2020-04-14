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
import { Link } from "gatsby"
import { Layout } from "../components"
const { Text, Title, Paragraph } = Typography

const ProductList = data => {
  console.log(data)
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
    <Layout location={data.location} title={"BuildDirect"}>
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
            <Col className="left-column" span="6">
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
            <Col span="18">
              <ReactiveList
                componentId="results"
                dataField="name"
                size={9}
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
                            <Link to={"/tftRbzc6Pic7NyCkg"}>
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
    </Layout>
  )
}

export default ProductList
