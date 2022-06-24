
// $(function(){
//     console.log("state.js loaded");
// function getCollegedetails(){

//   $.ajax({

//       method:'GET',
//       url:'https://office.campuslive365.com/api/web/states/karnataka/',
//       success:function(state){
//           //  console.log(state);
//            $('#college-name').text("College In"+state.name);
//               state.locations.forEach(function(location){                   
//               // $('.statename').append(location.name);
//                  $('.state-list').append(' <h6 class="statename" >'+location.name+'</h6>');
//               console.log(location);
//                console.log('@@@@@@@@@@@@@@@@@@@@@@');
//                 location.colleges.forEach(function(college){
//                   console.log(college);
//                   console.log('#######');
               
//                 // $('.statename').append(location.name);
               
//                 var imgurl;
//               if(college.image){
//                   imgurl="https://campus-live.s3.us-east-2.amazonaws.com/"+college.image
                  
//               }
//               else{
//                 imgurl="https://campus-live.s3.us-east-2.amazonaws.com/college/yeldo-mar-baselios-college-190"
//             }
//             $('.state-list').append(`<div class="row" id="colleges"><diclass="col-md-2">
//             <div class="card " style="">
//               <img class="card-img-top" src="`+imgurl+`" alt="Card image cap">
//               <div class="card-body">
//                 <h5 class="card-title">`+college.name+`</h5>
//               </div>
//             </div>
//          </div></div>`)
         
//             });
//           });
//        }
 
//   });
// }


//  getCollegedetails();


  $(function(){
    console.log("state.js loaded");

    $.ajax({
      method:'GET',
      url:'https://office.campuslive365.com/api/web/states/karnataka/',
      success:function(state){
        $('#college-name').text("College In "+state.name);
       var collegelist;
      
       
       state.locations.forEach(function(location){
        console.log(location);
        location.colleges.forEach(function(college){
          var imgurl;
          if(college.image)
          
          {
            
            imgurl="https://campus-live.s3.us-east-2.amazonaws.com/"+college.image
          } 
          else{
            imgurl="https://campus-live.s3.us-east-2.amazonaws.com/college/image-51"
          }               
                   
                   

        //  collegelist += `<div class="container><div class="row"><div class="col-md-4"><div class="card-body"><h5 class="card-title" >`+ college.name +`</h5></div><div><img style="height:200px;width:300px;border-radius:5%" src=" `+imgurl+`"></div></div></div></div>`
         

       collegelist += `<div class="col-md-4">
        <div class="card mt-3" style="">
        <img class="card-img-top" src="`+imgurl+`" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">`+college.name+`</h5>
            </div>
      </div>
        </div>`
         
     


      
        })
        
      //   const markup = `<div>
      //   <h5>`+ location.name +`</h5>
      //   <div>` + collegelist  + `</div>
      // </div>`

     
      const markup =` <div class="container"><div class="row">
      <h5 style="color:red ;text-align:left">`+location.name+`</h5></div></div>
      <div class="container"><div class="row">
         `+collegelist+`
        </div></div>` 
        $('#location').append(markup);
      
       });
      }
    })
  });




