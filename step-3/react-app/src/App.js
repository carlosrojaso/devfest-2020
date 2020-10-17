import React from 'react';
import 'simple-error-component';

function App() {
  return (
    <div className="App">
      <error-component>Default Message</error-component>
      <error-component kind="warning">Warning Message</error-component>
      <error-component kind="error">Error Message</error-component>
    </div>
  );
}

export default App;
