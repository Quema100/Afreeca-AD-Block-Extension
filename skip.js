let adskip = () => {
    console.log("Working")
    const daArea = document.querySelector('#player > .da_area');
    if (daArea) {
        const displayStyle = window.getComputedStyle(daArea).display;
    
        if (displayStyle !== 'none') {
            console.log("Element is visible");
            for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
                const video = document.getElementsByTagName('video')[i];
                if (!Number.isFinite(video.duration)) return; 
                video.currentTime = video.duration;
                console.log("Ad skipped");
            }
        }
    }
}
window.onload = adskip
setInterval(()=> adskip() , 200)
