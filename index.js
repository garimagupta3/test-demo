import React from 'react';
import { render } from 'react-dom';

import App from '@Src';

const rootEl = document.getElementById('root');

const renderComponent = Component => {
  render(<Component />, rootEl);
};

renderComponent(App);

function Method1(a: string, b: number) {
  switch (a) {
    case 0:
      switch (b) {  // nested switch voilation
        // ...
          console.log(b)
      }
    case 1:
      // ...
      console.log(b)
    default:
      // ...
  }
}
