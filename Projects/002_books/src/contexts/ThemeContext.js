import React from 'react';

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{
    state={
        isDarkTheme: true,
        dark: {bg: '#222529', bbg:'#ffffff', txt: '#D65F5f', hover: 'rgba(231, 76, 60, 0.8)'}, 
        light: {bg: '#F8F9FA', bbg:'#353836', txt: '#0dff00', hover: 'rgba(140, 255, 0, 0.9)'}
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


export default ThemeContextProvider;