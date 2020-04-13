import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Text, Paragraph, Title } = Typography

const ProductOverview = (props) => {
    return (
        <Row gutter={[20, 20]} style={{  borderRadius: 4, border: 'solid 1px #d8d8d8', padding: 10}}>
        <Col span={18}>
          <Title level={2}>Product OverView</Title>
          <Paragraph ellipsis={{ rows: 10, expandable: true }}>
            The Jasper Hardwood Canadian Maple Collection offers traditional
            elegance and style for your home. Crafted from naturally strong
            and durable Canadian maple, this solid hardwood flooring offers
            superior strength and durability that you can count on. That’s not
            all, this top-quality hardwood flooring will give your interior
            design project a sense of warmth and traditional beauty. With
            BuildDirect’s manufacturer-direct prices, you can achieve this all
            for less. Learn more about this gorgeous hardwood flooring below.

          <ul>
            <li>
              Eye-catching natural beauty: maple offers creamy white to light
              reddish brown tones, along with tight graining patterns and a
              uniform texture. These qualities allow maple to be sanded to a
              beautiful finish.
            </li>
            <li>
              Expertly milled boards: built for tight fitting installations,
              these hardwood planks have tongue and groove edges that lock
              together smoothly. Install these boards using a nail down
              method.
            </li>
            <li>
              Finished smooth: these solid hardwood planks are crafted with a
              smooth surface, which highlights the maple’s natural character.
            </li>
            <li>
              A popular choice among homeowners, smooth finish hardwood
              provides classic elegance. Lasting durability: with a Janka
              hardness rating of approximately 1450, maple is slightly harder
              than red oak. Maple is also exceptionally shock and wear
              resistant, making it a great choice for busy homes.
            </li>
            <li>
              Finishing touch: for lasting protection and enhanced scratch
              resistance, this quality prefinished hardwood has 9 coats of
              Oxylust Exclusive Aluminum Oxide with Antimicrobial Ultra-Fresh™
              Agent. Purchase with confidence: Jasper backs this solid
              hardwood flooring with a 35-year finish warranty and a 35-year
              structural warranty.
            </li>
            <li>
              Plank dimensions: these boards measure 3/4" Thick x 4 1/4” Wide
              x Random Lengths (minimum length 12”, maximum length 72”,
              average length 27”).
            </li>
          </ul>
          </Paragraph>
        </Col>
        <Col
          span={6}
          style={{ margin: "100px 0px", padding: 10, background: "#d8d8d8", }}
        >
          <p>
            Warranty, Installation & Other info Hardwood Floor Installation
            Instructions Hardwood Floor Pre-Installation Checklist Hardwood
            Floor Care & Maintenance Hardwood Floor Warranty You will need
            Adobe® Reader to view documents. Download it from the Adobe Web
            Site.
          </p>
        </Col>
      </Row>
    )
}

export { ProductOverview }