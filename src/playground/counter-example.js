// const someId = 'myidhere';
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('minusOne', count);
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset', count);
};

// console.log(templateTwo);

const appRoot = document.getElementById('app');

// React runs a DOM algorithm in JS code that calculates the minimal number of modifications needed to get from the current view to the new one, so it compares the current view with the new view and then applies the modifications to the current view (you can see this on Google Chrome -> Developer Tools -> Elements, it applies comments above the line of each command)
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      {/* <button id={someId} className="button">+1</button> */}
      {/* <button onClick={() => count++}>+1</button> */}
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();