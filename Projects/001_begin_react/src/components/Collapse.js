import React from 'react';


// const Collapse = (props) => {

//     return (
//         <div>
//             <a className="btn btn-primary w-100" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
//                 Link with href
//             </a>

//             <div className="collapse show" id={props.href}>
//                 {props.children}
//             </div>
//         </div>
//     );
// }


///////////////////////////////////////////////* *///////////////////////////////////////////////////////
/* Class ile collapse componentinin oluşturulması */
/* State Durumu ile kartların gösterilmesi. */

class Collapse extends React.Component{

    constructor(){
        super()

        this.state = {
            showContent: false
        }

        // this.showMore = this.showMore.bind(this) //bind methodu bunun yerine arrow func daha kullanışlı.
    }

    // showMore(){
    //     this.setState({showContent: true})
    // }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent})
    }

    render(){
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* {this.props.children.props.cardTitle} */}  
                    {React.Children.map(this.props.children, (children) => children.props.cardTitle)}
                </button>

                {
                    this.state.showContent ? (
                    <div className="collapse show">
                        {/* {this.props.children} */}
                        {React.Children.map(this.props.children, (children) => children)}
                    </div>
                    ): null
                }
    
                
            </div>
        );
    }
}

export default Collapse;