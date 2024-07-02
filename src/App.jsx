import React, { useState, Suspense, useRef } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { AppRoutes } from "./AppRoutes";
import Loader from "./utilites/Loader";
import "./index.css";

export default function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition component={null}>
      <CSSTransition
        nodeRef={nodeRef}
        classNames="fade"
        key={location.pathname}
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Suspense fallback={<Loader />}>
            <Routes location={location}>
              {AppRoutes.map((route) => {
                const isAuthRoute = route.isAuthRequire && !isLogged;
                const elementProps = isAuthRoute
                  ? { element: <Navigate replace to={"/login"} /> }
                  : {
                      element: (
                        <route.element
                          setIsLogged={setIsLogged}
                          setUserName={setUserName}
                          userName={userName}
                        />
                      ),
                    };
                return (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    {...elementProps}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
