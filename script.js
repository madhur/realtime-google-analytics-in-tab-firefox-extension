
document.addEventListener("DOMContentLoaded", function(event) { 
     setInterval(function () {
        var elem = document.getElementById('ID-overviewCounterValue');
        if (elem) {
            const count = elem.textContent;
            if (count) {
                top.document.title = `${count} - Google Analytics`;
            }
            else {
                top.document.title = 'Google Analytics';
            }
        }
    }, 1000);
});


