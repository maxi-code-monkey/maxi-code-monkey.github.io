import React, { Suspense } from "react";

import "./App.css";
import { withScopedCss } from './hoc/withScopedCss';
import AppContext from "./context/AppContext";

import ErrorBoundary from "./components/ErrorBoundary";
import CustomAppBar from "./components/AppBar";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop"

import Main from "./modules/Main";

const App = () => {
  return (
    <AppContext>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <CustomAppBar />
          <Main />
          <ScrollToTop />
        </Suspense>
      </ErrorBoundary>
    </AppContext>
  );
};

export default withScopedCss(App);
