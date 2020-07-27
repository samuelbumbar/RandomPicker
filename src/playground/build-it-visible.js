// const app = {
//     title: 'Visibility Toggle'
// }

// let showDetails = 'Show details';

// const onClickDetailsButton = () => {
//     showText.hidden = showText.hidden ? false : true;
//     showDetails = showText.hidden ? 'Show details' : 'Hide details';

//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onClickDetailsButton}>{showDetails}</button>
//             <p hidden id='showText'>Hey. These are some details you can now see!</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();


let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{'Visibility Toggle'}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
