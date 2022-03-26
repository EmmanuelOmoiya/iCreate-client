import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isLoggedIn = localStorage.getItem("userInfo");
    console.log("this", isLoggedIn);

    return (  
        <Route
        {...restOfProps}
        render={(props)=>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
    }
    />
    );
}
 
export default ProtectedRoute;