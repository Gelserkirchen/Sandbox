import Post from './Post'
import json from './assets/json.json'
import KURSLogo from './assets/KURS2.png'
import './styles/styles.css'

const post = new Post('Webpack post title', KURSLogo);
console.log('Post to string', post.toString());

console.log('JSON:', json);
