//this is a javascript file

$('#searchButton').click(function(e){
    e.preventDefault();
    var searchInput = $('#searchBar').val();
     $.ajax({
         type:'GET',
         url:'https://api.jikan.moe/v3/search/anime?q='+searchInput,
         success:function(data){
             var superSaiyan = data.results.slice(0,9);
             console.log(superSaiyan);
             let output = '';
             $.each(superSaiyan,function(index,value){
               console.log(value);
                   
                     output += 
                       `
                   <div class="container col-4">
                       <div class="row">
                           <div class="card-wrapper">
                           <div class="card">
                           <div class="card-img-wrapper">
                               <img class="card-img-top" src='${value.image_url}' alt="Card image cap">
                       </div>
                       <div class="card-body">
                           <h5 class="card-title">${value.title}</h5>
                           <div class="card-content">
                               <p class="card-text">Amount of episodes:${value.episodes}</p>
                               <p class="card-text">Score:${value.score}</p>
                               <p class="card-text">Synopsis:${value.synopsis}</p>
                               <button type='button' onclick='goToReview()'class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">See Reviews</button>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
                   `;
                 
                
                });
                $('#animeResults').html(output);
                $('#searchBar').val('');
                
            }   
            
        });

    });

    function goToReview(){
        $.ajax({
            type:'GET',
            url:'https://api.jikan.moe/v3/anime/20583/reviews',
            success:function(data){  
                console.log(data.reviews);
                let naruto = data.reviews.slice(0,1);
                popUpBody = '';
                $.each(naruto,function(index,value){
                    console.log(value.content);
                   
                   
            
                   $('.modal-body').html(value.content);
                })
                 
            }
            
        })
       
    }




    
  

              
             

         
         
         
        
           
    