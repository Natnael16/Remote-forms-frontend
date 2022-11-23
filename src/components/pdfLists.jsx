import React, { Component } from 'react'
import PdfList from './pdfList'

export default class PdfLists extends Component {


  render() {
    return (
        <div>
          
            {this.props.dataList.map((obj) => (
          <PdfList
            form={obj}
            deleting={this.props.deleting}
            deletepdf={this.props.deletepdf}
          />
        ))}
      
        </div>
    )
   
  }
}
