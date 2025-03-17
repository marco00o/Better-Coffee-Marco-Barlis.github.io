console.log ("Script loaded succesfully")

// Navbar elements
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
// Scroll Progress Indicator
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    // Calculate scroll progress percentage
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    
    // Apply the progress width with smooth animation
    requestAnimationFrame(() => {
        scrollProgress.style.width = `${scrolled}%`;
        
        // Add active class when scrolling starts
        if (scrolled > 0) {
            scrollProgress.classList.add('active');
        } else {
            scrollProgress.classList.remove('active');
        }
    });
});

// Toggle mobile menu
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link or outside
document.addEventListener('click', (e) => {
    const isNavbarClick = navbarToggle.contains(e.target) || navbarMenu.contains(e.target);
    if (!isNavbarClick && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});

// Add scroll behavior
window.addEventListener('scroll', () => {
    // Add background when scrolling
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update scroll progress bar
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Smooth scroll for all navbar links
document.querySelectorAll('.navbar-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu when clicking a link
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
});

// Add this at the top of your navigation.js file
const announcements = [
    "New Biscoff Frappe available! Try our new blend",
    "Get Our loyalty Card Now, Get 1 free Coffee For Every 10 Orders",
    "Try our new Flavor: Sea Salt Caramel Coffee"
];

let currentAnnouncementIndex = 0;
const announcementBar = document.querySelector('.announcement-bar p');
const announcementContainer = document.querySelector('.announcement-bar');



// Rotate announcements
function rotateAnnouncements() {
    announcementBar.style.opacity = '0';
    setTimeout(() => {
        currentAnnouncementIndex = (currentAnnouncementIndex + 1) % announcements.length;
        announcementBar.textContent = announcements[currentAnnouncementIndex];
        announcementBar.style.opacity = '1';
    }, 500);
}

// Start rotation
const announcementInterval = setInterval(rotateAnnouncements, 5000);

// Home Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home');
    const heroBtn = document.querySelector('.hero-btn');
    const homeTitle = document.querySelector('#home h1');
    const homeText = document.querySelector('#home p');

    // Animate home elements on page load
    setTimeout(() => {
        homeTitle.style.opacity = '1';
        homeTitle.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            homeText.style.opacity = '1';
            homeText.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                heroBtn.style.opacity = '1';
                heroBtn.style.transform = 'translateY(0)';
            }, 200);
        }, 200);
    }, 300);

    // Button hover effect
    heroBtn.addEventListener('mouseenter', () => {
        heroBtn.style.transform = 'scale(1.05)';
    });

    heroBtn.addEventListener('mouseleave', () => {
        heroBtn.style.transform = 'scale(1)';
    });

    // Smooth scroll to Products section
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const productsSection = document.querySelector('#Products');
        productsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add highlight animation to Products section
        productsSection.classList.add('highlight');
        setTimeout(() => {
            productsSection.classList.remove('highlight');
        }, 1500);
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        homeSection.style.backgroundPositionY = `${scroll * 0.5}px`;
    });
});

// CTA Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    const ctaSection = document.querySelector('.cta');
    const ctaButton = document.querySelector('.cta-btn');
    const ctaContainer = document.querySelector('.cta-container');

    // Intersection Observer for CTA animation
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ctaContainer.classList.add('cta-visible');
                ctaObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    ctaObserver.observe(ctaSection);

    // Button hover effects
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.classList.add('cta-btn-hover');
        ctaContainer.classList.add('cta-active');
    });

    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.classList.remove('cta-btn-hover');
        ctaContainer.classList.remove('cta-active');
    });

    // CTA Section functionality
    document.addEventListener('DOMContentLoaded', () => {
        const ctaButton = document.querySelector('.cta-btn');
        
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Smooth scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add visual feedback
                contactSection.classList.add('highlight');
                setTimeout(() => {
                    contactSection.classList.remove('highlight');
                }, 1000);
            }
        });
    });
});

// Testimonials Section
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialSection = document.querySelector('.testimonials');
    let currentTestimonial = 0;

    // Function to show next testimonial
    function showNextTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.style.opacity = '0';
            testimonial.style.transform = 'translateX(50px)';
        });

        testimonials[currentTestimonial].style.opacity = '1';
        testimonials[currentTestimonial].style.transform = 'translateX(0)';
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    // Initialize testimonials visibility
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = index === 0 ? '1' : '0';
        testimonial.style.transform = index === 0 ? 'translateX(0)' : 'translateX(50px)';
    });

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(showNextTestimonial, 8000);

    // Pause rotation on hover
    testimonialSection.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });

    // Resume rotation on mouse leave
    testimonialSection.addEventListener('mouseleave', () => {
        setInterval(showNextTestimonial, 5000);
    });

    // Intersection Observer for entrance animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                testimonialSection.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(testimonialSection);
});


