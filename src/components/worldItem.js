import React, { Component } from 'react'

export class worldItem extends Component {
  render() {
    let {title ,description,imageUrl,pageSize,author,date,source,setProgress} = this.props;
    return (
      <div className='container mx-3 my-3'>
      <div className="card" style={{}}>
      <img src={!imageUrl?"https://www.handelsblatt.com/images/economy-class-in-der-boeing-787-9/28818760/2-format2003.jpg":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description} <span class="badge text-bg-success">{source}</span></p>
      <p className="card-text"><small className="text-muted">By {author}on {new Date(date).toGMTString()}</small></p>

      <a href="/" className="btn btn-primary">Read More</a>
     </div>
</div>
      </div>
    )
  }
}

export default worldItem