$(window).load(function () {
    // lấy btn 
    var BtnBootstrap = document.querySelector('#btn-bootstrap');
    var BtnOther = document.querySelector('#btn-other');
    var BtnSql = document.querySelector('#btn-sql');
    var Btnjavascript = document.querySelector('#btn-javascript');
    var Btnwebserver = document.querySelector('#btn-webserver');
    var Btnlinkweb = document.querySelector('#btn-linkweb');
    var Btnwebtoolonline = document.querySelector('#btn-webtoolonline');
    // lấy table
    var BootstrapTbl = document.querySelector('.bootstrap');
    var OtherTbl = document.querySelector('.other');
    var SqlTbl = document.querySelector('.sql');
    var JavascriptTbl = document.querySelector('.javascript');
    var WebserverTbl = document.querySelector('.webserver');
    var Linkweb = document.querySelector('.linkweb');
    var Webtoolonline = document.querySelector('.webtoolonline');

    // Hàm ẩn tất cả các bảng
    function hideAllTables() {
        BootstrapTbl.style.display = "none";
        OtherTbl.style.display = "none";
        SqlTbl.style.display = "none";
        JavascriptTbl.style.display = "none";
        WebserverTbl.style.display = "none";
        Linkweb.style.display = "none";
        Webtoolonline.style.display = "none";
    }

    // add sự kiện click
    BtnBootstrap.addEventListener('click', () => {
        hideAllTables(); // Ẩn tất cả các bảng
        BootstrapTbl.style.display = "block"; // Mở bảng Bootstrap
    });

    BtnOther.addEventListener('click', () => {
        hideAllTables();
        OtherTbl.style.display = "block";
    });

    BtnSql.addEventListener('click', () => {
        hideAllTables();
        SqlTbl.style.display = "block";
    });

    Btnjavascript.addEventListener('click', () => {
        hideAllTables();
        JavascriptTbl.style.display = "block";
    });

    Btnwebserver.addEventListener('click', () => {
        hideAllTables();
        WebserverTbl.style.display = "block";
    });

    Btnlinkweb.addEventListener('click', () => {
        hideAllTables();
        Linkweb.style.display = "block";
    });

    Btnwebtoolonline.addEventListener('click', () => {
        hideAllTables();
        Webtoolonline.style.display = "block";
    });

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-back",
        },
    });
});
