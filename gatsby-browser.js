import "typeface-montserrat"
import "typeface-merriweather"
import * as React from "react"
import { TinaProvider } from "tinacms"

export function wrapRootElement({ element }) {
  return <TinaProvider cms={window.tinacms}>{element}</TinaProvider>
}