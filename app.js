console.log('JavaScript Connected!!!')

// First watch!
function showTime() {

    var clock = document.getElementById('pst');

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var noon = 12;

    // Convert 24 hr to AM- PM
    var meridian = 'AM';
    // Set hours
    if (h >= noon) {
        meridian = 'PM';
    };
    if (h >= noon) {
        h = h - 12;
    };
    // Set Minutes
    if (m < 10) {
        m = '0' + m;
    };
    // Set Seconds
    if (s < 10) {
        s = '0' + s;
    };

    var time = h - 1 + ':' + m + ':' + s + ' ' + meridian;

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTime, 1000);
};
showTime();

//    MST Time
function showTimeMST() {

    var clock = document.getElementById('mst');

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var noon = 12;

    // Convert 24 hr to AM- PM
    var meridian = 'AM';
    // Set hours
    if (h >= noon) {
        meridian = 'PM';
    };
    if (h > noon) {
        h = h - 12;
    };
    // Set Minutes
    if (m < 10) {
        m = '0' + m;
    };
    // Set Seconds
    if (s < 10) {
        s = '0' + s;
    };

    var time = h + ':' + m + ':' + s + ' ' + meridian;

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTimeMST, 1000);
};
showTimeMST();

//    CST Time
function showTimeCST() {

    var clock = document.getElementById('cst');

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var noon = 12;

    // Convert 24 hr to AM- PM
    var meridian = 'AM';
    // Set hours
    if (h >= noon) {
        meridian = 'PM';
    };
    if (h > noon) {
        h = h - 12;
    };

    // Set Minutes
    if (m < 10) {
        m = '0' + m;
    };
    // Set Seconds
    if (s < 10) {
        s = '0' + s;
    };

    var time = h + 1 + ':' + m + ':' + s + ' ' + meridian;

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTimeCST, 1000);
};
showTimeCST();

//    EST Time
function showTimeEST() {

    var clock = document.getElementById('est');

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var noon = 12;

    // Convert 24 hr to AM- PM
    var meridian = 'AM';
    // Set hours
    if (h = noon) {
        meridian = 'PM';
    };
    if (h >= noon) {
        h = h;
    };

    // Set Minutes
    if (m < 10) {
        m = '0' + m;
    };
    // Set Seconds
    if (s < 10) {
        s = '0' + s;
    };

    var time = h + ':' + m + ':' + s + ' ' + meridian;

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTimeEST, 1000);
};
showTimeEST();

