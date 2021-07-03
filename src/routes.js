import { routes as info } from "./features/info/routes";
import { routes as catalog } from "./features/catalog/routes";
import {routes as basket} from "./features/basket/routes";
import { routes as order } from "./features/order/routes";


export const routes = [
  ...info,
  ...catalog,
  ...order,
  ...basket
];
