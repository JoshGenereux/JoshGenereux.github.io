import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import css from '../assets/css.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';
import github from '../assets/github.png';


const techName = ['Javascript', 'Node.js', 'HTML', 'CSS', 'JAVA', 'Vue.js', 'React.js', 'Git'];
const tech = [javascript, node, html, css, java, vue, react, github];

const techObj = techName.map((el, i) => {
  return [el, tech[i]];
})


export default techObj;