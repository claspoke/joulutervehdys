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
    initVillageInteractions();
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
                // Handle autoplay restrictions
                audio.play().catch(error => {
                    console.log('Audio playback failed:', error);
                    this.textContent = '🎵 Play Music';
                    this.classList.remove('playing');
                    isPlaying = false;
                });
                this.textContent = '🔇 Pause Music';
                this.classList.add('playing');
            }
            isPlaying = !isPlaying;
        });
    }
}

// Parallax scrolling effect
function initParallaxScrolling() {
    // Cache DOM elements for better performance
    const moon = document.querySelector('.moon');
    const stars = document.querySelectorAll('.bg-star');
    const trees = document.querySelectorAll('.tree');
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        if (moon) {
            moon.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        stars.forEach((star, index) => {
            star.style.transform = `translateY(${scrolled * (0.3 + index * 0.05)}px)`;
        });
        
        trees.forEach(tree => {
            tree.style.transform = `translateY(${scrolled * -0.2}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
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

// Village interactions
function initVillageInteractions() {
    // Window click to toggle lights
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        window.addEventListener('click', function() {
            const light = this.querySelector('.window-light');
            if (light) {
                const isCurrentlyRunning = light.style.animationPlayState !== 'paused';
                light.style.animationPlayState = isCurrentlyRunning ? 'paused' : 'running';
                light.style.opacity = isCurrentlyRunning ? '0.3' : '';
            }
        });
    });
    
    // Chimney smoke interaction
    const chimneys = document.querySelectorAll('.chimney');
    chimneys.forEach(chimney => {
        chimney.addEventListener('click', function() {
            const smokes = this.querySelectorAll('.smoke');
            smokes.forEach(smoke => {
                smoke.style.animationDuration = '1.5s';
                setTimeout(() => {
                    smoke.style.animationDuration = '3s';
                }, 3000);
            });
        });
    });
    
    // Door wreath interaction
    const wreaths = document.querySelectorAll('.door-wreath');
    wreaths.forEach(wreath => {
        wreath.addEventListener('click', function(e) {
            e.stopPropagation();
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
            createSparkle(e.clientX, e.clientY);
        });
    });
    
    // Church bell ringing
    const churchBell = document.querySelector('.church-bell');
    if (churchBell) {
        churchBell.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }
    
    // Street lamp interaction
    const lamps = document.querySelectorAll('.street-lamp');
    lamps.forEach(lamp => {
        lamp.addEventListener('click', function() {
            const light = this.querySelector('.lamp-light');
            if (light) {
                light.style.animationPlayState = 
                    light.style.animationPlayState === 'paused' ? 'running' : 'paused';
            }
        });
    });
    
    // House hover effects
    const houses = document.querySelectorAll('.village-house, .village-church');
    houses.forEach(house => {
        house.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        house.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}
