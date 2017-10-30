import React, { Component } from 'react';
import router from './router';
// import MetaTags from 'react-meta-tags';

import './normalize.css';
import './css/App.css';

class App extends Component {
  render() {

    return (
      <div>
        
       
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

/* web semantics 
custom web semantics are using custom html tags, best practice is to use specific names that wont be incorporated into html later on to break your code.

semantic is to use proper html tags to show the meaning of the page, and to distinguish between different types of data.

the goal and purpose is to make it easier for coders and web crawlers to distinguish between different types of data.

best practices would be to use proper html tags when they more specifically describe the type of content that will be displayed.
*/