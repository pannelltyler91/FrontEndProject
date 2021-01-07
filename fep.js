//this is a javascript file

var searchInput = $('#searchBar').val();


$('#searchButton').click(function(e){
    e.preventDefault();
   $.ajax({
        type:'GET',
        url:'https://api.jikan.moe/v3/search/anime?q=Haikyu',
        success:function(data){
            console.log('success',data.results[0]);
        }

   });

});



$('#goToReviews').click(function(e){

    $.ajax({
        type:'GET',
        url:'https://api.jikan.moe/v3/anime/20583/reviews',
        success:function(data){
            console.log('success',data.reviews[0]);
        }
    
    });

});

   

