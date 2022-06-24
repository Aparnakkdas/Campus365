$(function(){
    $.ajax({
        method:'GET',
        url:'https://office.campuslive365.com/api/web/course-categories/',
        success:function(data){
          data.forEach(function(element){
           // console.log(element);
    
            $('#courses').append('<div><a class="dropdown-item" href="category.html?category='+element.slug+'">'+element.name+'</a></div>')
          })
        }
      })



    $.ajax({
        method:'GET',
        url:'https://office.campuslive365.com/api/web/states/',
        success:function(data){
         // console.log(data);
            data.forEach(function(element){
              // console.log(element);

                $('#state').append(`<div><a class="dropdown-item" href="state.html?state=`+element.slug+`">`+element.name+`</a></div>`)
            })
        }
    })


 })
   