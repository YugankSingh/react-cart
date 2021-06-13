import Cart from "./Cart"
import Navbar from "./Navbar"
import React from "react"
import firebase from "firebase"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			products: [],
			loading: true,
		}
		this.db = firebase.firestore()
	}

	componentDidMount() {
		this.db
			.collection("products")
			.orderBy("createdAt", "desc")
			.onSnapshot(snapshot => {
				const products = snapshot.docs.map(doc => {
					let data = doc.data()
					data.id = doc.id
					return data
				})

				console.log(products)
				this.setState({
					products: products,
					loading: false,
				})
			})
	}

	handleIncreaseQuantity = index => {
		const { products } = this.state
		const currProduct = products[index]

		const docRef = this.db.collection("products").doc(currProduct.id)

		docRef
			.update({
				qty: currProduct.qty + 1,
			})
			.then(() => {
				console.log("Document Updated Successfully")
			})
			.catch(error => console.log("Error", error))
	}

	handleDecreaseQuantity = index => {
		const { products } = this.state
		const currProduct = products[index]

		if (currProduct.qty <= 1) return

		const docRef = this.db.collection("products").doc(currProduct.id)

		docRef
			.update({
				qty: currProduct.qty - 1,
			})
			.then(() => {
				console.log("Document Updated Successfully")
			})
			.catch(error => console.log("Error", error))
	}

	handleDeleteProduct = index => {
		const { products } = this.state
		const currProduct = products[index]

		const docRef = this.db.collection("products").doc(currProduct.id)

		docRef
			.delete()
			.then(() => {
				console.log("Document Deleted Successfully")
			})
			.catch(error => console.log("Error", error))
	}

	getCartProductsCount = () => {
		const { products } = this.state

		let count = 0
		products.forEach(product => (count += product.qty))

		return count
	}

	getTotalCartPrice = () => {
		const { products } = this.state

		let totalPrice = 0
		products.forEach(product => {
			totalPrice += product.price * product.qty
			// console.log(product.price * product.qty)
		})
		return totalPrice
	}

	potentialProducts = [
		{
			name: "Laptop",
			price: 89000,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg",
		},
		{
			name: "youPhone",
			price: 150000,
			imageUrl:
				"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000",
		},
		{
			name: "Chocolate",
			price: 99,
			imageUrl:
				"https://chocolatecoveredkatie.com/wp-content/uploads/2020/08/Homemade-Chocolate-Bars.jpg",
		},
		{
			name: "Keyboard",
			price: 6000,
			imageUrl:
				"https://massdrop-s3.imgix.net/product-images/drop-ctrl-mechanical-keyboard/FP/CH2mwjcSQiqeHYSZMUbg_ctrlpc.png?auto=format&fm=jpg&fit=crop&w=600&h=315&dpr=1&bg=f0f0f0",
		},
		{
			name: "Zero - One | Book",
			price: 1000,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
		},
		{
			name: "sticky notes",
			price: 200,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/61lFF-CgVwL._SY450_.jpg",
		},
		{
			name: "Deskmat",
			price: 2000,
			imageUrl:
				"https://cdn.dribbble.com/users/66340/screenshots/13895806/deskmat.jpg",
		},
		{
			name: "Sanitizer",
			price: 200,
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MsPDOg6qp1yxnKR_EEAheTvYKk130aJNRw&usqp=CAU",
		},
		{
			name: "Mask",
			price: 100,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/6190esdtZeL._SX342_.jpg",
		},
		{
			name: "Shoes",
			price: 3000,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/81QnGdrGwsL._UL1500_.jpg",
		},
		{
			name: "Vaseline",
			price: 30,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/51a86F%2BN3FL._SY355_.jpg",
		},
		{
			name: "Dove Soap",
			price: 40,
			imageUrl:
				"https://5.imimg.com/data5/WA/SI/PR/SELLER-4312448/dove-soap-500x500.jpg",
		},
		{
			name: "MX master 3",
			price: 7000,
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._SL1500_.jpg",
		},
		{
			name: "Herman Miller Aeron",
			price: 120000,
			imageUrl:
				"https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/aeron_chairs/mh_prd_ovw_aeron_chairs.jpg.rendition.480.360.jpg",
		},
		{
			name: "LinkedIn Premium",
			price: 2000,
			imageUrl:
				"https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg",
		},
	]
	getRandomProduct = async () => {
		if (Math.random() < 0.6) {
			let { potentialProducts } = this
			return potentialProducts[
				Math.floor(Math.random() * potentialProducts.length)
			]
		}
		let res = await fetch(
			"https://random-data-api.com/api/commerce/random_commerce"
		)
		let data = await res.json()
		let productName = data.product_name.trim()
		productName = productName.substring(productName.lastIndexOf(" "))
		let url = `https://pixabay.com/api/?key=${
			process.env.REACT_APP_PIXABAY_API_KEY
		}&q=${encodeURI(productName)}`
		let imgRes = await fetch(url)
		let imgData = await imgRes.json()
		let imageUrl =
			imgData.hits[Math.floor(Math.random() * imgData.hits.length)].webformatURL
		return {
			imageUrl,
			name: productName,
			price: Math.floor(data.price * 70),
		}
	}
	addProduct = async () => {
		let item = await this.getRandomProduct()
		this.db
			.collection("products")
			.add({
				img: item.imageUrl,
				price: item.price,
				qty: 1,
				title: item.name,
				createdAt: new Date().getTime(),
			})
			.then(docRef => {
				console.log("product has been added")
			})
			.catch(error => console.log("Error ", error))
	}

	render() {
		const { products, loading } = this.state
		return (
			<div className="App">
				<Navbar productCount={this.getCartProductsCount()} />
				<button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
					Add Random Product
				</button>

				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handleDeleteProduct}
				/>
				{loading && <h1> Loading Products ... </h1>}
				<div style={{ fontSize: 20, padding: 10 }}>
					TOTAL : {this.getTotalCartPrice()}
				</div>
			</div>
		)
	}
}

export default App
