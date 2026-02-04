const totalImages = 17;
let currentIndex = 0;
let noClickCount = 0;

function updateCarousel() {
    const offset = -(currentIndex * 110);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Yes button - celebrate!
document.getElementById('yes-button').addEventListener('click', function() {
    document.querySelector('.question-text').innerHTML = "Yay! 💕 I knew you'd say yes! 🎉";
    document.querySelector('.answer-buttons').style.display = 'none';
    
    // Add some confetti effect (simple version)
    document.body.style.animation = 'none';
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #ff1493, #ffd700)';
        document.body.style.animation = 'gradientAnimation 2s ease infinite';
    }, 10);
});

// No button - the Easter egg!
document.getElementById('no-button').addEventListener('click', function() {
    noClickCount++;
    
    const messages = [
        "Are you sure? 🥺",
        "Really? Think again! 💭",
        "The No button seems broken... 🔧",
        "Error 404: No button not found 😅",
        "This button is malfunctioning! ⚠️",
        "You're cute for saying no 😂",
        "You butt! 🍑",
        "ok but really! 🥺"
    ];
    
    // Make the Yes button bigger with each No click
    const yesButton = document.getElementById('yes-button');
    const newScale = 1 + (noClickCount * 0.2); // Grows 20% bigger each time
    yesButton.style.transform = `scale(${newScale})`;
    
    if (noClickCount < messages.length) {
        // Show a message and shake the button
        this.classList.add('shake');
        setTimeout(() => this.classList.remove('shake'), 300);
        
        // Update the question text
        document.querySelector('.question-text').textContent = messages[noClickCount - 1];
    } else {
        // After enough clicks, transform No into Yes!
        this.textContent = "Yes! 💕";
        this.classList.remove('no-btn');
        this.classList.add('yes-btn');
        
        document.querySelector('.question-text').textContent = "I knew you'd come around! 😊";
        
        // Make it behave like the Yes button
        this.onclick = function() {
            document.getElementById('yes-button').click();
        };
    }
});