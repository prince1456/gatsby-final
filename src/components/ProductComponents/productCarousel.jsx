import React from "react"
import { Carousel } from "react-responsive-carousel"
import ReactImageZoom from "react-image-zoom"
const ProductCarousel = () => {
  const props = {
    zoomPosition: "original",
    width: 720,
    height: 500,
    zoomWidth: 700,
    scale: 1.4,
  }

  return (
    <div>
      <Carousel showThumbs={true} showArrows={false} showIndicators={false}>
        <div id="product-image-wrapper">
          <ReactImageZoom
            {...props}
            img={
              "https://d18178273alp6b.cloudfront.net/production/bdsellerassets/hardwood-flooring/jasper/images/jasper-hardwood---canadian-silver-maple-collection/15099752-edison-multi.jpg"
            }
          />
          <img
            alt=" "
            style={{}}
            src="https://d18178273alp6b.cloudfront.net/production/bdsellerassets/hardwood-flooring/jasper/images/jasper-hardwood---canadian-silver-maple-collection/15099752-edison-multi.jpg"
          />
        </div>
        <div>
          <ReactImageZoom
            {...props}
            img="https://d18178273alp6b.cloudfront.net/production/bdsellerassets/hardwood-flooring/jasper/images/jasper-hardwood---canadian-silver-maple-collection/updated-images/15099752-edison-room.jpg"
          />
          <img
            alt=" "
            style={{}}
            src="https://d18178273alp6b.cloudfront.net/production/bdsellerassets/hardwood-flooring/jasper/images/jasper-hardwood---canadian-silver-maple-collection/updated-images/15099752-edison-room.jpg"
          />
        </div>
        <div>
          <ReactImageZoom
            {...props}
            img="https://www.gettyimages.ca/gi-resources/images/500px/983794168.jpg"
          />
          <img
            alt=" "
            style={{}}
            src="https://www.gettyimages.ca/gi-resources/images/500px/983794168.jpg"
          />
        </div>
      </Carousel>
    </div>
  )
}

export { ProductCarousel }
