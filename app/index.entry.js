import 'reset-css';
import './exterrnal-libs/layout/index.css'
import './index.entry.pcss';
import "./exterrnal-libs/breakpoints/index.css";

import cssVars from 'css-vars-ponyfill';

cssVars({
  onlyLegacy: false,
  preserveStatic: false,
  preserveVars: true,
  shadowDOM: true,
});

document.addEventListener('DOMContentLoaded', () => {

});