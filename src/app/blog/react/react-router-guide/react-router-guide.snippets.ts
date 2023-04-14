export const appJsStartingCode = `import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Home page</h1>
    </div>
  );
}
export default App;`;

export const homeJsCode = `function Home() {
  return <h1> Home page</h1>;
}
export default Home;`;

export const contactJsCode = `function Contact() {
  return <h1> Contact page</h1>;
}
export default Contact;`;

export const aboutJsCode = `function About() {
  return <h1> About page</h1>;
}
export default About;`;

export const importsCode = `import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';`;

export const browserRouterUseCode = `function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      </div>
    </BrowserRouter>
  );
}
export default App;`;

export const navSampleCode = `<nav>
  <ul className='links'>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
  </ul>
</nav>`;

export const switchSampleCode = `<Switch>
  <Route exact path='/'>
    <Home />
  </Route>
  <Route path='/about'>
    <About />
  </Route>
  <Route path='/contact'>
    <Contact />
  </Route>
</Switch>`;

export const basicRenderingWholeCode = `import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import FourZeroFour from './FourZeroFour';

// This site has 4 main pages: Home, About, Contact, 404
function App() {
  return (
    <BrowserRouter>
      {/* <BrowserRouter> needs to be wrapped around app component to have
          our app routing features.
       */}
      <div className='App'>
        <nav>
          <ul className='links'>
            <li>
              {/* <Link> enable route change on clicking respective <li>.
               If use clicks on 2nd <li>, he will be routed to /about route
               */}
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/some-random-non-matchable-route'>Non matchable route</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
      */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <FourZeroFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
`;

export const appCssCode = `.App, h1 {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: cornflowerblue;
}

.links {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
`;

export const noMatchRouteCode = `<Route path="*">
  <FourZeroFour />
</Route>`;

export const noMatchLinkCode = `<Link to="/some-random-non-matchable-route">Non matchable route</Link>`;

export const contactNestedCode = `import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom';

function Contact() {
  // The 'path' lets us build <Route> paths that are relative to the parent route
  // The 'url' lets us build relative links

  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1> Contact page</h1>
      <ul>
        <li>
          <Link to={\`\${url}/linkedin\`}>LinkedIn</Link>
        </li>
        <li>
          <Link to={\`\${url}/facebook\`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={\`\${path}/:socialMediaName\`}>
          <SocialUrl />
        </Route>
      </Switch>
    </div>
  );
}`;

export const pathAndUrlImportCode = `let { path, url } = useRouteMatch();`;

export const nestedRoutesUlCode = `<ul>
  <li>
    <Link to={\`\${url}/linkedin\`\}>LinkedIn</Link>
  </li>
  <li>
    <Link to={\`\${url}/facebook\`\}>Facebook</Link>
  </li>
</ul>
`;

export const switchCode = `<Switch>
  <Route path={\`\${path}/:socialMediaName\`}>
    <SocialUrl />
  </Route>
</Switch>`;

export const socialUrlCode = `
function SocialUrl() {
  // The <Route> that rendered this component has a path of \`/contact/:socialMediaName\`.
  // The\`:socialMediaName\` portion of the URL is a placeholder that we can get from\`useParams()\`
  let { socialMediaName } = useParams();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    switch (socialMediaName) {
      case 'linkedin':
        setUrl('https://www.linkedin.com/in/abhishek-deshmukh-dev');
        break;
      case 'facebook':
        setUrl('https://www.facebook.com/abhishekdeshmukh74');
        break;
      default:
        setUrl('');
        break;
    }
  }, [socialMediaName]);

  return <h3>{url}</h3>;
}

export default Contact;`;
