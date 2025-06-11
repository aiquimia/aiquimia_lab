import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from "pages/homepage-ai-powered-scientific-platform";
import PricingFlexibleScientificAccess from "pages/pricing-flexible-scientific-access";
import AboutScientificInnovationStory from "pages/about-scientific-innovation-story";
import PredictionStudio from "pages/prediction-studio-core-analysis-workspace";
import SignInAuthenticationGateway from "pages/sign-in-authentication-gateway";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage-ai-powered-scientific-platform" element={<Homepage />} />
          <Route path="/pricing-flexible-scientific-access" element={<PricingFlexibleScientificAccess />} />
          <Route path="/about-scientific-innovation-story" element={<AboutScientificInnovationStory />} />
          <Route path="/prediction-studio-core-analysis-workspace" element={<PredictionStudio />} />
          <Route path="/sign-in-authentication-gateway" element={<SignInAuthenticationGateway />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;