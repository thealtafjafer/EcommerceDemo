const initState = {
    products: [
        {id: 1, name: 'Sparx sport shoe', image: '/Assets/sparx shoe.jpg', price: 20, discount: 2, discountPrice: 20  - 2 / 100 * 20, quantity: 1, desc: "It is a unisex show. stylish design, cofortable for all type of sports because of geniun design."},
        {id: 2, name: 'Bata leather shoe', image: '/Assets/bata1.jpg', price: 30, discount: 5, discountPrice: 30  - 5 / 100 * 30, quantity: 1, desc: "Pure leather shoe, light in weight, formal black color."},
        {id: 3, name: 'Campus ladies shoe', image: '/Assets/campus1.jpeg', price: 15, discount: 3, discountPrice: 15  - 3 / 100 * 15, quantity: 1, desc: "comfortable for ladies while jogging and light exercise, light weight and durable."},
        {id: 4, name: 'Catwalk ladies shoe', image: '/Assets/catwalk11.jpg', price: 50, discount: 4, discountPrice: 50  - 4 / 100 * 50, quantity: 1, desc: "ladies fancy shoe for party. awesome design."},
        {id: 5, name: 'Hrx unisex gym shoe', image: '/Assets/hrx.jpg', price: 25, discount: 2, discountPrice: 25  - 2 / 100 * 25, quantity: 1, desc: "Heavy design for gym lovers for heavy exercise training, and it is also water proof."},
        {id: 6, name: 'Nike lace free shoe', image: '/Assets/nike lace free.jpg', price: 60, discount: 6, discountPrice: 60  - 6 / 100 * 60, quantity: 1, desc: "One of the rarest desing shoe for modern era. free of laces and unique design."},
        {id: 7, name: 'Redtape casual shoe', image: '/Assets/redtape casual.jpeg', price: 35, discount: 2, discountPrice: 35  - 2 / 100 * 35, quantity: 1, desc: "Casual shoe for parties. rare desing. heavy base"},
        {id: 8, name: 'Herem loafer party wear', image: '/Assets/herem loafer.jpg', price: 80, discount: 7, discountPrice: 80  - 7 / 100 * 80, quantity: 1, desc: "Loafer party wear, suitable on ankle length jeans, pride of footwear."},
        {id: 9, name: 'Adidas running shoe', image: '/Assets/adidas.jpg', price: 95, discount: 4, discountPrice: 95  - 4 / 100 * 95, quantity: 1, desc: "it is made up of lighter material and have shock absorbing property."},        
        {id: 10, name: 'Versace sport shoe', image: '/Assets/versace.jpg', price: 120, discount: 3, discountPrice: 120  - 3 / 100 * 120, quantity: 1, desc: "One of the top most brands in the world. and have a unique design "},        

    ],
    product: []
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;