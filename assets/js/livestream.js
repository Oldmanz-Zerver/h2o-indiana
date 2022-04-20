
var player = videojs('livestream',
 {
   errorDisplay: false,
   "liveui": true
     });
     player.src([
       {src: "https://stream.oldmanz.com/hls/h2ochurchservice.m3u8", type: 'application/x-mpegURL'},
       {src: "https://stream.oldmanz.com/dash/h2ochurchservice_src.mpd", type: 'application/dash+xml'}

     ]);

     player.play();
