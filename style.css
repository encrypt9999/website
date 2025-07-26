* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.6;
    overflow-x: hidden;
}

/* Background Pattern */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
}

/* Canvas Effects */
#cursorTrail, #rainingParticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
}

#rainingParticles {
    z-index: 1;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #374151;
    padding: 1rem 0;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
}

.logo-accent {
    font-size: 1.5rem;
    font-weight: bold;
    color: #9333ea;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #9ca3af;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: #fff;
}

/* Main Content */
main {
    padding-top: 80px;
    position: relative;
    z-index: 10;
}

/* Hero Section */
.hero {
    padding: 5rem 0;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.1;
}

.title-main {
    color: #fff;
}

.title-accent {
    color: #9333ea;
}

.hero-subtitle {
    font-size: 2rem;
    color: #9ca3af;
    margin-bottom: 2rem;
    font-weight: 300;
}

.hero-description {
    font-size: 1.125rem;
    color: #6b7280;
    margin-bottom: 3rem;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: #9333ea;
    color: #fff;
}

.btn-primary:hover {
    background: #7c3aed;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: #9ca3af;
    border: 1px solid #374151;
}

.btn-secondary:hover {
    background: #1f2937;
    color: #fff;
}

.btn-danger {
    background: #dc2626;
    color: #fff;
}

.btn-danger:hover {
    background: #b91c1c;
}

.btn-full {
    width: 100%;
}

/* Sections */
section {
    padding: 5rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
}

.section-description {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

/* Features Section */
.features {
    background: linear-gradient(to bottom, transparent, rgba(17, 24, 39, 0.5));
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.feature-card {
    text-align: center;
    padding: 2rem;
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid #374151;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.feature-card:hover {
    border-color: rgba(147, 51, 234, 0.5);
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 3rem;
    color: #9333ea;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
}

/* Panels Section */
.panels {
    background: rgba(17, 24, 39, 0.3);
}

.panels-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.panel-card {
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid #374151;
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.panel-card:hover {
    border-color: rgba(147, 51, 234, 0.5);
    transform: scale(1.02);
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.panel-category {
    background: rgba(147, 51, 234, 0.2);
    color: #9333ea;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.panel-status {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.panel-status.available {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
}

.panel-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.panel-game {
    color: #6b7280;
    margin-bottom: 1rem;
}

.panel-stats {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    color: #6b7280;
}

.rating {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.rating i {
    color: #fbbf24;
}

.users {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.panel-video {
    margin-bottom: 1.5rem;
}

.video-placeholder {
    height: 200px;
    background: rgba(31, 41, 55, 0.5);
    border: 1px solid #374151;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #6b7280;
}

.video-placeholder i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #9333ea;
}

.panel-description {
    color: #d1d5db;
    margin-bottom: 1.5rem;
}

.panel-features h4 {
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.panel-features ul {
    list-style: none;
    margin-bottom: 1.5rem;
}

.panel-features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #d1d5db;
}

.panel-features i {
    color: #22c55e;
    font-size: 0.75rem;
}

.panel-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.panel-price {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
}

.price {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
}

.period {
    color: #6b7280;
}

.custom-panel-cta {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2));
    border: 1px solid rgba(147, 51, 234, 0.3);
    border-radius: 0.5rem;
}

.custom-panel-cta h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.custom-panel-cta p {
    color: #6b7280;
    margin-bottom: 1.5rem;
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

.contact-form-card,
.contact-info-card {
    background: rgba(17, 24, 39, 0.5);
    border: 1px solid #374151;
    border-radius: 0.5rem;
    padding: 2rem;
}

.contact-form-card h3,
.contact-info-card h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.contact-form-card p {
    color: #6b7280;
    margin-bottom: 2rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.75rem;
    background: #1f2937;
    border: 1px solid #374151;
    border-radius: 0.375rem;
    color: #fff;
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #9333ea;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-method {
    display: flex;
    gap: 1rem;
}

.contact-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(147, 51, 234, 0.2);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.contact-icon i {
    color: #9333ea;
    font-size: 1.5rem;
}

.contact-details h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.contact-details p {
    color: #6b7280;
    margin-bottom: 0.25rem;
}

.contact-details a {
    color: #9333ea;
    text-decoration: none;
}

.contact-details a:hover {
    text-decoration: underline;
}

.contact-details small {
    color: #6b7280;
    font-size: 0.75rem;
}

.emergency-contact {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(to right, rgba(220, 38, 38, 0.2), rgba(251, 146, 60, 0.2));
    border: 1px solid rgba(220, 38, 38, 0.3);
    border-radius: 0.5rem;
}

.emergency-contact h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f87171;
    margin-bottom: 1rem;
}

.emergency-contact p {
    color: #6b7280;
    margin-bottom: 1.5rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
    background-color: #1f2937;
    margin: 5% auto;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.close {
    color: #6b7280;
    float: right;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
}

.close:hover {
    color: #fff;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .panels-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .nav {
        gap: 1rem;
    }
    
    .nav-link span {
        display: none;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .panels-grid {
        grid-template-columns: 1fr;
    }
    
    .panel-card {
        padding: 1rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Loading Animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.panel-card,
.feature-card,
.contact-form-card,
.contact-info-card {
    animation: fadeInUp 0.6s ease-out;
}
