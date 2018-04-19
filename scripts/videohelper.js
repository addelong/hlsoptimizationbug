define(['hls.min'], function(Hls){
   return {
       createHlsVideo: function(video){
           var hls = new Hls();
           hls.loadSource("http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8");
           hls.attachMedia(video);
       }
   }
});