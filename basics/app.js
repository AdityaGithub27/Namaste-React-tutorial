// plain JS code
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello world from javascript"
const root = document.getElementById("root");
root.appendChild(heading);
*/



// const heading = React.createElement('h1', {id:"heading", xyz:'all this are attributes', }, 'Hello World from Namste React');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("React.createElement is an object", heading);
// root.render(heading);


{/* <div id='parent'>
    <div id='child'>
        <h1>I'm tag H1</h1>
        <h2>I'm tag H2</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",{id:'parent'},
    React.createElement("div",{id:'child'},
    [
        React.createElement('h1',{},'this h1 frm child'),
    React.createElement('h2',{},'this h2 frm child')
])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("React.createElement is an object", parent);
root.render(parent);