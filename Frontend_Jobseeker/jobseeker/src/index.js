import ReactDom from 'react-dom';
import App from './Complete_Responsive_website/Hooks'
import "./../src/Complete_Responsive_website/index.css"
import { BrowserRouter } from 'react-router-dom';
ReactDom.render(
<BrowserRouter>
     <App/>
</BrowserRouter>
, document.getElementById("root"));




