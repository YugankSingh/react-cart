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
	handleIncreaseQuantity = (index) => {
		const { products } = this.state
		const currProduct = products[index]
		
		currProduct.qty++

		this.setState({currProduct})
	}
	handleDecreaseQuantity = (index) => {
		const { products } = this.state
		const currProduct = products[index]
		
		if(currProduct.qty == 1)
		 return
		currProduct.qty--

		this.setState({products})
	}

	handleDeleteProduct = index => {
		const { products } = this.state
		products.splice(index, 1)
		console.log('deleting on ', index)

		this.setState({})
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
								index={index}
								onIncreaseQuantity={this.handleIncreaseQuantity}
								onDecreaseQuantity={this.handleDecreaseQuantity}
								onDeleteProduct={this.handleDeleteProduct}
							/>
						)
					} 
				)}
			</div>
		)
	}
}



export default Cart