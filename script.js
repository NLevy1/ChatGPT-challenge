// script.js

// Add your JavaScript code here, such as event listeners or dynamic content generation

// Example: Display an alert when the page loads
window.addEventListener('DOMContentLoaded', function() {
  alert('Welcome to Flibbertigibbet\'s Chronicles!');
});

// Example: Change the text color when hovering over an element
var element = document.getElementById('hover-element');
element.addEventListener('mouseenter', function() {
  element.style.color = 'red';
});
element.addEventListener('mouseleave', function() {
  element.style.color = 'black';
});

// Example: Toggle a hidden element
var toggleButton = document.getElementById('toggle-button');
var hiddenElement = document.getElementById('hidden-element');
toggleButton.addEventListener('click', function() {
  hiddenElement.classList.toggle('hidden');
});