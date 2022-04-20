
var options;

options = {
   controls: true,
   preloadWebComponents: true,
   techOrder: [ 'chromecast', 'html5' ], // You may have more Tech, such as Flash or HLS
   plugins: {
    chromecast: {},
    airPlay:{}
    }

};


videojs("preRecorded", options, function() {
  var player = this;
  player.airPlay();
  player.controlBar.addChild('QualitySelector');
  player.chromecast(); // initializes the Chromecast plugin
  
});



window.addEventListener('load', function ()

  {
        


   
   });

  
