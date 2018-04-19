requirejs.config({
    baseUrl: 'scripts'
});

requirejs(['videohelper'], function(videohelper){
   videohelper.createHlsVideo(document.getElementById('testvideo'));
});