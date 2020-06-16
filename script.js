$('#submit-button').on('click', function() {
    $(this).preventDefault();
    let searchInput = 'kobe';
    let newsType = 'business';
    let year = 2019;
    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchInput + '&news_desk=' + newsType + '&pub_year=' + year + '&api-key=zPVX7Cit7JKW0J0YlIG17r1DN76Zw3fh';
    console.log(queryURL);
    
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response)

    })
});