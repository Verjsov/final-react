import { InfoPage } from './pages/InfoPage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/info`,
    path: '/info',
    component: InfoPage,
    exact: true,
  },
];
