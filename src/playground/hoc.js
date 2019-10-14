import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is a warning</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => (
    (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Authenticate to view this page</p>}
        </div>
    )
);

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));