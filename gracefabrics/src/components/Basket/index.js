import React, { Component } from "react";

class Basket extends Component {

  render() {

    const { shoppingList } = this.props;

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
                    {/* {item.count} X {util.formatCurrency(item.price)} */}
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