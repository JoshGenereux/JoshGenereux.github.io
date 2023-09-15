import javascript from '../assets/javascript.png';
import node from '../assets/node.png';

const techName = ['Javascript', 'Node.js'];
const tech = [javascript, node];

const techObj = techName.map((el, i) => {
  return [el, tech[i]];
})


export default techObj;