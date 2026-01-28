$(function () {

    const mashupRules = {
        PAR: ['CRANK','IDC','LAFFY','MB','SNAP','STUNT','TIP','WALK'],
        YOLO: ['LOSE','OVER','RSS','TTS'],
        SMA: ['99P','BEO','DMX','GETL','MB','MNB','RSS','TIP','TTS'],
        SOUL: ['LOSE','OVER','RSS','TTS'],
        PAN: ['CRANK','IDC','LAFFY','NEL','SNAP','STUNT','WALK'],
        CAKE: ['LOSE','OVER','RSS','TTS'],
        VAN: ['99P','DMX','GETL','IDC','MB','MNB','TTS', 'RATM'],
        STA: ['GETL','LOSE','MNB','RSS','TTS'],
        FRAN: ['99P','BEO','DMX','GETL','MB','MNB','RSS','TIP','TTS'],
        WHST: ['LOSE','TTS'],
        WEEZ: ['99P','BEO','DMX','GETL','LOSE','MNB','RSS','TIP','TTS'],
        GRE: ['CRANK','IDC','LAFFY','LEAN','POP','WALK'],
        EVAN: ['99P','DMX','GETL','IDC','MB','MNB','RSS','TIP','TTS'],
        FOB: ['CRANK','IDC','LEAN','NEL','POP','SNAP','STUNT','WALK'],
        FRAY: ['99P','BEO','DMX','GETL','LOSE','MNB','RSS','TTS'],
        HTD: ['99P','BEO','DMX','GETL','MB','MNB','TIP','TTS'],
        OK: ['CRANK','LAFFY','LEAN','OVER','POP','WALK'],
        YEL: ['IDC','LAFFY','NEL','SNAP','STUNT','WALK'],
        AVR: ['CRANK','LAFFY','LEAN','NEL','POP','WALK'],
        BLI: ['99P','BEO','DMX','MNB','RSS','TTS'],
        MOD: ['99P','BEO','DMX','GETL','MB','MNB','TIP'],
        MCR: ['LOSE','OVER','TTS'],
        RHCP: ['99P','BEO','DMX','GETL','IDC','MB','MNB','RSS','TIP','TTS']
    };

    $('#dragcontainer li').draggable({
        helper: 'clone',
        revert: 'invalid'
    });

    $('#dropcontainer li').each(function () {
        const targetId = this.id;
        const accepted = mashupRules[targetId];
        if (!accepted) return;

        $(this).droppable({
            accept: '#' + accepted.join(', #'),
            drop: function (event, ui) {
                const dragId = ui.draggable.attr('id');
                const audio = `mp3/${targetId}-${dragId}.mp3`;

                $('#audioBox').html(`
                    <audio controls autoplay src="${audio}" style="margin-top:3vh;width:30vw"></audio>
                `);

                // RATM hat lokales Image, andere von Wayback Machine
                const dragImageSrc = dragId === 'RATM'
                    ? 'img/RATM.png'
                    : `https://web.archive.org/web/20221224112853im_/http://themagicipod.com/${dragId}.png`;

                $('#picbox1').html(
                    `<img class="pb1" src="${dragImageSrc}" style="height:6vw;width:22.5vw">`
                );

                $('#picbox2').html(
                    `<img class="pb1" src="https://web.archive.org/web/20221224112853im_/http://themagicipod.com/${targetId}.png" style="height:6vw;width:22.5vw">`
                );
            }
        });
    });

});