const playlist = [
    {
        id: 1,
        title: 'Song 1',
        genre: 'Genre 1',
        songUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"></iframe>',
        wallet: 'DFiLmDMBdQT1546451FqMfcEsDmxDCFYxjD',
        handle: 'taste.the.fame',
        handleUrl: 'https://www.instagram.com/taste.the.fame/',
        award: '<img src="https://media.giphy.com/media/9VcPcmoNpDulNJXSLw/giphy.gif">',
        hasAward: false
    },
    {
        id: 2,
        title: 'Song 2',
        genre: 'Genre 2',
        songUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"></iframe>',
        wallet: 'DFiLmDMBdQT1546451FqMfdfdxDCFYxjD'
    },
    {
        id: 3,
        title: 'Song 3',
        genre: 'Genre 3',
        songUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;"></iframe>',
        wallet: 'DFiLmDMBdQT1546451FqMfdfeegg4xjD'
    }
];

const sectionCenter = document.querySelector(".center_sect");
const genreBtns = document.querySelectorAll(".filter_btn");


window.addEventListener("DOMContentLoaded", function () {
    displayListSongs(playlist);
});
window.addEventListener("DOMContentLoaded", function () {
    const awardP = document.querySelector(".award");
    if (playlist.hasAward === true) {
       console.log('true')

    } else {
        awardP.classList.remove('awardGif');
    }
});

genreBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const genre = e.currentTarget.dataset.genre;
        const playlistGenre = playlist.filter(function (playlistSong) {
            // console.log(playlistSong.genre);
            if (playlistSong.genre === genre) {
                return playlistSong;
            }
        });
        if (genre === 'all') {
            displayListSongs(playlist);
        } else {
            displayListSongs(playlistGenre);
        }
    });
});

function displayListSongs(listSongs) {
    let displayList = listSongs.map(function (item) {
        return `<h1>${item.title}</h1>
        <p><a href="${item.handleUrl}" target="blank">@${item.handle}</a><span class="award">${item.award}</span></p>
        <div>${item.songUrl}</div>
        <div><a href="dogecoin:${item.wallet}">Donate</a></div>`;
    });
    displayList = displayList.join("");
    sectionCenter.innerHTML = displayList;
};