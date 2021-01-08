//this is a javascript file




$('#searchButton').click(function(e){
    e.preventDefault();
    var searchInput = $('#searchBar').val();
   $.ajax({
        type:'GET',
        url:'https://api.jikan.moe/v3/search/anime?q='+searchInput,
        success:function(data){
            console.log('success',data.results[0]);
            console.log(searchInput);
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

   

