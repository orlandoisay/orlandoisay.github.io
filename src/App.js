import React from 'react';

import Items from './Items';

import { i18nBuilder, dictionary } from './assets/i18n';

import itsurLogo from './assets/images/itsur-logo.jpg';

import cppLogo from './assets/images/cpp-logo.png';
import phpLogo from './assets/images/php-logo.png';
import javaLogo from './assets/images/java-logo.png';
import csharpLogo from './assets/images/csharp-logo.png';


const i18n = new i18nBuilder(dictionary);

const App = () => {
  const lang = 'en';

  return (
    <div class="wrapper">
      <div class="sidebar">
        <div class="me">
          <div class="photo"></div>
          <h2>Mendoza G.</h2>
          <h1>Orlando I.</h1>
          <div class="social">
            <a target="_blank" href="https://github.com/orlandoisay"><i class="fab fa-github"></i></a>
            <a target="_blank" href="mailto:me@orlandoisay.com"><i class="far fa-envelope"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/OrlandoIsay"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="breaker"></div>
        <nav class="menu">
          <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills + Technologies</a></li>
            <li><a href="#experience">Professional experience</a></li>
            <li><a href="#projects">Personal projects</a></li>
            <li><a href="#awards">Awards + Other stuff</a></li>
          </ul>
        </nav>
        <div class="mobile-breaker"></div>
      </div>
      <div class="content">
        <div class="languages">
          <div class="menu-languages">
            <ul>
              <li><button id="btn-lang-en"><i class="fas fa-globe-americas"></i> EN</button></li>
              <li><button id="btn-lang-es"><i class="fas fa-globe-americas"></i> ES</button></li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div class="main-block" id="education">
            <h1>Education</h1>
            <Items 
              elements={[
                {
                  title: 'Instituto Tecnológico Superior del Sur de Guanajuato',
                  subtitle: 'Computer Systems Engineering',
                  description: 'Expected Graduation June/2020. (GPA 97.8/100)',
                  image: itsurLogo,
                  type: 'item-big',
                },
              ]}
            />
          </div>
          <div id="skills">

            <h1>Skills + Technologies</h1>
            <Items 
              title={i18n.getString(lang, 'ProgLang_Title')}
              elements={[
                {
                  title: 'C++',
                  description: i18n.getString(lang, 'ProgLang_Years', { years: 5 }),
                  image: cppLogo,
                  type: 'item-small'
                }, {
                  title: 'PHP',
                  description: i18n.getString(lang, 'ProgLang_Years', { years: 3 }),
                  image: phpLogo,
                  type: 'item-small',
                }, {
                  title: 'Java',
                  description: i18n.getString(lang, 'ProgLang_Years', { years: 3 }),
                  image: javaLogo,
                  type: 'item-small',
                }, {
                  title: 'C#',
                  description: i18n.getString(lang, 'ProgLang_Years', { years: 3 }),
                  image: csharpLogo,
                  type: 'item-small',
                }
              ]}
            />
          </div>
          <div id="experience">
            <h1>Professional experience</h1>

            <div class="svg-container"> 
              <svg width="79.39mm" height="113.33mm" version="1.1" viewBox="0 0 85 110" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-27.5 -93)" >
                  <polygon class="svg-stroke" transform="matrix(1.4756 0 0 1.4756 30.723 92.603)" points="53.8 37.3 19.7 25.3 26.4 42 37 46.9 15.4 59.4 15.4 5.4 0 0 0 68.2 15.4 76.8 53.8 54.7"/>
                </g>
              </svg>
            </div>
          </div>
          <div id="projects">
            <h1>Personal projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fuga et maiores, distinctio itaque dicta voluptatum deleniti error necessitatibus sapiente laudantium, aut nulla officiis accusamus modi maxime molestias pariatur ratione!</p>
          </div>
          <div id="awards">
            <h1>Awards + Other stuff</h1>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App;
