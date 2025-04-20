document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Destinations Loading
    const destinationsContainer = document.getElementById('destinations-container');
    const destinations = [
        {
            id: 'baghdad',
            title: 'بغداد',
            image: 'https://www.aljazeera.net/wp-content/uploads/2024/03/GettyImages-512508345-1709460811.jpg?resize=1920%2C1080',
            description: 'عاصمة العراق ومركزها الثقافي والتجاري، تتميز بتاريخها العريق ومعالمها الأثرية.'
        },
        {
            id: 'basra',
            title: 'البصرة',
            image: 'https://i0.wp.com/albasra.com/wp-content/uploads/2021/06/%D8%A7%D9%84%D8%AC%D8%B3%D8%B1.jpg?fit=1280%2C720&ssl=1',
            description: 'مدينة الجنوب الساحرة المعروفة بموانئها وأشجار النخيل الكثيفة.'
        },
        {
            id: 'mosul',
            title: 'الموصل',
            image: 'https://assafirarabi.com/wp-content/uploads/archive/39b8adf7-72a0-49d7-aca7-482c9c74f1c0.jpg',
            description: 'عاصمة محافظة نينوى، تشتهر بتراثها التاريخي وموقعها الاستراتيجي.'
        },
        {
            id: 'karbala',
            title: 'كربلاء',
            image: 'https://annabaa.org/aarticles/fileM/23/5700e7330e70f.jpg',
            description: 'مدينة مقدسة تحتضن ضريح الإمام الحسين (ع) وتزخر بالمشاعر الدينية.'
        },
        {
            id: 'najaf',
            title: 'النجف',
            image: 'https://fajerweb.org//uploaded/essaysimages/small/20170716105050.jpg',
            description: 'مركز العلم والدين، تضم مرقد الإمام علي (ع) ومدارس دينية عريقة.'
        },
        {
            id: 'erbil',
            title: 'أربيل',
            image: 'https://www.hawlergov.org/app/files/644108Image1.jpg',
            description: 'عاصمة إقليم كردستان، تتميز بقلعتها التاريخية وطبيعتها الخلابة.'
        }
    ];

    function loadDestinations() {
        destinationsContainer.innerHTML = '';
        destinations.forEach(destination => {
            const destinationCard = document.createElement('div');
            destinationCard.className = 'destination-card';
            destinationCard.innerHTML = `
                <img src="${destination.image}" alt="${destination.title}" class="destination-img">
                <div class="destination-content">
                    <h3 class="destination-title">${destination.title}</h3>
                    <p class="destination-description">${destination.description}</p>
                    <button class="luxury-btn destination-btn" data-id="${destination.id}">استكشف <i class="fas fa-arrow-left"></i></button>
                </div>
            `;
            destinationsContainer.appendChild(destinationCard);
        });
    }

    loadDestinations();

    // Dynamic Gallery Loading
    const galleryContainer = document.getElementById('gallery-container');
    const galleryImages = [
        {
            id: 'g1',
            title: 'شارع المتنبي',
            location: 'بغداد',
            image: 'https://www.aljazeera.net/wp-content/uploads/2021/12/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D8%AA%D9%86%D8%A8%D9%8A-%D8%AE%D8%A7%D8%B5-%D9%84%D9%84%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-.jpeg?w=770&resize=770%2C513'
        },
        {
            id: 'g2',
            title: 'شط العرب',
            location: 'البصرة',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/19/7b/ce/shatt-al-arab.jpg'
        },
        {
            id: 'g3',
            title: 'قلعة أربيل',
            location: 'أربيل',
            image: 'https://www.eia.krd/azure/files/ContentFiles/150Image.jpeg?v=297158'
        },
        {
            id: 'g4',
            title: 'مرقد الإمام الحسين',
            location: 'كربلاء',
            image: 'https://i.ytimg.com/vi/XmkMZXto5P0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJdmBji_bdBwDptd_e42vZbt64rA'
        },
        {
            id: 'g5',
            title: 'المسجد الكبير',
            location: 'الموصل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Grand_mosque_of_Mosul_.jpg'
        },
        {
            id: 'g6',
            title: 'مرقد الإمام علي',
            location: 'النجف',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Imam_Ali_Shrine_%281%29.jpg'
        },
        {
            id: 'g7',
            title: 'نصب الشهيد',
            location: 'بغداد',
            image: 'https://shiawaves.com/arabic/wp-content/uploads/sites/3/2023/11/30-1.jpg'
        },
        {
            id: 'g8',
            title: 'جبال كردستان',
            location: 'دهوك',
            image: 'https://www.iqiraq.news/uploads/posts/2021-01/upload_1610785396_1496562286.jpg'
        }
    ];

    function loadGallery() {
        galleryContainer.innerHTML = '';
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.image}" alt="${image.title}">
                <div class="gallery-overlay">
                    <h3 class="gallery-title">${image.title}</h3>
                    <p class="gallery-location">${image.location}</p>
                </div>
            `;
            galleryContainer.appendChild(galleryItem);
        });
    }

    loadGallery();

    // Travel Planner Functionality
    const departureSelect = document.getElementById('departure-select');
    const arrivalSelect = document.getElementById('arrival-select');
    const transportOptions = document.querySelectorAll('.transport-option');
    const durationElement = document.getElementById('duration');
    const costElement = document.getElementById('cost');
    const distanceElement = document.getElementById('distance');
    const plannerMap = document.getElementById('planner-map');

    // Governorates data with distances from Baghdad (in km)
    const governorates = [
        { name: 'بغداد', value: 'baghdad', distance: 0 },
        { name: 'البصرة', value: 'basra', distance: 550 },
        { name: 'الموصل', value: 'mosul', distance: 400 },
        { name: 'كربلاء', value: 'karbala', distance: 100 },
        { name: 'النجف', value: 'najaf', distance: 160 },
        { name: 'أربيل', value: 'erbil', distance: 350 },
        { name: 'السليمانية', value: 'sulaymaniyah', distance: 330 },
        { name: 'دهوك', value: 'dohuk', distance: 420 },
        { name: 'ديالى', value: 'diyala', distance: 80 },
        { name: 'صلاح الدين', value: 'salahuddin', distance: 180 },
        { name: 'بابل', value: 'babylon', distance: 90 },
        { name: 'واسط', value: 'wasit', distance: 180 },
        { name: 'ميسان', value: 'maysan', distance: 380 },
        { name: 'ذي قار', value: 'dhiqar', distance: 350 },
        { name: 'المثنى', value: 'muthanna', distance: 280 },
        { name: 'القادسية', value: 'qadisiyah', distance: 180 },
        { name: 'الأنبار', value: 'anbar', distance: 120 },
        { name: 'كركوك', value: 'kirkuk', distance: 250 }
    ];

    // Populate governorate selects
    governorates.forEach(gov => {
        const departureOption = document.createElement('option');
        departureOption.value = gov.value;
        departureOption.textContent = gov.name;
        departureSelect.appendChild(departureOption);
        
        const arrivalOption = departureOption.cloneNode(true);
        arrivalSelect.appendChild(arrivalOption);
    });

    // Set default transport option
    let selectedTransport = null;

    // Transport option selection
    transportOptions.forEach(option => {
        option.addEventListener('click', function() {
            transportOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedTransport = this.getAttribute('data-transport');
            calculateTrip();
        });
    });

    // Calculate trip details
    function calculateTrip() {
        const departure = departureSelect.value;
        const arrival = arrivalSelect.value;
        
        if (!departure || !arrival || !selectedTransport) return;
        
        const departureGov = governorates.find(g => g.value === departure);
        const arrivalGov = governorates.find(g => g.value === arrival);
        
        // Simple distance calculation (in a real app, use actual distances or API)
        const distance = Math.abs(arrivalGov.distance - departureGov.distance);
        
        let duration = 0;
        let cost = 0;
        
        switch(selectedTransport) {
            case 'walk':
                duration = distance * 15; // 4 km/h average walking speed
                cost = 0;
                break;
            case 'car':
                duration = distance / 60 * 60; // 60 km/h average speed
                cost = distance * 100; // 100 IQD per km
                break;
            case 'train':
                duration = distance / 80 * 60; // 80 km/h average speed
                cost = distance * 50; // 50 IQD per km
                break;
            case 'aircraft':
                duration = 30 + (distance / 500 * 60); // 500 km/h average speed + 30 min for airport
                cost = distance * 200; // 200 IQD per km
                break;
        }
        
        // Format duration
        let durationText = '';
        if (duration >= 60) {
            const hours = Math.floor(duration / 60);
            const minutes = Math.round(duration % 60);
            durationText = `${hours} ساعة ${minutes > 0 ? minutes + ' دقيقة' : ''}`;
        } else {
            durationText = `${Math.round(duration)} دقيقة`;
        }
        
        // Format cost
        const costText = cost > 0 ? `${cost.toLocaleString()} دينار` : 'مجاناً';
        
        // Update UI
        durationElement.textContent = durationText;
        costElement.textContent = costText;
        distanceElement.textContent = `${distance.toLocaleString()} كم`;
        
        // Update map placeholder
        plannerMap.innerHTML = `
            <div class="map-content">
                <h3>من ${departureGov.name} إلى ${arrivalGov.name}</h3>
                <p>المسافة: ${distance.toLocaleString()} كم</p>
                <p>طريقة السفر: ${getTransportName(selectedTransport)}</p>
                <p>المدة المتوقعة: ${durationText}</p>
                <p>التكلفة التقريبية: ${costText}</p>
            </div>
        `;
    }

    function getTransportName(transport) {
        switch(transport) {
            case 'walk': return 'سيراً';
            case 'car': return 'سيارة';
            case 'train': return 'قطار';
            case 'aircraft': return 'طائرة';
            default: return '';
        }
    }

    // Event listeners for travel planner
    departureSelect.addEventListener('change', calculateTrip);
    arrivalSelect.addEventListener('change', calculateTrip);

    // Form submission
    const contactForm = document.querySelector('.luxury-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
        this.reset();
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Explore button functionality
    document.querySelector('.explore-btn').addEventListener('click', function() {
        document.getElementById('destinations').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Destination button click handler
    document.addEventListener('click', function(e) {
        if (e.target.closest('.destination-btn')) {
            e.preventDefault();
            const button = e.target.closest('.destination-btn');
            const destinationId = button.getAttribute('data-id');
            const destination = destinations.find(d => d.id === destinationId);
            
            // Create a fancy modal
            const modal = document.createElement('div');
            modal.className = 'luxury-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>${destination.title}</h3>
                    <img src="${destination.image}" alt="${destination.title}">
                    <p>${destination.description}</p>
                    <p>هذه المحافظة من أجمل المناطق في العراق وتتميز بتاريخها العريق وتراثها الثقافي الغني. يمكنك زيارتها والتمتع بمعالمها السياحية الفريدة.</p>
                    <button class="luxury-btn plan-trip-btn" data-destination="${destination.id}">خطط رحلة إلى هنا</button>
                </div>
            `;
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Close modal
            modal.querySelector('.close-modal').addEventListener('click', function() {
                modal.remove();
                document.body.style.overflow = '';
            });
            
            // Plan trip button
            modal.querySelector('.plan-trip-btn').addEventListener('click', function() {
                arrivalSelect.value = destination.id;
                calculateTrip();
                modal.remove();
                document.body.style.overflow = '';
                document.getElementById('travel-planner').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.destination-card, .gallery-item, .planner-card, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.destination-card, .gallery-item, .planner-card, .info-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});