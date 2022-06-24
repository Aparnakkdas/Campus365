$(function(){

  console.log("document loaded for category");



  //api call

  function viewDetails(slug){
    $.ajax({
      method:'GET',
      url:'https://office.campuslive365.com/api/web/course-categories/'+slug,
      success:function(data){
        console.log(data);
        $("#category_name").text(data.name);
        $("#category_description1").text(data.description);
        $("#category_description2").text(data.description);
        // $('#courses').text(data.name);
       

      data.courses.forEach(function(element){
        console.log(element);
        var imgurl="https://campuslive365.com/assets/photos/default-campus-live-course.jpg";
       
        
         $('#cardstyle').append(`<div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="`+imgurl+`" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">`+element.name+`</h5>
            </div>
          </div>
        </div>`)

      });
      }
    })
  }

  var query_string=window.location.search;
  // alert(query_string);

  var urlParmsArr=new URLSearchParams(query_string);
  var val=urlParmsArr.get('category');
  // alert(val);

  viewDetails(val);

  console.log(window.location.href);


 




});
 //api call for Course Categories
$.ajax({
  method:'GET',
  url:'https://office.campuslive365.com/api/web/course-categories/',
  success:function(data){
    console.log(data);
   data.forEach(function(element){
    var imgurl;
    if(element.image){
      imgurl="https://campus-live.s3.us-east-2.amazonaws.com/"+element.image;
    }
    else{
      imgurl="https://campus-live.s3.us-east-2.amazonaws.com/course-category/science-16"
    }
    $('#coursecategory').append(` <div class="col-md-2" >
    <div class="card mt-3" style="">
      <img class="card-img-top" src="`+imgurl+`" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">`+element.name+`</h5>
      </div>
    </div>
   </div>`)

   })
  }
})




