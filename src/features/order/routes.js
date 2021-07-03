import { OrderPage } from './pages/OrderPage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/order`,
    path: '/order',
    component: OrderPage,
    exact: true,
  },
];
