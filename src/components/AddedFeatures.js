import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {console.log(`This should be re-rendering: ${props.car.features}`)}
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = ({car}) => {
  return { car }
}

export default connect(mapStateToProps, {})(AddedFeatures);
