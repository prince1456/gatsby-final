import React from "react"
import { Breadcrumb, Button, Typography, Rate, Row, Col, Divider } from "antd"
import { ProductCarousel } from '../components'
import { BREADCRUMP } from "./sampleData"
import {
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const { Title, Paragraph, Text } = Typography
const productPage = ({ pageContext: { product } }) => {
  console.log(product)
  const props = {
    zoomPosition: "original",
    width: 720,
    height: 500,
    zoomWidth: 700,
    scale: 1.3,
  }
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
          <Row className="product-right-infoBox">
            <Row style={{ display: "flex", flexDirection: "column" }}>
              <Text delete>USD $ {product.price.max}sq ft</Text>
              <Text style={{ fontSize: 12 }} type="warning">
                Unlimited Offer Price
              </Text>
              <Text style={{ fontSize: 23 }} strong type="warning">
                USD {product.price.min} / sq ft
              </Text>
              <Text style={{ fontSize: 14 }}>
                Limited offer ends on January 31, 2018 PST
              </Text>
              <Text style={{ fontSize: 16, color: "#369824" }}>
                Available to Ship on: Aug 15th
              </Text>
            </Row>
            <Divider />
            <Row style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 14, marginBottom: 10 }} strong>
                Other Styles:
              </Text>
              {Array(2).fill(0).length && (
                <Row gutter={[32, 32]}>
                  {Array(2)
                    .fill(0)
                    .map((ancestor, index) => {
                      return (
                        <Col key={index} span={4}>
                          <img
                            src={
                              "https://d18178273alp6b.cloudfront.net/production/bdsellerassets/hardwood-flooring/jasper/images/jasper-hardwood---canadian-maple-collection/10098557-jasper-hardwood-canadian-maple-montebello-gray-comp_250.jpg"
                            }
                          />
                        </Col>
                      )
                    })}
                </Row>
              )}
              <Row style={{ display: "flex", flexDirection: "column" }}>
                <Text>
                  <Text strong> Style: </Text>Fraser
                </Text>
                <Text>
                  <Text strong> Size: </Text>9mm
                </Text>
                <Text>
                  <Text strong> Core Type: </Text>WPC
                </Text>
                <Text>
                  <Text strong> installation Method: </Text>Click Lock
                </Text>
              </Row>

              <Divider />

              <Row>
                <Text strong>Coverage</Text>
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>

      <Button type="primary">Primary</Button>
    </div>
  )
}

export default productPage
