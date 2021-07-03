import { CatalogPage } from './pages/CatalogPage';
import { featureConf } from "./config";
import {ProductPage} from "./pages/ProductPage";

export const routes = [
  {
    key: `${featureConf}/catalog`,
    path: '/',
    component: CatalogPage,
    exact: true,
  },
  {
    key: `${featureConf}/info/product`,
    path: '/info/product/:id',
    component: ProductPage,
    exact: true,
  },
];