// Contact Form Functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

    // Add floating label effect
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Prepare email template parameters
        const templateParams = {
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        emailjs.send('service_fzff4hv', 'template_fqxp4bf', templateParams)
            .then(function() {
                // Success feedback
                submitBtn.textContent = 'Message Sent!';
                submitBtn.classList.add('success');
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                }, 3000);

                // Reset floating labels
                inputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });
            })
            .catch(function(error) {
                // Error feedback
                submitBtn.textContent = 'Error! Try Again';
                submitBtn.classList.add('error');
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('error');
                }, 3000);
            });
    });

    // Add intersection observer for entrance animation
    const contactSection = document.querySelector('.contact');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
});

// About Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    const aboutContainers = document.querySelectorAll('.about-container');
    const mainImages = document.querySelectorAll('.main-image-container img');

    // Intersection Observer for about containers
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Add stagger effect to child elements
                const elements = entry.target.querySelectorAll('.highlight, p:not(.highlight)');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('slide-in');
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    // Observe each about container
    aboutContainers.forEach(container => {
        aboutObserver.observe(container);
    });

    // Image hover effect
    mainImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });

        // Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const rect = img.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.15;
                const yPos = -(rect.top * speed);
                img.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    // Text highlight effect on scroll
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseenter', () => {
            highlight.classList.add('glow');
        });

        highlight.addEventListener('mouseleave', () => {
            highlight.classList.remove('glow');
        });
    });
});

//products



// Products Section
const coffeeProducts = [
    { name: "AMERICANO", price: " ₱75" },
    { name: "LATTE", price: " ₱90" },
    { name: "CAPPUCINO", price: " ₱80" },
    { name: "SPANISH LATTE", price: " ₱110" },
    { name: "VANILLA LATTE", price: " ₱120" },
    { name: "HAZELNUT", price: " ₱120" },
    { name: "BUTTERSCOTCH", price: " ₱120" },
    { name: "CREME BRULEE", price: " ₱120" },
    { name: "TOFFEE NUT", price: " ₱120" },
    { name: "CAFE MOCHA", price: " ₱125" },
    { name: "WHITE MOCHA", price: " ₱125" },
    { name: "SALTED CARAMEL", price: " ₱125" },
    { name: "CARAMEL MACCHIATO", price: " ₱125" },
    { name: "SEA SALT CREAM", price: " ₱125 " }
];


const foodProducts = [
    { name: "BACON SANDWICH", price: " ₱130" },
    { name: "HAM SANDWICH", price: " ₱130" },
    { name: "SPAM SANDWICH", price: " ₱130" },
    { name: "FRIES (CHEESE)", price: " ₱65" },
    { name: "FRIES (BBQ)", price: " ₱65" },
    { name: "FRIES (SOUR CREAM)", price: " ₱65" },
    { name: "FRIES (SALT)", price: " ₱65" },
    { name: "CHEESE BEEF NACHOS", price: " ₱120" },
    { name: "CHEESY BACON FRIES", price: " ₱120" },
    { name: "NUGGETS AND MOJOS", price: " ₱110" },
    { name: "JALAPENO STICKS", price: " ₱75" },
    { name: "MOZARELLA STICKS", price: " ₱120" }
];

let currentIndex = { coffee: 0, food: 0 };

function showProduct(category) {
    console.log(`showProduct function called for ${category}`)
    console.log('Updating ${category} section');
    const nameElement = document.getElementById(`${category}-name`);
    const priceElement = document.getElementById(`${category}-price`);
    
    if (!nameElement || !priceElement) {
        console.error(`Elements not found for category: ${category}`);
        return;
    }

    const products = category === 'coffee' ? coffeeProducts : foodProducts;
    const product = products[currentIndex[category]];
    
    if (product) {
        nameElement.textContent = product.name;
        priceElement.textContent = product.price;
    }
  
}

function nextProduct(category) {
    const products = category === 'coffee' ? coffeeProducts : foodProducts;
    currentIndex[category] = (currentIndex[category] + 1) % products.length;
    showProduct(category);
}

function prevProduct(category) {
    const products = category === 'coffee' ? coffeeProducts : foodProducts;
    currentIndex[category] = (currentIndex[category] - 1 + products.length) % products.length;
    showProduct(category);
}


window.onload = function() {
    showProduct('coffee');
    showProduct('food');
};
