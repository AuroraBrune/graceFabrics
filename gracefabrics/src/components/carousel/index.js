import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from 'react-material-ui-carousel'


 export default function Example()
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
      <div>
        carousel
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </div>
    )
}
