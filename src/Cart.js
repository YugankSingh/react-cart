import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
	const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct  } = props
	return (
		<div className="cart">
			{products.map( 
				(product,index) => {
					return (
						<CartItem 
							product={product} 
							key={index}
							index={index}
							onIncreaseQuantity={onIncreaseQuantity}
							onDecreaseQuantity={onDecreaseQuantity}
							onDeleteProduct={onDeleteProduct}
						/>
					)
				} 
			)}
		</div>
	)
}



export default Cart