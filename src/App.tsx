import React, { Suspense } from "react";

import { withScopedCss } from './hoc/withScopedCss';
import AppContext from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from "./components/Spinner";
import TwoColumns from "./components/TwoColumns";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const App = () => {
  return (
    <AppContext>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <TwoColumns />
          <ScrollToTop />
        </Suspense>
      </ErrorBoundary>
    </AppContext>
  );
};

export default withScopedCss(App);
