$(document).ready(function() {
    $('#highlight-important').click(function(event) {
        event.preventDefault();
        $('.important').addClass('highlighted');
    });
});