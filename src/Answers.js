import React from 'react';
import { Answers } from '@aws-amplify/ui-react';

const Answer1 = () => {
  return (
    <div className="webcam-content">
      <Answers
        options={[
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
        ]}
      />
    </div>
  );
};

export default Answer1;
