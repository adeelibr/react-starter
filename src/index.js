import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

const App = () => {
  return (
    <div>
      <h3>Our Application Is Alive</h3>
      <p>This isn’t reality. This — is fantasy.</p>
      <p>Yes I am quoting Star Trek, I can't help it</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));
