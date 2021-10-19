import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("Hello I am a constructor");
    }


handlePrevicesClick=()=>{
console.log("previous");
}
handleNextClick=()=>{
    console.log("Next" );
}



    render() {
        return (
            <div className="container my-3">
                <h2>News Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDec" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDec" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDec" />
                    </div>

                </div>
                <div className="container">
                    <button type="button" class="btn btn-dark" onClick={this.handlePrevicesClick}>Previces</button>
                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>

            </div>
        )
    }
}

export default News
