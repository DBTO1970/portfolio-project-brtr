$(function() {
    // Time and Date
// make new Date Object and use function to update time while on page
function updateTime() {    
    const today = new Date();
    var displayTime = today.toLocaleTimeString();
    var updateTimeDisplay = setInterval(dateTimeClock, 1000);
    
    function dateTimeClock() {
        var upDate = new Date();
        var displayTime = upDate.toLocaleTimeString();
        document.getElementById("date-time").innerHTML = today.toDateString() + "<br />" + displayTime;
    }
}
updateTime();


// return values for messages and trades

// let messages = '0';
// let trades = '0';


// function fakeData() {
//     for (i = 0; i < 10; i++) {
//         messages = i;
//         trades = i + 1;
//         $("#messages-waiting").html(messages);
//         $("#trades-pending").html(trades);
//     }

// }
// fakeData();
});