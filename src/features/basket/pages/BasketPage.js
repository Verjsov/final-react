import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";

export function BasketPage() {
  return (
    <div className="page">
        Basket's home page
      <Example />
    </div>
  );
}

BasketPage.propTypes = {};
