import React from 'react';

const withClass = (WrappedComponent, className) => {
    return (props) => (
    <div className={className}>
        <WrappedComponent {...props}/> {/*To get the "unknown" props from the App.js and Person.js*/}
    </div>
)};

export default withClass;