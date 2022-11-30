import { SlideNav } from './slide.js';

const slide = new SlideNav('.wrapper', '.slide');
slide.init();
slide.addArroy('.prev', '.next');

console.log(slide);
