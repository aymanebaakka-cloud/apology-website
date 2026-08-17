// Screen Navigation
function showScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(`screen${screenNumber}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextScreen(currentScreen) {
    showScreen(currentScreen + 1);
}

function previousScreen(currentScreen) {
    showScreen(currentScreen - 1);
}

function goToStart() {
    showScreen(1);
}

// Celebration with confetti
function celebrate() {
    showScreen(5);
    createConfetti();
}

function createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) return;

    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.delay = Math.random() * 0.3 + 's';
        confetti.style.backgroundColor = [
            'var(--primary)',
            'var(--secondary)',
            '#ff8fab',
            '#ffed4e'
        ][Math.floor(Math.random() * 4)];
        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Copy link to clipboard
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const message = document.getElementById('copyMessage');
        if (message) {
            message.textContent = '✓ Link copied to clipboard!';
            setTimeout(() => {
                message.textContent = '';
            }, 3000);
        }
    }).catch(() => {
        const message = document.getElementById('copyMessage');
        if (message) {
            message.textContent = 'Failed to copy link';
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.screen.active');
    const screenId = activeScreen?.id;
    const screenNumber = parseInt(screenId?.replace('screen', '')) || 0;

    if (e.key === 'ArrowRight') {
        if (screenNumber < 5) nextScreen(screenNumber);
    } else if (e.key === 'ArrowLeft') {
        if (screenNumber > 1) previousScreen(screenNumber);
    }
});

// Touch swipe navigation for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const activeScreen = document.querySelector('.screen.active');
    const screenId = activeScreen?.id;
    const screenNumber = parseInt(screenId?.replace('screen', '')) || 0;

    if (touchStartX - touchEndX > 50) {
        // Swiped left - go next
        if (screenNumber < 5) nextScreen(screenNumber);
    } else if (touchEndX - touchStartX > 50) {
        // Swiped right - go back
        if (screenNumber > 1) previousScreen(screenNumber);
    }
}

// Initialize
window.addEventListener('load', () => {
    showScreen(1);
});

// Add some nice touches
console.log('%c💕 I\'m Sorry Website 💕', 'font-size: 20px; color: #ff6b9d; font-weight: bold;');
console.log('%cMade with love to apologize ❤️', 'font-size: 14px; color: #667eea;');