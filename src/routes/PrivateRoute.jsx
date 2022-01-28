import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookie from "js-cookie";

function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = !!cookie.get("tokenID");
    return (
        <Route
            {...rest}
            component={(componentProps) =>
                isAuthenticated ? (
                    <div>
                        <Component {...componentProps} />
                    </div>
                ) : (
                    <Redirect to={{ pathname: "/" }} />
                )
            }
        />
    );
}

export default PrivateRoute;
