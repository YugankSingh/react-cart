
const Navbar = (props) => {
	const {productCount} = props
  return (
    <div style={styles.nav} className="Navbar">
			<div style={styles.cartIconContainer} >
				<img style={styles.cartIcon} alt="CartIcon" src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" /> 
				<span style={styles.cartCount} >{productCount}</span>	
			</div>
    </div>
  );
}


const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};



export default Navbar;
