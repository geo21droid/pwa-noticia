import {createGlobalStyle} from 'styled-components'
import CovidImg from '../..asserts/images/covid.jpg'

const globalStyles = createGlobalStyle
 *{
     outline: 'none',
     box-sizing: border-box,
 }

 body{
     line-height: normal;
 }

 html, body{
     width: 100%;
     min-height: 100%;
     display: flex;
     padding: 0
     margin: 0

 }

 #root {
     background-color: url(${CovidImg});
     height: 100%;
     width: 100%;
     background-size: cover;
     background-position: center center;

 }

 export default globalStyles

