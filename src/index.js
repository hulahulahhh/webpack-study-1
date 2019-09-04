
import './style/search.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'hello webpack world new';
    element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());


