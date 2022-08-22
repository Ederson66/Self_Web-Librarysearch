$(window).load(function () {
    // lấy btn 
    var BtnBootstrap = document.querySelector('#btn-bootstrap');
    var BtnOther = document.querySelector('#btn-other');
    var BtnSql = document.querySelector('#btn-sql');
    var Btnjavascript = document.querySelector('#btn-javascript');
    var Btnwebserver = document.querySelector('#btn-webserver');
    // lấy table
    var BootstrapTbl = document.querySelector('.bootstrap');
    var OtherTbl = document.querySelector('.other');
    var SqlTbl = document.querySelector('.sql');
    var JavascriptTbl = document.querySelector('.javascript');
    var WebserverTbl = document.querySelector('.webserver');



    // add sự kiện click
    BtnBootstrap.addEventListener('click', () => {
        if (BootstrapTbl.style.display === "block") {
            BootstrapTbl.style.display = "none";
        } else {
            BootstrapTbl.style.display = "block";
        }
    });

    BtnOther.addEventListener('click', () => {
        if (OtherTbl.style.display === "block") {
            OtherTbl.style.display = "none";
        } else {
            OtherTbl.style.display = "block";
        }
    });

    BtnSql.addEventListener('click', () => {
        if (SqlTbl.style.display === "block") {
            SqlTbl.style.display = "none";
        } else {
            SqlTbl.style.display = "block";
        }
    });

    Btnjavascript.addEventListener('click', () => {
        if (JavascriptTbl.style.display === "block") {
            JavascriptTbl.style.display = "none";
        } else {
            JavascriptTbl.style.display = "block";
        }
    });

    Btnwebserver.addEventListener('click', () => {
        if (WebserverTbl.style.display === "block") {
            WebserverTbl.style.display = "none";
        } else {
            WebserverTbl.style.display = "block";
        }
    });

});