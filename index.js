$(function () {

    /* -----------------------------
       DRAGGABLE ITEMS
    ----------------------------- */
    const draggableItems = [
        "#NEL", "#GETL", "#99P", "#MB", "#TTS", "#TIP", "#OVER",
        "#LAFFY", "#LEAN", "#POP", "#WALK", "#SNAP", "#CRANK",
        "#LOSE", "#DMX", "#STUNT", "#MNB", "#RSS", "#IDC", "#BEO", "#RATM"
    ];

    $(draggableItems.join(",")).draggable({
        helper: "clone"
    });

    /* -----------------------------
       DROPPABLE CONFIG
    ----------------------------- */
    const droppables = {
        "#PAR":  ["#CRANK", "#IDC", "#LAFFY", "#MB", "#SNAP", "#STUNT", "#TIP", "#WALK"],
        "#YOLO": ["#LOSE", "#OVER", "#RSS", "#TTS"],
        "#SMA":  ["#99P", "#BEO", "#DMX", "#GETL", "#MB", "#MNB", "#RSS", "#TIP", "#TTS"],
        "#SOUL": ["#LOSE", "#OVER", "#RSS", "#TTS"],
        "#PAN":  ["#CRANK", "#IDC", "#LAFFY", "#NEL", "#SNAP", "#STUNT", "#WALK"],
        "#CAKE": ["#LOSE", "#OVER", "#RSS", "#TTS"],
        "#VAN":  ["#99P", "#DMX", "#GETL", "#IDC", "#MB", "#MNB", "#TTS", "#RATM"],
        "#STA":  ["#GETL", "#LOSE", "#MNB", "#RSS", "#TTS"],
        "#FRAN": ["#99P", "#BEO", "#DMX", "#GETL", "#MB", "#MNB", "#RSS", "#TIP", "#TTS"],
        "#WHST": ["#LOSE", "#TTS"],
        "#WEEZ": ["#99P", "#BEO", "#DMX", "#GETL", "#LOSE", "#MNB", "#RSS", "#TIP", "#TTS"],
        "#GRE":  ["#CRANK", "#IDC", "#LAFFY", "#LEAN", "#POP", "#WALK"],
        "#EVAN": ["#99P", "#DMX", "#GETL", "#IDC", "#MB", "#MNB", "#RSS", "#TIP", "#TTS"],
        "#FOB":  ["#CRANK", "#IDC", "#LEAN", "#NEL", "#POP", "#SNAP", "#STUNT", "#WALK"],
        "#FRAY": ["#99P", "#BEO", "#DMX", "#GETL", "#LOSE", "#MNB", "#RSS", "#TTS"],
        "#HTD":  ["#99P", "#BEO", "#DMX", "#GETL", "#MB", "#MNB", "#TIP", "#TTS"],
        "#OK":   ["#CRANK", "#LAFFY", "#LEAN", "#OVER", "#POP", "#WALK"],
        "#YEL":  ["#IDC", "#LAFFY", "#NEL", "#SNAP", "#STUNT", "#WALK"],
        "#AVR":  ["#CRANK", "#LAFFY", "#LEAN", "#NEL", "#POP", "#WALK"],
        "#BLI":  ["#99P", "#BEO", "#DMX", "#MNB", "#RSS", "#TTS"],
        "#MOD":  ["#99P", "#BEO", "#DMX", "#GETL", "#MB", "#MNB", "#TIP"],
        "#MCR":  ["#LOSE", "#OVER", "#TTS"],
        "#RHCP": ["#99P", "#BEO", "#DMX", "#GETL", "#IDC", "#MB", "#MNB", "#RSS", "#TIP", "#TTS"]
    };

    /* -----------------------------
       DROP HANDLER
    ----------------------------- */
    function handleDrop(event, ui) {
        const band = $(this).attr("id");
        const trait = ui.draggable.attr("id");

        $("#audioBox").html(`
      <audio class="music" preload="none" controls autoplay
        src="${band}-${trait}.mp3"
        type="audio/mp3"
        style="margin-top:3vh; width:30vw">
      </audio>
    `);

        $("#picbox1").html(`
      <img class="pb1" src="${trait}.png"
           style="height:6vw; width:22.5vw">
    `);

        $("#picbox2").html(`
      <img class="pb1" src="${band}.png"
           style="height:6vw; width:22.5vw">
    `);
    }

    /* -----------------------------
       INIT DROPPABLES
    ----------------------------- */
    Object.entries(droppables).forEach(([selector, accepts]) => {
        $(selector).droppable({
            accept: accepts.join(","),
            activeClass: "ui-state-hover",
            drop: handleDrop
        });
    });

});
