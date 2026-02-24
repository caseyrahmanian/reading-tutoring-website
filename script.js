// Load configuration
let config = {};

// Load config on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadConfig();
    initializePage();
});

async function loadConfig() {
    try {
        const response = await fetch('config.json');
        config = await response.json();
        applyConfig();
    } catch (error) {
        console.log('Using default configuration');
        config = getDefaultConfig();
    }
}

function getDefaultConfig() {
    return {
        businessName: "Reading Specialist",
        hero: {
            title: "Transform Reading Struggles into Success",
            subtitle: "Expert literacy tutoring based on the Science of Reading"
        },
        about: {
            text: "I'm a dedicated reading specialist with expertise in helping beginning and struggling readers. My teaching methods align with the latest Science of Reading research, ensuring evidence-based instruction that produces real results.",
            imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
        },
        services: [
            {
                icon: "📚",
                title: "One-on-One Tutoring",
                description: "Personalized instruction tailored to your child's specific needs and learning style."
            },
            {
                icon: "🎯",
                title: "Assessment & Planning",
                description: "Comprehensive reading assessments to identify strengths and create targeted learning plans."
            },
            {
                icon: "✏️",
                title: "Writing Instruction",
                description: "Evidence-based writing instruction that builds composition skills alongside reading."
            },
            {
                icon: "👥",
                title: "Parent Coaching",
                description: "Guidance and strategies for parents to support reading development at home."
            }
        ],
        products: [
            {
                title: "Phonics Activity Pack",
                description: "Complete set of systematic phonics activities aligned with Science of Reading principles.",
                price: "$29.99",
                imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
                purchaseUrl: "#"
            },
            {
                title: "Decodable Reader Set",
                description: "Carefully sequenced decodable books for beginning readers.",
                price: "$39.99",
                imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
                purchaseUrl: "#"
            },
            {
                title: "Reading Assessment Kit",
                description: "Professional assessment tools for tracking reading progress.",
                price: "$49.99",
                imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400",
                purchaseUrl: "#"
            }
        ],
        contactEmail: "your-email@example.com"
    };
}

function applyConfig() {
    // Update business name
    const businessNameElements = document.querySelectorAll('#business-name, #footer-business-name');
    businessNameElements.forEach(el => el.textContent = config.businessName);

    // Update hero section
    if (config.hero) {
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroTitle) heroTitle.textContent = config.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = config.hero.subtitle;
    }

    // Update about section
    if (config.about) {
        const aboutText = document.getElementById('about-text');
        const aboutImage = document.getElementById('about-image');
        if (aboutText) aboutText.textContent = config.about.text;
        if (aboutImage && config.about.imageUrl) aboutImage.src = config.about.imageUrl;
    }

    // Render services
    if (config.services && config.services.length > 0) {
        renderServices();
    }

    // Render products
    if (config.products && config.products.length > 0) {
        renderProducts();
    }
}

function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = '';
    config.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(card);
    });
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    config.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}" class="product-image">
            <div class="product-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
                <a href="${product.purchaseUrl}" class="btn btn-secondary" target="_blank">Purchase</a>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function initializePage() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update footer year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Get the submit button
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        // Option 1: Using Formspree (requires setup)
        // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
        // Sign up at https://formspree.io/

        const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';

        const response = await fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent. I\'ll get back to you soon!');
            e.target.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Fallback: Open email client
        const subject = encodeURIComponent('Tutoring Inquiry');
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Phone: ${data.phone || 'Not provided'}\n` +
            `Student Info: ${data['student-info']}\n` +
            `Additional Information: ${data.message || 'None'}`
        );
        window.location.href = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`;
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}
