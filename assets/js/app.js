$(function() {
    // Time and Date
// make new Date Object and use function to update time while on page
    function updateTime() {    
        const today = new Date();
        var displayTime = today.toLocaleTimeString();
        setInterval(dateTimeClock, 1000);
        
        function dateTimeClock() {
            upDate = new Date();
            displayTime = upDate.toLocaleTimeString();
            document.getElementById("date-time").innerHTML = today.toDateString() + "<br />" + displayTime;
        }
    }

    if ( $('.member-header').length > 0 || $('.guest-header').length > 0) {
        $('.date-time').removeClass('d-none');
        updateTime();
    }

    // trade ticker


    
    
    
});

