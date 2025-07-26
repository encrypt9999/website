// Cursor Trail Effect
class CursorTrail {
    constructor() {
        this.canvas = document.getElementById('cursorTrail');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.lastMouse = { x: 0, y: 0 };
        
        this.MAX_PARTICLES = 450;
        this.PARTICLE_LIFESPAN = 70;
        this.PARTICLE_SEGMENT_LENGTH = 2.0;
        this.LINE_WIDTH = 1.5;
        this.COLOR_START_RGB = [200, 50, 255];
        this.COLOR_END_RGB = [100, 0, 150];
        this.SWIRL_INTENSITY = 0.4;
        this.SWIRL_DAMPING = 0.9;
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    handleMouseMove(e) {
        const dx = e.clientX - this.lastMouse.x;
        const dy = e.clientY - this.lastMouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > this.PARTICLE_SEGMENT_LENGTH) {
            const angle = Math.atan2(dy, dx);
            const steps = Math.ceil(distance / this.PARTICLE_SEGMENT_LENGTH);
            
            for (let i = 0; i < steps; i++) {
                const ratio = i / steps;
                const x = this.lastMouse.x + dx * ratio;
                const y = this.lastMouse.y + dy * ratio;
                this.particles.push(new Particle(x, y, dx, dy, angle));
            }
        }
        
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.lastMouse.x = e.clientX;
        this.lastMouse.y = e.clientY;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            p.update();
            p.draw(this.ctx);
            
            if (p.life > p.maxLife) {
                this.particles.splice(i, 1);
                i--;
            }
        }
        
