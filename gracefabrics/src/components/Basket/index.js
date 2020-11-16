import React, { Component } from "react";

class Basket extends Component {

  render() {
    console.log(this.props.props)
    const shoppingList = this.props.props;
    console.log( shoppingList)
    return(
      <div>
        {shoppingList.length === 0 ? ("Your cart is empty") : (
          <div>
            There are { shoppingList.length } items in your cart. 
          </div>
        )}
        {
          shoppingList.length > 0 && (
            <div>
              <ul>
                {shoppingList.map((item) => (
                    <li key={item.id}>
                    <b>{item.name}</b>
                    <button>
                      X
                    </button>
                    </li>
                  ) 
                )}
               
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default Basket;