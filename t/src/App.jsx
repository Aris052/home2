import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    { id: 101, name: "Psycholagy", price: 27000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3200,h_1626/dk-core-nonprod/9780744098556/9780744098556_cover.jpg" },
    { id: 102, name: "Art", price: 24000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3200,h_1626/dk-core-nonprod/9781465453372/9781465453372_cover.jpg" },
    { id: 103, name: "Economics", price: 32000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3200,h_1626/dk-core-nonprod/9780756698270/9780756698270_cover.jpg" },
    { id: 104, name: "Religions", price: 20000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3200,h_1626/dk-core-nonprod/9781465408433/9781465408433_cover.jpg" },
    { id: 105, name: "Sherlock Holmes", price: 22000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465438492/9781465438492_cover.jpg" },
    { id: 106, name: "Crime", price: 12000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465462862/9781465462862_cover.jpg" },
    { id: 107, name: "Classical Music", price: 11500, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465473424/9781465473424_cover.jpg" },
    { id: 108, name: "History", price: 28000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3200,h_1626/dk-core-nonprod/9781465445100/9781465445100_cover.jpg" },
  ])

  const [basket, setBasket] = useState([])
  const moveToCart = prod => {
    const result = basket.find(x => x.id == prod.id)
    if (result) {
      result.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, { ...prod, count: 1 }])
    }
  }


  const addToCart = id => {
    setBasket(basket.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      } else {
        return item
      }
    }))
  }


  const minusToCart = id => {
    setBasket(basket.map(item => {
      if (item.id === id && item.count != 1) {
        return { ...item, count: item.count - 1 }
      } else {
        return item
      }
    }))
  }


  const removeToCart = id => {
    setBasket(basket.filter(item => item.id !== id))
  }



  return <>
    <h1>Online Shop</h1>
    <div className='content'>
      <div>
        <h3>Products</h3>
        <div className='list'>
          {
            products.map(prod => <div key={prod.id}>
              <img src={prod.pic} />
              <p>{prod.name}</p>
              <strong>{prod.price} AMD</strong>
              <button onClick={() => moveToCart(prod)}>Move</button>
            </div>)
          }
        </div>
      </div>
      <div>
        <h3>Cart</h3>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>count</th>
              <th>subtotal</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              basket.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.count * item.price}</td>
                <td>
                  <button onClick={() => addToCart(item.id)}>+</button>
                  <button onClick={() => minusToCart(item.id)} >-</button>
                  <button onClick={() => removeToCart(item.id)}>X</button>
                </td>

              </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  </>
}

export default App
