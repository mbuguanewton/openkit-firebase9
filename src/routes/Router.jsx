import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import useEventListener from "../hooks/useEventListner";
import ScrollTop from "../components/common/ScrollTop";
// import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import NotFound from "../pages/404";

function AppRouter() {
    const [loading, setLoading] = useState(true);

    const handleLoader = useCallback(() => {
        setLoading(false);
    }, []);

    useEventListener("load", handleLoader);

    return (
        <Box>
            {loading ? (
                <Box>Loading ...</Box>
            ) : (
                <Router>
                    <ScrollTop />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </Router>
            )}
        </Box>
    );
}

export default AppRouter;
