import './style.css';
import { renderHome } from './home.js';
import { renderPortfolio } from './portfolio.js';
import { renderEducation } from './education.js';
import { homeSvg, portfolioSvg, educationSvg } from './icons.js';

const homeTab = document.querySelector('.home-tab');
const portfolioTab = document.querySelector('.portfolio-tab');
const educationTab = document.querySelector('.education-tab');

function switchTab(tab, renderer) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-gray-200');
        item.classList.add('bg-white', 'hover:bg-gray-200');
    });

    tab.classList.remove('bg-white', 'hover:bg-gray-200');
    tab.classList.add('bg-gray-200');

    renderer();
}

function injectIcons() {
    document.getElementById('home-icon').innerHTML = homeSvg;
    document.getElementById('portfolio-icon').innerHTML = portfolioSvg;
    document.getElementById('education-icon').innerHTML = educationSvg;
}

homeTab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(homeTab, renderHome);
});

portfolioTab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(portfolioTab, renderPortfolio);
});

educationTab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(educationTab, renderEducation);
});

document.addEventListener('DOMContentLoaded', () => {
    injectIcons();
    switchTab(homeTab, renderHome);
});