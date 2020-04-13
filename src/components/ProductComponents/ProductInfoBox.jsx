import React from "react"
import { Row, Col, Button, Typography, Input, Divider } from "antd"

const { Text, Title } = Typography

const ProductInfoBox = ({ product }) => {
  return (
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
                      alt=" "
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

        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ marginBottom: 10 }} strong>
            Coverage
          </Text>
          <Row gutter={[10]}>
            <Col span={12}>
              <Input placeholder="Enter your coverage" />
            </Col>
            <Col span={12}> sss</Col>
          </Row>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Text style={{ fontSize: 16, color: "#369824" }}>Subtotal</Text>
          <Text strong>$3000</Text>
        </Row>
        <Divider />
        <Button  style={{margin: '10px 0' }} type="primary">Add to Cart for Shipping Rate</Button>
        <Button>Save to Wishlist</Button>
        <Text style={{margin: '10px 0' }}>Are you a contractor? <Text strong ><a src="#">Sign up for Pro Rewards</a></Text></Text>
      </Row>
    </Row>
  )
}

export { ProductInfoBox }
