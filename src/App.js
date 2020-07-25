import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ErrorBoundary as ErrBoundary } from "react-error-boundary";
import MainHeader from "./components/MainHeader/MainHeader";
import ErrorWraaper from "./components/common/ErrorWraaper";
import MainPage from "./components/MainPage/MainPage";
import ECommercePage from "./components/ECommercePage/ECommercePage";
import InternalPageLayout from "./components/InternalPageLayout/InternalPageLayout";
import MainFooter from "./components/MainFooter/MainFooter";
import NotFound from "./components/common/NotFound";
const defErrMsg = "is not responding. Please try refreshing the page";
const menuErrMsg = `Menu ${defErrMsg}`;
const footErrMsg = `Footer ${defErrMsg}`;

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrBoundary
          fallbackRender={() => <ErrorWraaper message={menuErrMsg} />}
        >
          <MainHeader />
          {/* <MobileMenu ref={textRef} /> */}
        </ErrBoundary>
        <Switch>
          <ErrBoundary fallbackRender={() => <ErrorWraaper type="main" />}>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/ecommerce" component={ECommercePage} />
            <Route
              exact
              path="/:pageName"
              component={(props) => (
                <InternalPageLayout
                  {...props}
                  pageName={props.match.params.pageName}
                />
              )}
            />
          </ErrBoundary>
        </Switch>
        <ErrBoundary
          fallbackRender={() => <ErrorWraaper message={footErrMsg} />}
        >
          <MainFooter />
        </ErrBoundary>
      </Provider>
    </div>
  );
}
export default App;
