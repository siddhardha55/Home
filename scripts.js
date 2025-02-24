function enableSound() {
    const hoverSound = document.getElementById('hoverSound');
    const clickSound = document.getElementById('clickSound');
    if (hoverSound) hoverSound.muted = false;
    if (clickSound) clickSound.muted = false;
}

function disableSound() {
    const hoverSound = document.getElementById('hoverSound');
    const clickSound = document.getElementById('clickSound');
    if (hoverSound) hoverSound.muted = true;
    if (clickSound) clickSound.muted = true;
}

document.getElementById('enableSound').addEventListener('click', function() {
    const button = this;
    const isMuted = button.classList.toggle('muted');

    if (isMuted) {
        button.innerHTML = '<i class="fas fa-volume-mute"></i>';
        disableSound();
    } else {
        button.innerHTML = '<i class="fas fa-volume-up"></i>';
        enableSound();
    }
});

function playSound() {
    const audio = document.getElementById('hoverSound');
    if (audio && !audio.muted) {
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
        });
    } else {
        console.error("Audio element not found or is muted");
    }
}

function playClickSound() {
    const audio = document.getElementById('clickSound');
    if (audio && !audio.muted) {
        audio.playbackRate = 1.5;
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
        });
    } else {
        console.error("Audio element not found or is muted");
    }
}

// Add event listeners to all logo elements
document.querySelectorAll('.logo, .center-logo').forEach(logo => {
    logo.addEventListener('mouseover', playSound);
    logo.addEventListener('click', playClickSound);
});

// Functions to open applications
function openSnapchat() {
    console.log("Opening Snapchat application...");
}

function openInstagram() {
    console.log("Opening Instagram application...");
}

function openWhatsApp() {
    console.log("Opening WhatsApp application...");
}

document.addEventListener('DOMContentLoaded', function() {
    const googleLogo = document.querySelector('.center-logo');
    
});