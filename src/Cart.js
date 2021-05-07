import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
	constructor(){
		super()
		this.state = {
			products: [
				{
					price: 99999999,
					title: "Bey Em Way",
					qty: 2,
					img: '',
				},{
					price: 10,
					title: "Tata Bye Bye",
					qty: 2,
					img: '',
				},{
					price: Infinity,
					title: "Aston Martin",
					qty: 2,
					img: '',
				},
				
			]
		}
	}

	render () {
		const { products } = this.state
		return (
			<div className="cart">
				{products.map( 
					(product,index) => {
						return (
							<CartItem 
								product={product} 
								key={index}
							/>
						)
					} 
				)}
			</div>
		)
	}
}



export default Cart