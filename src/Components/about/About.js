import React, {Component} from 'react';

class About extends Component{
    render(){
        return (
            <section id="about" className="about-us">
                <div className="about-us-content">
                    <img src={require("../../img/icon-about.png")} alt="icon" className="icon"/>
                        <h2 className="heading-1 margin-m">A new generation of vintage bike</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.
                        </p>
                </div>
            </section>
        )
    }
}

export default About;