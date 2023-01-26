import React from 'react';


const Card = (props) => {
    return (
        <div className="card w-100">
            <img src={props.cardImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    );
}


/* Class Yapısı ile Tanımlama */

// class Card extends React.Component{
//     render(){
//         return (
//             <div className="card w-100">
//                 <img src={this.props.cardImg} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{this.props.cardTitle}</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 </div>
//                 <div className="card-footer">
//                     <small className="text-muted">Last updated 3 mins ago</small>
//                 </div>
//             </div>
//         );
//     }
// }

/* Mesela bir başlık yazılmadı onun yerine default bir değer atamak için aşağıdaki kullanılır. */
Card.defaultProps = {
    cardTitle: " eHe "
}


export default Card;