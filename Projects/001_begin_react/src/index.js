import React from 'react';
import { createRoot } from 'react-dom/client';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='card-group w-100'>
                    <div className='col px-2'>
                        <Collapse href="collapseExample1">
                            <Card 
                                cardTitle="KART 1"
                                cardImg="https://picsum.photos/id/237/900/500"
                            />
                        </Collapse>
                    </div>

                    <div className='col px-2'>
                        <Collapse href="collapseExample2">
                            <Card 
                                cardTitle="KART 2" 
                                cardImg="https://picsum.photos/id/144/900/500"
                            />
                        </Collapse>
                    </div>

                    <div className='col px-2'>
                        <Collapse href="collapseExample3">
                            <Card 
                                cardTitle="KART 3" 
                                cardImg="https://picsum.photos/id/200/900/500"
                            />
                        </Collapse>
                    </div>

                </div>
            </div>
        </div> 
    );
}



//React 18 version for client render
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);



//React 17 version for client render
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );