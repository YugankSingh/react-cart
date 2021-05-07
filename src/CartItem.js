import React from 'react'

class CartItem extends React.Component {
	constructor(){
		super()
		this.state = {
			price: 99999999,
			title: "Bey Em Way",
			qty: 2,
			img: '',
		}
	}
	
	increaseQuantity = () => {
		// this.setState({qty: ++this.state.qty })
		this.setState( (prevState) => {
			return {
				qty: prevState.qty+1
		}} )
	}
	decreaseQuantity = () => {
		const {qty} = this.state

		if(qty === 1)
			return
			
		this.setState( (prevState) => {
			return {
				qty: prevState.qty-1
		}} )
	}



	render () {
		const { price, title , qty } = this.state
		return (
			<div className="cart-item">
				<div className="left-block">
					<img alt="product-image" src="" style={styles.image} /> 
				</div>
				<div className="right-block">
					<div style={ { fontSize: '1.56em' } } >{ title }</div>
					<div style={ { color: '#777' } } >Rs { price }</div>
					<div style={ { color: '#777' } } >Qty: { qty }</div>
					<div className="cart-item-actions">
						<img 
							alt="increase" 
							className="action-icons" 
							src="https://image.flaticon.com/icons/png/128/1237/1237946.png"
							onClick={ this.increaseQuantity }
						/>
						<img 
							alt="decrease" 
							className="action-icons" 
							src="https://t4.ftcdn.net/jpg/03/16/36/03/240_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"
							onClick={ this.decreaseQuantity }
						/>
						<img 
							alt="delete" 
							className="action-icons" 
							src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
							onClick={ this.deleteItem }
						/>
					</div>
				</div>
			</div>
		)
	}
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 10,
		background: '#ccc'
	}
}


export default CartItem