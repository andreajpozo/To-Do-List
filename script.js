
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      var li = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      var texto = document.createElement('texto');
      texto.textContent = taskInput.value;
  
      var borrar = document.createElement('button');
      borrar.textContent = 'x';

      var espacio = document.createElement('espacio');
      espacio.textContent = ' ';
  
      li.appendChild(checkbox);
      li.appendChild(espacio);
      li.appendChild(texto);
      li.appendChild(espacio);
      li.appendChild(borrar);
  
      borrar.addEventListener('click', function() {
        li.remove();
      });
  
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          texto.style.textDecoration = 'line-through';
        } else {
            texto.style.textDecoration = 'none';
        }
      });
  
      taskList.appendChild(li);
      taskInput.value = '';
    }
  });
  
