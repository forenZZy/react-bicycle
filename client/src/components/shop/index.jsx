import React from 'react';

export function Shop (){
        return (
            <section id="shop" className="shop-section">
                <div className="shop">
                    <figure className="shop-product ">
                        <img src={require("../../res/img/gallery-1.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product ">
                        <img src={require("../../res/img/gallery-2.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-row">
                        <img src={require("../../res/img/gallery-3.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-row">
                        <img src={require("../../res/img/gallery-4.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-column">
                        <img src={require("../../res/img/gallery-5.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product shop-product-column">
                        <img src={require("../../res/img/gallery-6.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product ">
                        <img src={require("../../res/img/gallery-7.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
                                    <span>Shop now</span>
                            </figcaption>
                    </figure>
                    <figure className="shop-product ">
                        <img src={require("../../res/img/gallery-8.jpg")} className="product-img" alt="product"/>
                            <figcaption>
                                <img src={require("../../res/img/icon-bike.png")} alt="bike icon"/>
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
