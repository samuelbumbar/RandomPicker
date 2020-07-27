console.log('App.js is running!');

const app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // Stops full page refresh
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
    }
  
    render();
  
    console.log('form submitted!', option);
  };
  
  const onRemoveAll = () => {
    // app.options.length = 0;
    app.options = [];
    render();
  }
  
  const showArray = () => {
    <ol>
      {app.options.forEach(option => {
        return <li>{option}</li>;
      })}
    </ol>
    render();
  }
  
  const onMakeDecision = () => {
    // if (app.options.length == 0)
    //   return;

    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
  };

  const appRoot = document.getElementById('app');

  const render = () => {
    // JSX - JavaScript XML
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  render();