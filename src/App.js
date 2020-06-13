import React from 'react';
import {Route} from 'react-router-dom';
import main from './components/main/main';

const App = () => {
    return (
        <>
            <Route component={main} path="/" exact/>
        </>
    );
};

export default App;