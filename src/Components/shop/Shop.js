import React, {Component} from 'react';

class Shop extends Component{
    render(){
        return (
            <section id="shop" className="shop-section">
                <div className="shop">
                    <figure className="shop-product  shop-product-1">
                        <img src={require("../../img/gallery-1.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-2">
                        <img src={require("../../img/gallery-2.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-3">
                        <img src={require("../../img/gallery-3.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-4">
                        <img src={require("../../img/gallery-4.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-5">
                        <img src={require("../../img/gallery-5.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-6">
                        <img src={require("../../img/gallery-6.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-7">
                        <img src={require("../../img/gallery-7.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-8">
                        <img src={require("../../img/gallery-8.jpg")} className="product-img" alt="product photo"/>
                            <figcaption>
                                <img src={require("../../img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                </div>
                <div className="shop-btn">
                    <button className="discover-btn">Discover the shop</button>
                </div>
            </section>
        )
    }
}

export default Shop;