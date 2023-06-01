$('body').prepend('<form>');
$('form').append('Title: <input type="text" id="title" required minlength= "5">');
$('form').append('Rating: <input type="text" id="rating" required pattern="[0-9]|10" title="Please enter a number between 0 and 10" ">');
$('form').append('<button type="submit">Submit</button>');

$('form').after('<section><b>Movies and Ratings</b></section>')
$('section').append('<table>')
$('table').append('<th>')
$('th').append('<td>Movie</td>')
$('th').append('<td>Rating</td>')

// const titleInput = document.querySelector('#title')
// const ratingInput = document.querySelector('#rating')


$('form').on('submit',function(event){
    event.preventDefault();
    let titleInput = $('#title').val()
    let ratingInput = $('#rating').val()
    console.log(titleInput, ratingInput)
    $('table').append('<tr>');
    $('tr').last().append('<td>');
    $('tr').last().append('<td>');
    $('tr').last().append('<button>X</button>');
    $('td').eq(-2).text(titleInput)
    $('td').eq(-1).text(ratingInput)
    $('#title').val('');
    $('#rating').val('');
})

$('table').on('click','button',function(){
    $(this).closest('tr').remove();
})



