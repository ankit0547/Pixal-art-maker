// Select color input
// Select size input
var height, width, color; //declaration of variables

// When size is submitted by the user, call makeGrid()



$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val(); //getting values of heaight
    width = $('#inputWeight').val(); //getting values of width
    makeGrid(height, width); //passing height & width as parameters
});


function makeGrid(x, y) {

    // Your code goes here!

    $('tr').remove();

    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id= table' + i + '></tr>'); //adding rows to table
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>'); //adding table data to eacj rows
        }
    }

    $('td').click(function addcolor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color); // adding background color to td
        }
    });


}