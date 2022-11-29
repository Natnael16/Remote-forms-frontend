import React, { Component } from "react";
// import Axios from "axios";

import ButtonPrimary from "./button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
// import * as htmlToImage from "html-to-image";

export default class PdfList extends Component {
  state = { downloading: false };
  downloadPdf = async (form) => {
    this.setState({ downloading: true });
    try {
      // const pdf = await Axios({
      //   url: "https://remote-forms-api.onrender.com/download-pdf",
      //   method: "POST",
      //   data: form
      // });

      // var node = document.getElementById("rendered");
      // console.log(node);

      // htmlToImage
      //   .toPng(node)
      //   .then(function (dataUrl) {
      //     var img = new Image();
      //     img.src = dataUrl;
      //     var link = document.createElement("a");
      //     link.href = dataUrl;
      //     link.setAttribute("download", `${form.name}${form.regNo}.png`);
      //     link.click();
      //   })
      //   .catch(function (error) {
      //     console.error("oops, something wents wrong!", error);
      //   });


    } catch (e) {
      console.log(e.message);
    }

    this.setState({ downloading: false });
  };

  render() {
    var today = new Date();
    const invoiceBox = {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "bold",
      maxWidth: "1800px",
      margin: "25px",
      padding: "30px",
      border: "1px solid #eee",
      boxShadow: "0 0 10px rgba(0, 0, 0, .15)",
      fontSize: "29px",
      lineHeight: "24px",
      zoom : "0.66"
    };
    const inputs = {
      fontSize: "27px",
      paddingLeft: "35px",
      paddingBottom: "3px",
      margin: "6px 0",
      boxSizing: "border-box",
      border: "none",
      borderBottom: "2px solid black"
    };
    const imageContainer = {
      width: "1590px",
     height: "840px",
      border: "2px solid",
      margin: "15px"
    };
    const image = { 
      width: "1569px",
     height: "827px" 
    };

    return (
      <div>
        <Card sx={{ maxWidth: 1200 }}>
          <CardActionArea disableRipple>
            <CardContent>
              <span style={{ fontWeight: "bold" }}>NAME :</span>
              <span style={{ fontSize: "18px" }}> {this.props.form.name} </span>
              <span style={{ fontWeight: "bold" }}>REG NO. :</span>
              <span style={{ fontSize: "18px" }}>
                {" "}
                {this.props.form.regNo}{" "}
              </span>
              {/* <span style={{ marginLeft: "5px" }}>
                <ButtonPrimary
                  disabled={this.state.downloading}
                  style={{ position: "relative", left: "0px" }}
                  onClick={() => {
                    this.downloadPdf(this.props.form);
                  }}
                  text="Download"
                  color="Primary"
                  startIcon={<SaveIcon></SaveIcon>}
                  size="small"
                ></ButtonPrimary>
              </span> */}
              <span
                style={{ marginLeft: "5px", position: "relative", left: "0px" }}
              >
                <ButtonPrimary
                  size="small"
                  startIcon={<DeleteIcon></DeleteIcon>}
                  text="Delete"
                  color="secondary"
                  disabled={this.props.deleting}
                  onClick={() => this.props.deletepdf(this.props.form.regNo)}
                ></ButtonPrimary>
              </span>
            </CardContent>
          </CardActionArea>
        </Card>

        <body id="rendered">
          <div style={invoiceBox}>
            <section>
              <span style={{ marginLeft: "5px", marginRight: "80px" }}>
                <label for="name">NAME </label>
                <input
                  disabled
                  type="text"
                  name="name"
                  style={inputs}
                  value={this.props.form.name}
                ></input>
              </span>
              <span style={{ marginLeft: "5px", marginRight: "80px" }}>
                <label for="reg">REG NO. </label>
                <input
                  disabled
                  type="text"
                  name="reg"
                  style={inputs}
                  value={this.props.form.regNo}
                ></input>
              </span>
              <span style={{ marginLeft: "5px", marginRight: "80px" }}>
                <label for="date">DATE </label>

                <input
                  disabled
                  type="text"
                  name="date"
                  style={inputs}
                  value={`${today.getDate()}. ${
                    today.getMonth() + 1
                  }. ${today.getFullYear()}`}
                ></input>
              </span>
            </section>
            <section>
              <span style={{ marginLeft: "5px", marginRight: "20px" }}>
                <label for="dep">DEPARTMENT </label>
                <input
                  disabled
                  type="text"
                  name="dep"
                  style={inputs}
                  value={this.props.form.department}
                ></input>
              </span>
              <span style={{ marginLeft: "5px", marginRight: "40px" }}>
                <label for="phone">TELEPHONE NO. </label>
                <input
                  disabled
                  type="text"
                  name="phone"
                  style={inputs}
                  value={this.props.form.phone}
                ></input>
              </span>
              {/* <span style={{ marginLeft: "5px", marginRight: "20px" }}>
                <label for="id">ID </label>
                <input
                  disabled
                  type="text"
                  name="id"
                  style={inputs}
                  value={this.props.form.id}
                ></input>
              </span> */}
            </section>
            <section>
              <div style={imageContainer}>
                <img
                  style={image}
                  src={this.props.form.image}
                  alt="The route for the house"
                ></img>
              </div>
            </section>
          </div>
        </body>
        <br></br>
        <hr style={{zoom : "6"}} ></hr>
        <br></br>
     

      </div>
    );
  }
}
