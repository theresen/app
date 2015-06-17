console.log('\'Allo \'Allo!');


// $('.btn').attr('disabled',true);
//     $('.input').keyup(function(){
//         if($(this).val().length !== 0) {
//             $('.btn').attr('disabled', false);            
//         }
//         else ($(this).val().length >= 1) {
//             $('.btn').attr('disabled',true);
//         }
//     });


// document.addEventListener('DOMContentLoaded', function(event) {
//   var form= document.querySelector('form');
//   var input= document.querySelector('input');

//   input.onkeypress= function(e) {
//     if(e.which === 13 && !e.shiftKey) {
//       this.parentNode.onsubmit(e);
//     }
//   };

//   form.onsubmit= function(e) {
//     var input = form.querySelector('input');
//     var response = input.value;
//     var node = document.createElement('div');
//     node.innerHTML= response.replace(/\n/g,'<br>') + '<hr>';
//     form.appendChild(node);
//     input.value= '';
//     e.preventDefault();
//   };
// });

