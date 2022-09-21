const cloak = document.getElementById("cloak");

function clicky() {
    if (document.getElementById("input").value === "" || document.getElementById("name").value === "") {
        alert("You forgot one of the fields");
    } else {
        document.title = document.getElementById("name").value;
        change_favicon(document.getElementById("input").value);
    }
}

function change_favicon(img) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');

    if (!favicon) {
        favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        var head = document.querySelector('head');
        head.appendChild(favicon);
    }


    favicon.setAttribute('type', 'image/png');
    favicon.setAttribute('href', img);
}

function googlepreset() {
    document.title = "Google";
    change_favicon('https://services.google.com/fh/files/misc/google_g_icon_download.png');
}

function zoompreset() {
    document.title = "Zoom";
    change_favicon('https://st1.zoom.us/zoom.ico');
}

function docspreset() {
    document.title = "Google Docs";
    change_favicon('https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico');
}

function sheetspreset() {
    document.title = "Google Sheets";
    change_favicon('https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico');
}

function classroompreset() {
    document.title = "Classes";
    change_favicon('https://ssl.gstatic.com/classroom/favicon.png');
}