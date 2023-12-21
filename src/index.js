import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let heading='hello yes world'
let item1="item1"
let item2="item2"
let item3="item3"
let curdate=new Date().toLocaleDateString();
let curdatee=new Date().toLocaleTimeString();
let firstinlinestyle={
    backgroundColor:'blue',
    fontSize:'22px',
    padding:'50px'

}
ReactDOM.render(



<>
<h1>{heading}</h1>
<p className='para'>hello the time is {curdate}</p>
<ol>
    <li style={firstinlinestyle}>
        {item1}
    </li>
    <li>
        {item2}
    </li>
    <li>
        {item3}
    </li>
<li>
    {curdatee}
</li>
   
</ol>

</>

,document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

