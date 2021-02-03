//this is a javascript file


//this search and click renders bootstrap card with basic details of the anime requested//
 //-----------------------------------------------------------------------------------------------------------------//
$('#searchButton').click(function(e){
    e.preventDefault();
    var searchInput = $('#searchBar').val()    
     $.ajax({
         type:'GET',
         url:'https://api.jikan.moe/v3/search/anime?q='+searchInput,
         success:function(data){
             console.log(data);
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
                           <br>
                           <br>
                           <div class="card-content">
                               <p class="card-text">Amount of episodes:${value.episodes}</p>
                               <p class="card-text">Score:${value.score}</p>
                               
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

 //-----------------------------------------------------------------------------------------------------------------//






    
  

              
             

         
         
         
        
           
    