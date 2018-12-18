
import React from 'react';
import { Document, Page } from 'react-pdf';
import file from './file.pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};


const API = 'https://db-pdf-api.herokuapp.com/pdf64';


var request = new Request(API);

class PdfContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pdfString: "",
      numPages: null,
      pageNumber: 1,
    };
  }

 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={this.state.pdfString}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }


  componentWillMount() {
    // fetch(API)
    //   .then(response => response.blob())
    //   .then(data => this.setState({ pdfString: data } , console.log(data)));

  //   fetch(API)
  // .then(function(response) {
  //   console.log(response.blob());
  // })
  // ;

var options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
};

fetch(API).then( response => response.text()).then(data => this.setState({pdfString : data}))
  
// fetch(request, options).then((response) => {
//   response.arrayBuffer().then((buffer) => {
//     var base64Flag = 'data:application/pdf;base64,';
//     var imageStr = arrayBufferToBase64(buffer);



//     this.setState(  {

// pdfString :''
//     } , console.log(this.state))
//   });
// });
  }

}

export default PdfContainer;