import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";

export function OrderPage() {
  return (
    <div className="page">
      Order's home page
      <Example />
    </div>
  );
}

OrderPage.propTypes = {};
