import { PATHS } from "./paths";
import LandingPage from "../pages/LandingPage/LandingPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import FeaturesPage from "../pages/FeaturesPage/FeaturesPage";
import TechnologyPage from "../pages/TechnologyPage/TechnologyPage";
import TeamsPage from "../pages/TeamsPage/TeamsPage";
import CarrierPage from "../pages/CarrierPage/CarrierPage";
import ContactPage from "../pages/ContactPage/ContactPage";

export const routes = [
  {
    path: PATHS.root,
    element: <LandingPage />,
  },
  {
    path: PATHS.about,
    element: <AboutPage />,
  },
  {
    path: PATHS.services,
    element: <ServicesPage />,
  },
  {
    path: PATHS.features,
    element: <FeaturesPage />,
  },
  {
    path: PATHS.technology,
    element: <TechnologyPage />,
  },
  {
    path: PATHS.team,
    element: <TeamsPage />,
  },
  {
    path: PATHS.carrier,
    element: <CarrierPage />,
  },
  {
    path: PATHS.contact,
    element: <ContactPage />,
  },
];
