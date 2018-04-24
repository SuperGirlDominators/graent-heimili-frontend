import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { MainRoutes } from './routes';

const routes = MainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
