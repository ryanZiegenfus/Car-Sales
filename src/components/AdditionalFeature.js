import React from 'react';
import { addItem } from '../action'
import { connect } from 'react-redux';

const AdditionalFeature = props => { 
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addItem})(AdditionalFeature);
