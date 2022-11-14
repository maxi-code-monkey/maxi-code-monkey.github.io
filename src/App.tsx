import React, { Suspense } from "react";

import "./App.css";
import { withScopedCss } from './hoc/withScopedCss';
import AppContext from "./context/AppContext";

import ErrorBoundary from "./components/ErrorBoundary";
import DrawerAppBar from "./components/AppBar";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop"

import Main from "./modules/Main";

const App = () => {
  return (
    <AppContext>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <DrawerAppBar />
          <Main />
          <ScrollToTop />
        </Suspense>
      </ErrorBoundary>
    </AppContext>
  );
};

export default withScopedCss(App);
