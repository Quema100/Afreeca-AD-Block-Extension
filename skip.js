let adskip = () => {
    console.log("Working")
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        const video = document.getElementsByTagName('video')[i];
        if (Number.isFinite(video.duration)) {
            video.currentTime = video.duration;
            console.log("Ad skipped");
        } else {
            console.log("No ad found or invalid video duration.");
        }
    }
}
window.onload = adskip
setInterval(()=>{
    adskip()
},100)