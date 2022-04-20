const observer = lozad();
observer.observe();

$(document).ready(function () {
    sermonsView.init();
});


const sermonsView = (() => {
    var currentVideo = "";

    return {
        init: init,
        videoPaused: videoPaused,
        videoPlayed: videoPlayed,
    };

    function init() {
        setupEventHandlers();
    }

    function setupEventHandlers() {
        $(".videoModal").on("shown.bs.modal", function (e) {
            var video = document.getElementById(
                this.id.replace("Modal", "Video")
            );

        });

        $(".videoModal").on("hidden.bs.modal", function (e) {
            var video = document.getElementById(
                this.id.replace("Modal", "Video")
            );

            var videoJS = videojs(video);
            videoJS.pause();
        });
    }

    function videoPaused(id) {
        if (id == currentVideo) {
            currentVideo = "";
        }
    }

    function videoPlayed(id) {
        if (currentVideo !== "") {
            var video = document.getElementById(currentVideo);
            var videoJS = videojs(video);
            videoJS.pause();
            
        }

        currentVideo = id;
    }





})();
