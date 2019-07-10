import React from 'react';
import Item from './Item';

const Items = ({
  title,
  elements
}) => (
  <div>
    { title && <h2>{title}</h2> }
    <div class="items">
      { 
        elements && elements.map(e => (
          <Item 
            title={e.title} 
            subtitle={e.subtitle}
            description={e.description}
            image={e.image}
            type={e.type}
          />
        )) 
      }
    </div>
  </div>
);

export default Items;