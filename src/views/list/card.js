/* eslint no-unused-vars: "off" */

import React from 'react'
import { randomImageUrl } from 'Util/imageUrl'
import { IMG_URL } from '../../constants/imageUrls'
import 'Styles/cards.scss'

const productCards = props => {
  const { value, isExclusive } = props
  return (
    <React.Fragment>
      <div className='cards__container'>
        {value
          .slice(0, 5)
          .map((item, id) =>
            isExclusive ? (
              <CardType key={id} data={item} isExclusive={isExclusive} />
            ) : (
              <CardType key={id} data={item} />
            )
          )}
      </div>
    </React.Fragment>
  )
}

const CardType = args => {
  const { data } = args
  const {
    delivery_time: delTime,
    name,
    price_for_two: price,
    ratings,
    food_types: food,
    isExclusive
  } = data

  return (
    <div className='cards three'>
      <div className='product-image'>
        <img
          src={IMG_URL[randomImageUrl()]}
          className='item-image'
          alt='image food'
        />
      </div>{' '}
      false
      <div className='product-desc'>
        <p className='rest-name'>{name} </p>
        <p className='price'>Price for two : {price}</p>
        <p className='basic-details'>
          <span className={`rest ratings-${Math.round(ratings)}`}>
            {ratings || 'N/A'}
          </span>
          <span>Deliver's in : {delTime}</span>
        </p>
        <p className='food-type'>{food.join(', ')}</p>
      </div>
    </div>
  )
}

export default productCards
