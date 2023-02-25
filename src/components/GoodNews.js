// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class GoodNews extends Component {
//     articles = []
//     constructor(){
//         super()

//         this.state ={
//             articles:  this.articles,
//             loading:false,
//             page:1
//         }
//     }
//     async componentDidMount(){
//         let url = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1086389a5b454e50b02f630d4ddf3c24";
//         let responseData = await fetch(url);
//         let parseData = await responseData.json();
//         console.log(parseData);
//         this.setState({articles:parseData.articles})
//     }
//      handlePrevious= async ()=>{
//       let url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1086389a5b454e50b02f630d4ddf3c24&page=${this.state.page - 1}`;
//       let responseData = await fetch(url);
//       let parseData = await responseData.json();
//       console.log(parseData);
//       this.setState({
//         page:this.state.page - 1,
//         articles:parseData.articles}
//         )
//      }
//      handleNext= async ()=>{
//       console.log("next")
//       let url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1086389a5b454e50b02f630d4ddf3c24&page=${this.state.page + 1}`;
//         let responseData = await fetch(url);
//         let parseData = await responseData.json();
//         console.log(parseData);
//         this.setState({
//           page:this.state.page + 1,
//           articles:parseData.articles}
//           )
//      }
//   render() {
  
//     return (
//       <div className='container'>
//       <h1>Top Headline</h1>
//       <div className='row'>
//       {this.state.articles.map((element)=>{
//          return  <div className='col-md-4'>
//         <NewsItem title={element.title?element.title.slice(0,40):""} 
//         description={element.description?element.description.slice(0,86):""} imageUrl={element.urlToImage}/>
//         </div>
//       })}
    
//     </div>
//     <div className='container d-flex justify-content-between'>
//       <button disabled={this.state.page <=1 } type='button' className='btn btn-dark' onClick={this.handlePrevious}>  &larr; Previous</button>
//       <button type='button' className='btn btn-dark' onClick={this.handleNext}>  Next &rarr; </button>
//     </div>
    
// </div>
//     )
//   }
// }

// export default GoodNews