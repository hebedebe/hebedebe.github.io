// Enhanced particle system
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        // Vary particle sizes and colors
        const size = 1 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        if (Math.random() < 0.3) {
            particle.style.background = '#a89080';
        }
        
        particlesContainer.appendChild(particle);
    }
}

// Enhanced uptime with more organic decay simulation
function updateUptime() {
    const startTime = Date.now();
    const decayWords = ['corrupting', 'dissolving', 'mutating', 'festering', 'pulsing', 'breathing', 'consuming', 'evolving'];
    
    setInterval(() => {
        const elapsed = Date.now() - startTime;
        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        const timeStr = `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
        const randomDecay = decayWords[Math.floor(Math.random() * decayWords.length)];
        
        document.getElementById('uptime').textContent = `${timeStr} [${randomDecay}]`;
    }, 1000);
}

// Enhanced navigation with smooth scrolling
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const target = item.getAttribute('href').substring(1);
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced organic glitch effects
function addEnhancedGlitches() {
    const elements = document.querySelectorAll('.project-title, .bio-title, .name');
    
    setInterval(() => {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        const originalText = randomElement.textContent;
        
        // Enhanced organic corruption
        randomElement.style.filter = 'hue-rotate(90deg) saturate(2) brightness(1.3) contrast(1.2)';
        randomElement.style.transform = 'scale(1.03) skew(1.5deg) translateY(-1px)';
        randomElement.style.textShadow = '0 0 20px rgba(212, 165, 116, 0.8), 0 0 40px rgba(212, 165, 116, 0.4)';
        
        // More frequent text corruption
        if (Math.random() < 0.4) {
            const corruptChars = ['█', '▓', '▒', '░', '▄', '▀', '◄', '►', '▲', '▼'];
            const corruptedText = originalText.replace(/[aeiou]/g, () => 
                Math.random() < 0.6 ? corruptChars[Math.floor(Math.random() * corruptChars.length)] : originalText[Math.floor(Math.random() * originalText.length)]
            );
            randomElement.textContent = corruptedText;
            
            setTimeout(() => {
                randomElement.textContent = originalText;
            }, 120);
        }
        
        setTimeout(() => {
            randomElement.style.filter = 'none';
            randomElement.style.transform = 'none';
            randomElement.style.textShadow = '';
        }, 250);
        
    }, 6000 + Math.random() * 12000);
}

// Enhanced card pulsing with mouse interaction
function addEnhancedCardEffects() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        // Organic pulsing
        setInterval(() => {
            const intensity = 40 + Math.sin(Date.now() * 0.003 + index) * 15;
            const shadowY = 8 + Math.sin(Date.now() * 0.002 + index) * 6;
            
            card.style.boxShadow = `
                inset 0 0 ${intensity}px rgba(0, 0, 0, 0.5),
                0 ${shadowY}px 20px rgba(0, 0, 0, 0.3)
            `;
        }, 50);
        
        // Mouse follow effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                translateY(-8px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Enhanced bio text corruption
function addEnhancedTextCorruption() {
    const bioText = document.querySelector('.bio-text');
    const originalText = bioText.innerHTML;
    
    setInterval(() => {
        if (Math.random() < 0.15) {
            const corruptChars = ['█', '▓', '▒', '░', '▄', '▀', '◄', '►', '♦', '♠', '♣', '♥'];
            let corruptedText = originalText;
            
            // Replace more characters for heavier corruption
            const corruptionLevel = 3 + Math.floor(Math.random() * 5);
            for (let i = 0; i < corruptionLevel; i++) {
                const randomPos = Math.floor(Math.random() * corruptedText.length);
                const randomChar = corruptChars[Math.floor(Math.random() * corruptChars.length)];
                corruptedText = corruptedText.substring(0, randomPos) + randomChar + corruptedText.substring(randomPos + 1);
            }
            
            bioText.innerHTML = corruptedText;
            bioText.style.filter = 'hue-rotate(45deg) saturate(1.5)';
            
            setTimeout(() => {
                bioText.innerHTML = originalText;
                bioText.style.filter = 'none';
            }, 80 + Math.random() * 300);
        }
    }, 3000);
}

// Scroll-based parallax effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        document.querySelector('.bg-organic').style.transform = `translateY(${rate}px)`;
        
        // Parallax particles
        document.querySelectorAll('.particle').forEach((particle, index) => {
            const speed = 0.2 + (index % 3) * 0.1;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize all enhanced effects
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    updateUptime();
    addEnhancedGlitches();
    addEnhancedCardEffects();
    addEnhancedTextCorruption();
    initScrollEffects();
    
    // Fade out loading screen
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-overlay').style.display = 'none';
        }, 1000);
    }, 1500);
});

// Performance optimization for animations
let ticking = false;

function updateAnimations() {
    // Batch DOM updates here
    ticking = false;
}

function requestAnimationUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}