        while (this.particles.length > this.MAX_PARTICLES) {
            this.particles.shift();
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    constructor(x, y, dx, dy, angle) {
        this.x = x;
        this.y = y;
        this.vx = dx * 0.4;
        this.vy = dy * 0.4;
        this.life = 0;
        this.maxLife = 70 + Math.random() * 20;
        
        const perpendicularAngle = angle + Math.PI / 2;
        this.vx += Math.cos(perpendicularAngle) * (Math.random() - 0.5) * 4;
        this.vy += Math.sin(perpendicularAngle) * (Math.random() - 0.5) * 4;
    }
    
    update() {
        this.vx *= 0.9;
        this.vy *= 0.9;
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
    }
    
    draw(ctx) {
        const opacity = 1 - this.life / this.maxLife;
        if (opacity <= 0) return;
        
        const r = 200 + (100 - 200) * (this.life / this.maxLife);
        const g = 50 + (0 - 50) * (this.life / this.maxLife);
        const b = 255 + (150 - 255) * (this.life / this.maxLife);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5 / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Raining Particles Effect
class RainingParticles {
    constructor() {
        this.canvas = document.getElementById('rainingParticles');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.PARTICLE_COUNT = 150;
        this.COLORS = [
            'rgba(147, 51, 234, 0.8)',
            'rgba(168, 85, 247, 0.6)',
            'rgba(196, 181, 253, 0.4)',
            'rgba(255, 255, 255, 0.3)'
        ];
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.initParticles();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    initParticles() {
        this.particles = [];
        for (let i = 0; i < this.PARTICLE_COUNT; i++) {
            const particle = new RainParticle(this.canvas.width, this.canvas.height, this.COLORS);
            particle.y = Math.random() * this.canvas.height;
            this.particles.push(particle);
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.update(this.canvas.height);
            particle.draw(this.ctx);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

class RainParticle {
    constructor(canvasWidth, canvasHeight, colors) {
        this.x = Math.random() * canvasWidth;
        this.y = -10;
        this.speed = Math.random() * 1 + 0.5;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    
    update(canvasHeight) {
        this.y += this.speed;
        
        if (this.y > canvasHeight + 10) {
            this.y = -10;
            this.x = Math.random() * window.innerWidth;
            this.speed = Math.random() * 1 + 0.5;
        }
    }
    
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Panel Modal
function openPanel(panelType) {
    const modal = document.getElementById('panelModal');
    const modalContent = document.getElementById('modalContent');
    
    const panelData = {
        valorant: {
            title: 'Valorant Pro Panel',
            category: 'FPS',
            price: '$29.99/month',
            rating: '4.9',
            users: '1,250',
            description: 'Advanced Valorant panel with aimbot, wallhack, and triggerbot features designed for competitive gameplay.',
            features: ['Undetected Aimbot', 'ESP/Wallhack', 'Triggerbot', 'No Recoil', 'Radar Hack', '24/7 Support']
        },
        cs2: {
            title: 'CS2 Elite Hack',
            category: 'FPS',
            price: '$24.99/month',
            rating: '4.8',
            users: '2,100',
            description: 'Professional CS2 cheat with advanced anti-detection and premium features for Counter-Strike 2.',
            features: ['Legit Aimbot', 'Glow ESP', 'Bhop Script', 'Skin Changer', 'Rank Reveal', 'Stream Proof']
        },
        apex: {
            title: 'Apex Legends Dominator',
            category: 'Battle Royale',
            price: '$34.99/month',
            rating: '4.7',
            users: '890',
            description: 'Ultimate Apex Legends panel with prediction aimbot and advanced ESP for battle royale domination.',
            features: ['Prediction Aimbot', '3D ESP', 'Item ESP', 'No Spread', 'Speed Hack', 'Auto Updates']
        },
        fortnite: {
            title: 'Fortnite Victory Panel',
            category: 'Battle Royale',
            price: '$39.99/month',
            rating: '4.6',
            users: '1,560',
            description: 'Premium Fortnite cheat with silent aim and building assistance for consistent Victory Royales.',
            features: ['Silent Aimbot', 'Player ESP', 'Loot ESP', 'Build Assist', 'Storm Prediction', 'Anti-Ban System']
        },
        pubg: {
            title: 'PUBG Master Hack',
            category: 'Battle Royale',
            price: '$27.99/month',
            rating: '4.5',
            users: '750',
            description: 'Advanced PUBG panel with vehicle ESP and weapon customization for chicken dinner victories.',
            features: ['Smooth Aimbot', 'Vehicle ESP', 'Weapon ESP', 'No Grass', 'Speed Boost', 'Magic Bullet']
        },
        brutal: {
            title: 'Brutal Panel',
            category: 'Premium',
            price: '$14.05 one-time',
            rating: '4.9',
            users: '850',
            description: 'Comprehensive suite of advanced tools to maximize gaming performance and dominate the competition.',
            features: ['Gaming Enhancements', 'Performance Analytics', 'Hardware Optimization', 'Custom Macros', 'Priority Support']
        }
    };
    
    const panel = panelData[panelType];
    if (!panel) return;
    
    modalContent.innerHTML = `
        <div class="panel-modal-content">
            <div class="panel-modal-header">
                <span class="panel-category">${panel.category}</span>
                <h2>${panel.title}</h2>
                <div class="panel-stats">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${panel.rating}</span>
                    </div>
                    <div class="users">
                        <i class="fas fa-gamepad"></i>
                        <span>${panel.users} users</span>
                    </div>
                </div>
            </div>
            
            <div class="panel-modal-body">
                <div class="panel-video">
                    <div class="video-placeholder">
                        <i class="fas fa-play"></i>
                        <p>Panel Demo Video</p>
                    </div>
                </div>
                
                <p class="panel-description">${panel.description}</p>
                
                <div class="panel-features">
                    <h4>Features:</h4>
                    <ul>
                        ${panel.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="system-requirements">
                    <h4>System Requirements:</h4>
                    <div class="requirements-grid">
                        <div>
                            <h5>Minimum:</h5>
                            <ul>
                                <li>Windows 10/11 64-bit</li>
                                <li>8GB RAM</li>
                                <li>DirectX 11 compatible GPU</li>
                                <li>500MB free disk space</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Recommended:</h5>
                            <ul>
                                <li>Windows 11 64-bit</li>
                                <li>16GB RAM</li>
                                <li>GTX 1060 or better</li>
                                <li>SSD storage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="panel-actions">
                    <div class="panel-price">
                        <span class="price">${panel.price}</span>
                    </div>
                    <div class="panel-buttons">
                        <button class="btn btn-primary" onclick="window.open('https://discord.gg/DrZDnsW5ZN', '_blank')">
                            <i class="fas fa-download"></i>
                            Purchase Panel
                        </button>
                        <button class="btn btn-secondary" onclick="window.open('https://discord.gg/DrZDnsW5ZN', '_blank')">
                            Try Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('panelModal');
    modal.style.display = 'none';
}

// Contact Form
function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you within 24 hours.');
    event.target.reset();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CursorTrail();
    new RainingParticles();
    initNavigation();
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('panelModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
