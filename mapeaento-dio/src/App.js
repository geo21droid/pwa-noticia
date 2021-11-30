import React from 'React';
import {StylesProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core/'
import globalStyles from './commons/styles/global-style';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <globalStyles />
      <div>
        tete
      </div>

    </StylesProvider>
    

    
  );
}

export default App;
