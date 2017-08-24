import React from 'react';
import tracker from '../../rdTracker';
const withTracker = (WrappedComponent) => {

  const trackPage = (page) => {
    tracker(page);
  };

  const HOC = (props) => {
    const page = props.location.pathname;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };
  return HOC;
};

export default withTracker;
