import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';





//React 18 version for client render
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

//React 17 version for client render
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );