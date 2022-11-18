import React, { Component } from "react";
import Axios from "axios";

import ButtonPrimary from "./button";
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


export default class PdfList extends Component {
  state = {downloading : false}
  downloadPdf = async (form) => {
    this.setState({downloading :true})
    try{
      const pdf = await Axios({
      url: "https://remote-forms-api.onrender.com/download-pdf",
      method: "POST",
      data: form,
      responseType: 'arraybuffer'
    }); 
    console.log(pdf.data)
        const url = window.URL.createObjectURL(new Blob([pdf.data]
          ,{type: "application/pdf"}))
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${form.name}${form.regNo}.pdf`);
        document.body.appendChild(link);
        link.click();
      


    }catch(e){
    
    }
    
    this.setState({downloading :false})
  };
  

  render() {
     
    return (
      <div>
      
      <Card sx={{ maxWidth: 1200 }}>
      <CardActionArea disableRipple>
        <CardContent >
          <span style={{fontWeight : "bold"}}>NAME :</span><span style={{fontSize: "18px"}}> {this.props.form.name} </span>
        <span style={{fontWeight : "bold"}}>REG NO. :</span><span style={{fontSize: "18px"}}> {this.props.form.regNo} </span>
        <span style={{marginLeft : "5px"}}>
          <ButtonPrimary
          disabled={this.state.downloading}
          style ={{position : "relative", left: "0px"}}
            onClick={() => {
              this.downloadPdf(this.props.form);
            }}
            text="Download"
            color="Primary"
            startIcon={<SaveIcon></SaveIcon>}
            size="small"
          >
          </ButtonPrimary>
        </span>
        <span style={{marginLeft : "5px",position : "relative", left: "0px"}}>
          <ButtonPrimary
          size="small"
          startIcon={<DeleteIcon></DeleteIcon>}
          text="Delete"
          color="secondary"
         
          disabled={this.props.deleting}
           onClick={() => this.props.deletepdf(this.props.form.regNo)}>
              </ButtonPrimary>
        </span>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   
    );
  }
}
