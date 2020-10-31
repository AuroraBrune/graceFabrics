import React from 'react'
import './carousel.css' 

export default function Carousel(){
    <Carousel
  carouselId="Carousel-2"
  images={[
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    'https://picsum.photos/200/300?image=3',
    'https://picsum.photos/200/300?image=4'
  ]}
  options={{
    dist: -100,
    duration: 200,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    numVisible: 5,
    onCycleTo: null,
    padding: 0,
    shift: 0
  }}
/>

}