import React, { createRef, useState } from 'react'
import Cards from './card'
import 'Styles/productcontainer.scss'
import 'Styles/sidebar.scss'
const ListScrollToItem = props => {
  const [isExclusive, setExclusive] = useState(0)
  const { data, categories } = props
  const refs = categories.reduce((acc, value) => {
    const val = value.replace(/\s/g, '')
    acc[val] = createRef()
    return acc
  }, {})
  const handleClick = args => {
    refs[args].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className='base-container'>
      <div className='sidebar'>
        <ul className='category-list'>
          {categories.map((category, id) => (
            <li className='list-item' key={category.replace(/\s/g, '')}>
              <p
                className='list-item-label'
                type='button'
                onClick={() => handleClick(category.replace(/\s/g, ''))}
              >
                {category.replace(/\s/g, '')}
              </p>
            </li>
          ))}
          <li className='list-item' onClick={() => setExclusive(false)}>
            <p type='button' className='list-item-label active'>
              On Swiggy
            </p>
          </li>
          <li className='list-item' onClick={() => setExclusive(true)}>
            <p type='button' className='list-item-label '>
              See All
            </p>
          </li>
        </ul>
      </div>

      <div className='product-container'>
        {data.map((item, id) => (
          <div key={id} ref={refs[item.category.replace(/\s/g, '')]}>
            <h4 className='product-category-heading'>{item.category}</h4>
            <Cards value={item.restaurantList} exclusive={isExclusive} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListScrollToItem
