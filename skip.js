let adskip = () => {
    console.log("Working")
    const daArea = document.querySelector('.da_area');
    if (daArea) {
        const displayStyle = window.getComputedStyle(daArea).display;
    
        if (displayStyle !== 'none') {
            console.log("Element is visible");
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
    }
}
window.onload = adskip
setInterval(()=>{
    adskip()
},100)