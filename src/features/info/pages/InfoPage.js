import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";

export function InfoPage() {
  return (
    <div className="page">
      Info's home page
      <Example />
    </div>
  );
}

InfoPage.propTypes = {};
