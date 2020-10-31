import Post from './Post'
import json from './assets/json.json'
import KURSLogo from './assets/KURS2.png'
import './styles/styles.css'
import * as $ from 'jquery'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import '@babel/polyfill';
import React from 'react'
import {render} from 'react-dom'


const post = new Post('Webpack post title', KURSLogo);
$('pre').html(post.toString());

const App = () => (
<div className="container">
    <h1>Webpack course</h1>
    <hr/>
        <div className="logo"/>
    <hr/>
        <pre/>
    <div className="box"><h2>less</h2></div>
    <div className="card"><h2>SCSS</h2></div>
</div>
)

render(<App />, document.getElementById('app'))

console.log('JSON:', json);
