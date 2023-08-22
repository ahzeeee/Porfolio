import React from 'react';
import Accordion from './components/Accordion';
import { accordionData } from './utils/content';

const App = () => {
  
  return (
    <>
      <h1>FAQ</h1>
      <div className="accordion border-0">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default App;
