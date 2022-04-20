$(document).ready(function () {
    common.init();
});

const common = (() => {
    var sidebarDisplayed;

    return {
        goBack: goBack,
        init: init,
        showModal: showModal,
    };

    function init() {
        sidebarDisplayed = false;
        setupEventHandlers();
    }

    function setupEventHandlers() {
        $("#main, #banner").on("click", () => {
            if (sidebarDisplayed) {
                closeNav();
            }
        });
        $(".sidebarCloseButton").on("click", () => {
            closeNav();
        });
        $(".sidebarToggleButton").on("click", () => {
            toggleNav();
        });
    }

    /* Modals */
    function showModal(id) {
        $(`#${id}`).modal();
    }

    /* Navigation */

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("navSidebar").style.width = "0";
        sidebarDisplayed = false;
    }

    function goBack() {
        window.history.back();
    }

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        var sidebarWidth = screen.width > 736 ? "35%" : "60%";
        document.getElementById("navSidebar").style.width = sidebarWidth;
        sidebarDisplayed = true;
    }

    function toggleNav() {
        if (sidebarDisplayed) {
            closeNav();
        } else {
            openNav();
        }
    }
})();
