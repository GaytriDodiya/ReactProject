import React from 'react'
import { CartState } from '../context/context'
import SingleProduuct from './SingleProduuct';
import '../style.css'
import Filter from './Filter';

const Home = () => {
  const { state: { products }, productState: { sort, byStock, byFastDelivery, byRating, searchQuery }, } = CartState();
  // console.log(products)

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  }
  return (
    <div className='Home'>
      <Filter></Filter>
      <div className="productCobtaiber">
        {transformProducts().map((prod) => {
          return <SingleProduuct prod={prod} key={prod.id}></SingleProduuct>
        })}
      </div>
    </div>
  )
}

export default Home

