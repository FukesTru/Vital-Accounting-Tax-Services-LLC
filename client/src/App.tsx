import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TaxStrategy from "./pages/TaxStrategy";
import TaxServices from "./pages/TaxServices";
import About from "./pages/About";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Randolph from "./pages/areas/Randolph";
import Morristown from "./pages/areas/Morristown";
import Caldwell from "./pages/areas/Caldwell";
import Montville from "./pages/areas/Montville";
import Paramus from "./pages/areas/Paramus";
import BergenCounty from "./pages/areas/BergenCounty";
import MorrisCounty from "./pages/areas/MorrisCounty";
import TaxPlanning from "./pages/services/TaxPlanning";
import HighIncomeTaxSupport from "./pages/services/HighIncomeTaxSupport";
import TaxResolution from "./pages/services/TaxResolution";
import BusinessTaxSupport from "./pages/services/BusinessTaxSupport";
import IndividualTaxServices from "./pages/services/IndividualTaxServices";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Tax Services — consolidated page */}
      <Route path="/tax-services" component={TaxServices} />
      {/* Legacy service page routes — kept for SEO/direct links */}
      <Route path="/services/high-income-tax-strategy" component={TaxStrategy} />
      <Route path="/tax-strategy" component={TaxStrategy} />
      <Route path="/services/tax-planning" component={TaxPlanning} />
      <Route path="/services/high-income-tax-support" component={HighIncomeTaxSupport} />
      <Route path="/services/tax-resolution" component={TaxResolution} />
      <Route path="/services/business-tax-support" component={BusinessTaxSupport} />
      <Route path="/services/individual-tax-services" component={IndividualTaxServices} />
      {/* About & Contact */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* Service Areas */}
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-areas/randolph-nj" component={Randolph} />
      <Route path="/service-areas/morristown-nj" component={Morristown} />
      <Route path="/service-areas/caldwell-nj" component={Caldwell} />
      <Route path="/service-areas/montville-nj" component={Montville} />
      <Route path="/service-areas/paramus-nj" component={Paramus} />
      <Route path="/service-areas/bergen-county-nj" component={BergenCounty} />
      <Route path="/service-areas/morris-county-nj" component={MorrisCounty} />
      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
