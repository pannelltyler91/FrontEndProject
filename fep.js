//this is a javascript file


// renders anime pulled from Jikan api into a specific card
function renderAnime (){
    var searchInput = $('#searchBar').val();
   $.ajax({
        type:'GET',
        url:'https://api.jikan.moe/v3/search/anime?q='+searchInput,
        success:function(data){
            var superSaiyan = data.results;
            console.log('success',superSaiyan);
            console.log(searchInput);
            let output = '';
            superSaiyan.each(function (anime){
                output = 
                `
                
                
                
                
                
                
                `
            })
            
        }
        
   });

}

//------------------------------------------------------------------------------------------------------------------




$('#searchButton').click(function(e){
    e.preventDefault();
    var searchInput = $('#searchBar').val();
   renderAnime();

});




$('#goToReviews').click(function(e){

    $.ajax({
        type:'GET',
        url:'https://api.jikan.moe/v3/anime/269/reviews',
        success:function(data){
            console.log('success',data.reviews[0]);
        }
    
    });

});



