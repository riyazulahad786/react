import React, { Component } from "react";
import { setConstantValue } from "typescript";
import Spinner from "./Spinner";
import WorldItem from "./worldItem";
import PropTypes from 'prop-types'
import LoadingBar from 'react-top-loading-bar'
export class world extends Component {
  static defaultProps = {
    country:"in",
    category:"genral"
    
  }
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string
  }
  articles = [];
 capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      page: 1,
    };
    document.title = `${this. capitalizeFirstLetter(this.props.category)} | News`;
  }
  previousHandle = async () => {
    console.log("prevHandle");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${ this.props.category}&apiKey=1086389a5b454e50b02f630d4ddf3c24&page=${this.state.page-1}`;
  let response = await fetch(url);
  let parsedData = await response.json();
  this.setState({
    page:this.state.page-1,
    articles: parsedData.articles, 
  })


  };
  nextHandle = async  () => {
    console.log("next");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${ this.props.category}&apiKey=1086389a5b454e50b02f630d4ddf3c24&page=${this.state.page+1}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles, 
    })
  
  };
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${ this.props.country}&category=${ this.props.category}&apiKey=1086389a5b454e50b02f630d4ddf3c24&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      // this.props.setProgress(30)
    let response = await fetch(url);
    // this.props.setProgress(50)
    let parsedData = await response.json();
    // this.props.setProgress(100)
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
    loading:false
    });
  }

  render() {
    return (
      <div className="container my-3 mx-3 text-center">
      <h1 style={{margin:"30px 0px"}}>Top Headlines from {this. capitalizeFirstLetter(this.props.category)} category</h1>
          {this.state.loading && <Spinner/>}  
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <WorldItem key={element.url}
                  title={
                    element.title
                      ? element.title.slice(0, 40)
                      : "Erstmals seit langer Zeit stehen bei Tesla wieder fertige Model 3 un"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 68)
                      : "Erstmals seit langer Zeit stehen bei Tesla wieder fertige Model 3 un"
                  }
                  imageUrl={element.urlToImage}
                  pageSize={8}
                  author={element.author?element.author:"mackenzey"} 
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3 mx-3">
          <button
            disabled={this.state.page <=1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousHandle}
          >
            {" "}
            &larr; previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextHandle}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default world;
