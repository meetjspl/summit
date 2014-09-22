(function () {
  var agenda = document.getElementById('agenda');
  
  agenda.addEventListener('change', function (event) {
    var target = event.target;
    var checked = agenda.querySelectorAll('input[type=checkbox]:checked');
    
    Array.prototype.forEach.call(checked, function (input) {
      if (input !== target) {
        input.checked = false;
      }
    });
  });
})();