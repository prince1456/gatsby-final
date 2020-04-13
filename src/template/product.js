import React from "react"
import { Breadcrumb, Button, Typography, Rate, Row, Col, Divider } from "antd"
import { ProductCarousel, ProductInfoBox,ProductOverview } from "../components"
import { BREADCRUMP } from "./sampleData"
import {
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const { Title, Text, Paragraph } = Typography
const productPage = ({ pageContext: { product } }) => {
  console.log(product)

  return (
    <div style={{ maxWidth: 1200, margin: "150px auto" }}>
      <Breadcrumb style={{ marginBottom: 36, marginLeft: 16 }}>
        {BREADCRUMP.map(item => {
          return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
        })}
      </Breadcrumb>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
          <Title>{product.title}</Title>
          <Title level={3}>Bandsawn Malbec Color</Title>
          <Title level={4}>Sold by: BuildDirect</Title>
          <div>
            <Rate allowHalf defaultValue={4.5} />{" "}
            <Text style={{ marginBottom: 15 }}>
              7 Reviews | SKU: {product.sku ? product.sku : "15170236"}
            </Text>
          </div>
          <div>
            <ProductCarousel />
          </div>
        </Col>
        <Col xs={24} sm={24} md={9} lg={9} xl={9}>
          <Row justify="end">
            <ul className="social-icon-list">
              <li>Share: </li>
              <li>
                <FacebookOutlined />
              </li>
              <li>
                <TwitterOutlined />
              </li>
              <li>
                <MailOutlined />
              </li>
            </ul>
          </Row>
          <ProductInfoBox product={product} />
        </Col>
        <ProductOverview />
      </Row>
    </div>
  )
}

export default productPage
