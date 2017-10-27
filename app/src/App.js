import React, { Component } from 'react';
import router from './router';
// import MetaTags from 'react-meta-tags';

import './normalize.css';
import './css/App.css';

class App extends Component {
  render() {

    return (
      <div>
        {/* <MetaTags> */}
        <head>
          <title>Mastery Challenge</title>
          <meta id="meta-description" name="description" content="This is the assessment project for DevMtn Mastery" />
          <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
          <meta name="author" content="Blake Adams"/>
          <meta name="mediatype" content="desktop" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </head>
              {/* </MetaTags> */}
              {router}


      </div>
            );
  }
}

export default App;
/*
doctypes change how a browser reads a file with the doctype declaration by indicating what version of HTML it is
examples are html strict, html transitional, and the main always used for html 5 of !DOCTYPE html
*/