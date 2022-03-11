import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Toggle } from './Toggle.jsx'
import { useDarkMode } from './styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles.jsx'
import  { ThemeProvider } from 'styled-components'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import BlogOne from './BlogOne';

function App() {
  const [theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;
    return (
        <>
          < ThemeProvider theme={themeMode}> 
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <Navbar />
          </ThemeProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/project" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/virtual-environment" component={BlogOne} />
              <Redirect to="/" />
            </Switch>
            <Footer />
        </>  
    )
    }
export default App;