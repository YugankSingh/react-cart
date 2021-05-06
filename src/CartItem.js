import React from 'react'

class CartItem extends React.Component {
	render () {
		return (
			<div className="cart-item">
				<div className="left-block">
					<img src="" style={styles.image} /> 
				</div>
				<div className="right-block">
					<div style={ { fontSize: '1.56em' } } >Phone</div>
					<div style={ { color: '#777' } } >Rs 999</div>
					<div style={ { color: '#777' } } >Qty: 1</div>
					<div className="cart-item-actions">
						{/* Buttons */}
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