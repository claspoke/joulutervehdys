// Christmas Interactive Elements Script

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSnowflakeInteractions();
    initPresentInteractions();
    initOrnamentsInteractions();
    initLightsInteractions();
    initBellInteractions();
    initGingerbreadInteractions();
    initCandyCaneInteractions();
    initMusicControls();
    initParallaxScrolling();
});

// Snowflake hover interactions
function initSnowflakeInteractions() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5) rotate(180deg)';
            this.style.opacity = '1';
        });
        
        snowflake.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.opacity = '0.8';
        });
    });
}

// Present shake and open interactions
function initPresentInteractions() {
    const presents = document.querySelectorAll('.interactive-present');
    presents.forEach(present => {
        present.addEventListener('click', function() {
            if (!this.classList.contains('opened')) {
                this.classList.add('shake');
                setTimeout(() => {
                    this.classList.remove('shake');
                    this.classList.add('opened');
                    this.innerHTML = '🎉';
                    createConfetti(this);
                }, 600);
            }
        });
    });
}

// Create confetti effect
function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ff0000', '#00ff00', '#ffd700', '#0000ff', '#ff69b4'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = rect.left + rect.width / 2 + 'px';
        confetti.style.top = rect.top + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}

// Christmas tree ornaments interactions
function initOrnamentsInteractions() {
    const ornaments = document.querySelectorAll('.ornament');
    ornaments.forEach(ornament => {
        ornament.addEventListener('click', function() {
            this.classList.toggle('lit');
        });
    });
}

// Christmas lights twinkling
function initLightsInteractions() {
    const lightsToggle = document.querySelector('.lights-toggle');
    const lights = document.querySelectorAll('.christmas-light');
    let lightsOn = true;
    
    if (lightsToggle) {
        lightsToggle.addEventListener('click', function() {
            lightsOn = !lightsOn;
            lights.forEach(light => {
                light.style.animationPlayState = lightsOn ? 'running' : 'paused';
                light.style.opacity = lightsOn ? '' : '0.3';
            });
            this.textContent = lightsOn ? '💡 Lights: ON' : '💡 Lights: OFF';
        });
    }
}

// Bell ringing interaction
function initBellInteractions() {
    const bells = document.querySelectorAll('.bell');
    bells.forEach(bell => {
        bell.addEventListener('click', function() {
            this.classList.add('ringing');
            setTimeout(() => {
                this.classList.remove('ringing');
            }, 600);
        });
    });
}

// Gingerbread man interactions
function initGingerbreadInteractions() {
    const gingerbreadMen = document.querySelectorAll('.gingerbread-man');
    gingerbreadMen.forEach(ginger => {
        ginger.addEventListener('mouseenter', function() {
            this.classList.add('wave');
        });
        
        ginger.addEventListener('mouseleave', function() {
            this.classList.remove('wave');
        });
    });
}

// Candy cane interactions
function initCandyCaneInteractions() {
    const candyCanes = document.querySelectorAll('.candy-cane');
    candyCanes.forEach(candy => {
        candy.addEventListener('mouseenter', function() {
            this.classList.add('spin');
        });
        
        candy.addEventListener('mouseleave', function() {
            this.classList.remove('spin');
        });
    });
}

// Background music controls
function initMusicControls() {
    const musicToggle = document.querySelector('.music-toggle');
    const audio = document.querySelector('#background-music');
    
    if (musicToggle && audio) {
        let isPlaying = false;
        
        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause();
                this.textContent = '🎵 Play Music';
                this.classList.remove('playing');
            } else {
                audio.play();
                this.textContent = '🔇 Pause Music';
                this.classList.add('playing');
            }
            isPlaying = !isPlaying;
        });
    }
}

// Parallax scrolling effect
function initParallaxScrolling() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        const moon = document.querySelector('.moon');
        if (moon) {
            moon.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        const stars = document.querySelectorAll('.bg-star');
        stars.forEach((star, index) => {
            star.style.transform = `translateY(${scrolled * (0.3 + index * 0.05)}px)`;
        });
        
        const trees = document.querySelectorAll('.tree');
        trees.forEach(tree => {
            tree.style.transform = `translateY(${scrolled * -0.2}px)`;
        });
    });
}

// Add sparkle effect on click anywhere
document.addEventListener('click', function(e) {
    if (!e.target.closest('button') && !e.target.closest('.interactive-present')) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.innerHTML = '✨';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}
