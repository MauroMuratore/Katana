const video = $("video:first");
const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
    video.controls = false;
}
console.error(video.attr("src"));