import Post from './Post'
import json from './assets/json.json'
import KURSLogo from './assets/KURS2.png'
import './styles/styles.css'
import * as $ from 'jquery'

const post = new Post('Webpack post title', KURSLogo);
$('pre').html(post.toString());

console.log('JSON:', json);
