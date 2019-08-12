import React from 'react';

export function Work (){
        return (
            <section id="work" className="work">
                <figure className="work-figure work-img-1">
                    <img src={require("../../res/img/work-1.jpg")} alt="bike pic" className="work-img "/>
                        <figcaption>
                            <img src={require("../../res/img/logo-bicycle-company.png")} alt="logo"/>
                        </figcaption>
                </figure>

                <div className="work-text work-text-1">
                    <img src={require("../../res/img/icon-work-1.png")} alt="icon" className="icon margin-s"/>
                        <h2 className="heading-1 margin-s">Vintage oliva</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived .
                        </p>
                </div>
                <img src={require("../../res/img/work-2.jpg")} alt="bike pic" className="work-img work-img-2"/>
                    <div className="work-text work-text-2">
                        <img src={require("../../res/img/icon-work-2.png")} alt="icon" className="icon margin-s"/>
                            <h2 className="heading-1 margin-s">La boriosa</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived.
                            </p>
                    </div>
                    <img src={require("../../res/img/work-3.jpg")} alt="bike pic" className="work-img work-img-3"/>
                        <figure className="work-figure  work-img-4">
                            <img src={require("../../res/img/work-4.jpg")} alt="bike pic" className="work-img "/>
                                <figcaption>
                                    <img src={require("../../res/img/logo-vintage-bicycles.png")} alt="logo"/>
                                </figcaption>
                        </figure>
                        <figure className="work-figure work-img-5">
                            <img src={require("../../res/img/work-5.jpg")} alt="bike pic" className="work-img work-img-5"/>
                                <figcaption>
                                    <img src={require("../../res/img/logo-bicycles-since.png")} alt="logo"/>
                                </figcaption>
                        </figure>
                        <div className="work-text work-text-3">
                            <img src={require("../../res/img/icon-work-3.png")} alt="icon" className="icon margin-s"/>
                                <h2 className="heading-1 margin-s">Retro bike - M. Hulot</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived.
                                </p>
                        </div>
                        <img src={require("../../res/img/work-6.jpg")} alt="bike pic" className="work-img work-img-6"/>
                        <img src={require("../../res/img/work-7.jpg")} alt="bike pic" className="work-img work-img-7"/>
            </section>
        )
}
