import React from 'react';
import { Container } from 'reactstrap';

const Layout = (props) => {
    return <> 
        <header>
            <div className=".App-header">
                <div className="item">
                    <a href="/"><img src="./dojo.svg" width={150} height={50} /></a>
                </div>
                <div className="item">🚀 Sample app</div>
            </div>
        </header>
        
        <div className="container">
            {props.children}
        </div>
  </>
};

export default Layout;