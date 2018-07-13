import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component{
        render(){
            return (
                <div className={className}>
                <WrappedComponent 
                    ref={this.props.forwardedRef}
                    {...this.props}/> {/*To get the "unknown" props from the App.js and Person.js*/}
            </div>
            )
        }
    }
    
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    })
};

export default withClass;