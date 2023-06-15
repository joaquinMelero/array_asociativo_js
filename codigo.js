//En JS los arrays asociativos so nobjetos literales 

//array asociativo
let arrayAss=[];

let id;
let status;

console.log($('#divlist').val());

//guardo todo slos elementos li del div
let element = $('#divList').find('.li');

//recorro los elementos
element.each(function(){
   
     id= $('#'+this).attr('data-id');
     status= $('#'+this).attr('data-status');
    
    arrayAss.push({"id":id, "status": status});
    
});


console.log("id: "+id ,"status: " +status);


