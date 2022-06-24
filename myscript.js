




//api call for engineering Corses

// $.ajax({
//   method:'GET',
//   url:'https://office.campuslive365.com/api/web/courses?isFeatured=true',
//   success:function(data){
//     console.log(data);
//   data.forEach(function(element){
//     console.log(element);
//     var imgurl="https://campuslive365.com/assets/photos/default-campus-live-course.jpg";


//     $('#cardstyle').append(`<div class="col-md-4">
//     <div class="card" style="mt-2 h-100">
//       <img class="card-img-top" src="`+imgurl+`" alt="Card image cap" >
//       <div class="card-body">
//         <h5 class="card-title">`+element.name+`</h5>
//       </div>
//     </div>
//   </div>`)

//   });
//   }
// })







$(function() {
  console.log( "document loaded" );
  // $.ajax({
  //   method:'GET',
  //   url:'https://office.campuslive365.com/api/web/course-categories/',
  //   success:function(data){
  //     data.forEach(function(element){
  //       console.log(element);

  //       $('#courses').append('<div><a class="dropdown-item" href="category.html?category='+element.slug+'">'+element.name+'</a></div>')
  //     })
  //   }
  // })

//    api call for index page Our colleges
$.ajax({
  method:'GET',
  url:'https://office.campuslive365.com/api/web/colleges?isFeatured=true',
  success:function(data){
    // console.log(data);
    data.forEach(function(element){
      // console.log(element);
      var imageUrl1;
      if(element.image){
        imageUrl1="https://campus-live.s3.us-east-2.amazonaws.com/"+ element.image;
      }
      else{
        imageUrl1="https://campus-live.s3.us-east-2.amazonaws.com/college/image-20";
      }
      $('#carousel2').slick('slickAdd',` <div class="slider1" id="carousel2">
      <div class="items"><img src="`+imageUrl1+`" alt="">
       <h5 class="courseslider">`+element.name+`</h5>
     </div></div>`)

 });
  }

})


$.ajax({
  method:'GET',
  url:'https://office.campuslive365.com/api/web/courses?isFeatured=true',
  success:function(data){
   // console.log(data);
      
       
    
      data.forEach(function(element){
        //  console.log(element)
     
          var imgurl="https://campuslive365.com/assets/photos/default-campus-live-course.jpg";
         
         //  $('.cards-wrapper').append(' <div class="card"><img class="card-img-top" src="'+imgurl+'"alt="Card image cap"><div class="card-body"><h5 class="card-title" id="college_name">'+element.name+'</h5></div></div>')
       
            //   $('#carousel').append(`<div class="carousel-item active" ><img src="" alt="">
            //   <h5 class="card-title" id="college_name"></h5>
            // </div>
            // <div class="carousel-item">
            //   <img src=""`+imgurl+` alt="">
            //   <h5 class="card-title" id="college_name">`+element.name+`</h5>
            // </div>`);

            // $('#carousel1').append(`<div class="slider">
            // <div class="items"><img src="`+imgurl+`" alt="">
            //   <h5>`+element.name+`</h5>
            // </div></div>`)

            $('#carousel1').slick('slickAdd',`<div class="slider">
             <div class="items"><img src="`+imgurl+`" alt="">
               <h5 class="courseslider">`+element.name+`</h5>
             </div></div>`);

             
      });

  }
})

});