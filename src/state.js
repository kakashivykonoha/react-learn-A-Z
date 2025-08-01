/*  import { sculptureList } from './data.js';

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
 */ 
/* import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
 */
/*
import React from 'react';

class Component extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}

export default Component;

   */

import React from 'react';

/* class Component extends React.Component {
        state = {
          count: 0,
        };
                constructor(props) {
          super(props);
          this.click = this.click.bind(this);
        }



        click() {
          this.setState((state) => ({ state, ...{ count: state.count + 1 } }));
          console.log(this.state);
        }

        render() {
          return (
            <div>
              <button onClick={this.click}>click!</button>
              {this.state.count}
              {this.props.message}
            </div>
          );
        }
      }

 */
class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}

export default App ; 
