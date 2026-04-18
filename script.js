// Data Destinasi Wisata
const destinations = [
    {
        id: 1,
        name: "Taman Nasional Bunaken",
        description: "Surga bawah laut dengan keanekaragaman hayati laut tertinggi di dunia. Terumbu karang yang indah dan berbagai spesies ikan tropis.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uP3SibFKNughsTDcDuLBorwmEkAYgSIBQ&s",
        location: "https://maps.google.com/?q=Bunaken+National+Park",
        hours: "08:00 - 17:00 WITA",
        rating: 4.8,
        reviews: []

    },
    {
        id: 2,
        name: "Gunung Lokon",
        description: "Gunung berapi aktif dengan pemandangan menakjubkan dari puncaknya. Spot favorit untuk hiking dan melihat sunrise.",
        image: "https://cdn1-production-images-kly.akamaized.net/jSqbfbsOPPUisY7uahLFtp8faNw=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4841919/original/002398600_1716560987-WhatsApp_Image_2024-05-24_at_21.10.49.jpeg",
        location: "https://maps.google.com/?q=Mount+Lokon",
        hours: "06:00 - 16:00 WITA",
        rating: 4.5,
        reviews: []
    },
    {
        id: 3,
        name: "Danau Tondano",
        description: "Danau terluas di Sulawesi Utara dengan pemandangan indah dan restoran apung yang terkenal.",
        image: "https://img.inews.co.id/media/620/files/inews_new/2023/08/11/legenda_danau_tondano.jpg",
        location: "https://maps.google.com/?q=Lake+Tondano",
        hours: "24 Jam",
        rating: 4.3,
        reviews: []
    },
    {
        id: 4,
        name: "Pa'Dior Cultural Center",
        description: "Pusat kebudayaan yang menampilkan berbagai seni dan budaya khas Sulawesi Utara.",
        image: "https://indonesiakaya.com/wp-content/uploads/2020/10/7__IMG_8227_Di_sini_pengunjung_juga_bisa_melihat_alat_musik_tiup_contra_bass_berukuran_raksasa_CROP.jpg",
        location: "https://maps.google.com/?q=Pa%27Dior+Cultural+Center",
        hours: "09:00 - 18:00 WITA",
        rating: 4.6,
        reviews: []
    },
    {
        id: 5,
        name: "Danau Linow",
        description: "Danau unik yang dapat berubah warna karena kandungan belerang. Spot foto yang sangat populer.",
        image: "https://www.tempatwisata.pro/users_media/3150/Danau%20Linow.jpg",
        location: "https://maps.google.com/?q=Lake+Linow",
        hours: "07:00 - 18:00 WITA",
        rating: 4.7,
        reviews: []
    },
    {
        id: 6,
        name: "Paal Beach",
        description: "Pantai dengan pasir putih dan air jernih. Cocok untuk bersantai dan snorkeling.",
        image: "https://thumbs.dreamstime.com/b/beautiful-paal-beach-likupang-manado-indonesia-view-254006924.jpg",
        location: "https://maps.google.com/?q=Paal+Beach",
        hours: "07:00 - 18:00 WITA",
        rating: 4.4,
        reviews: []
    },
];

// Data Budaya
const culturalItems = [
    {
        id: 1,
        name: "Tari Kabasaran",
        description: "Tarian perang tradisional Minahasa yang menggambarkan keberanian prajurit. Para penari menggunakan pakaian adat lengkap dengan senjata parang dan tombak.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXt3Z040nKSOcU7gYiSu2NJcARKz-x5Xy_w&s",
        video: "https://youtu.be/27CqwfBq5No?si=9gCv_u--VgVHUCNt",
        history: "Tari Kabasaran berasal dari Minahasa, Sulawesi Utara. Tarian ini awalnya ditampilkan sebelum para prajurit berperang untuk membangkitkan semangat juang. Para penari disebut 'Kabasaran' yang berarti prajurit pilihan."
    },
    {
        id: 2,
        name: "Tari Maengket",
        description: "Tarian tradisional yang melambangkan rasa syukur atas hasil panen. Ditarikan secara berkelompok dengan gerakan lembut dan dinamis.",
        image: "https://images.unsplash.com/photo-1549476464-373e68f1f6e7?w=400",
        video: "https://youtu.be/hTzr3OBbPmo?si=_o8gN2omublEpWuhttps://i.ytimg.com/vi/hTzr3OBbPmo/maxresdefault.jpg",
        history: "Maengket adalah tarian panen yang sudah ada sejak zaman nenek moyang orang Minahasa sebagai ungkapan terima kasih kepada Tuhan atas hasil panen yang melimpah."
    },
    {
        id: 3,
        name: "Kolintang",
        description: "Alat musik tradisional dari kayu yang menghasilkan nada indah. Dimainkan dengan cara dipukul menggunakan stik khusus.",
        image: "https://akcdn.detik.net.id/visual/2023/04/27/alat-musik-kolintang_169.jpeg?w=1200",
        video: "https://youtu.be/qEERrx3-9Es?si=sQTlZhuldWG-9b_n",
        history: "Kolintang berasal dari kata 'Linting' yang berarti suara kecil. Alat musik ini berkembang di Minahasa sejak abad ke-19 dan terbuat dari kayu lokal seperti kayu cempaka."
    },
    {
        id: 4,
        name: "Rumah Panggung (Wale Wangko)",
        description: "Arsitektur tradisional rumah adat Minahasa dengan bentuk panggung dan atap yang menjulang tinggi.",
        image: "https://img.inews.co.id/media/1200/files/inews_new/2023/02/24/rumah_walewangko.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXchttps://youtu.be/zHY6nUVmGOU?si=9iz6XjC31Vv6PHHa",
        history: "Wale Wangko adalah rumah adat Minahasa yang digunakan sebagai tempat musyawarah dan upacara adat. Dibangun tanpa paku dengan struktur kayu yang kuat."
    }
];


// State Management
let currentPage = "home";

// Helper Functions
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star" style="color: #ffc107;"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt" style="color: #ffc107;"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star" style="color: #ffc107;"></i>';
    }
    return starsHTML;
}

function loadPage(page) {
    currentPage = page;
    const main = document.getElementById("app");
    
    switch(page) {
        case "home":
            main.innerHTML = renderHome();
            attachHomeEvents();
            break;
        case "sights":
            main.innerHTML = renderSights();
            attachSightsEvents();
            break;
        case "culture":
            main.innerHTML = renderCulture();
            attachCultureEvents();
            break;
        default:
            main.innerHTML = renderHome();
            attachHomeEvents();
    }
    
    // Update active nav
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}
function renderHome() {
    return `
        <div class="container">
            ${renderSlideshow()}
            
            <div class="quick-buttons">
                <div class="quick-card" data-nav="sights">
                    <i class="fas fa-mountain"></i>
                    <h3>See The Sights</h3>
                    <p>Jelajahi destinasi wisata terbaik</p>
                </div>
                <div class="quick-card" data-nav="culture">
                    <i class="fas fa-landmark"></i>
                    <h3>Cultural Information</h3>
                    <p>Kenali budaya Sulawesi Utara</p>
                </div>
                <div class="quick-card" id="travelCalcBtn">
                    <i class="fas fa-calculator"></i>
                    <h3>Travel Calculator</h3>
                    <p>Hitung estimasi biaya perjalanan</p>
                </div>
            </div>
        </div>
    `;
}

function renderSights() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">📍 Popular Sites di Sulawesi Utara</h2>
            <div class="destinations-grid">
                ${destinations.map(dest => `
                    <div class="destination-card" data-dest-id="${dest.id}">
                        <img src="${dest.image}" alt="${dest.name}" class="destination-img" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <div class="destination-info">
                            <h3>${dest.name}</h3>
                            <p>${dest.description.substring(0, 100)}${dest.description.length > 100 ? '...' : ''}</p>
                            <div class="rating">
                                ${renderStars(dest.rating)} (${dest.rating.toFixed(1)})
                            </div>
                            <button class="btn-detail" data-dest-id="${dest.id}">Lihat Detail</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCulture() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">🎭 Warisan Budaya Sulawesi Utara</h2>
            <p style="margin-bottom: 2rem;">Klik pada salah satu budaya untuk melihat informasi lengkap, foto, dan video edukasi</p>
            <div class="culture-grid">
                ${culturalItems.map(culture => `
                    <div class="culture-card" data-culture-id="${culture.id}">
                        <img src="${culture.image}" alt="${culture.name}" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <h3>${culture.name}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSouvenirs() {
    return `
        <div class="container">
            <h2 style="margin-bottom: 2rem; color: #1a5d4a;">🛍️ Produk UMKM Lokal - Oleh-oleh Khas</h2>
            <p style="margin-bottom: 2rem;">Dukung produk lokal dengan membeli langsung melalui WhatsApp</p>
            <div class="souvenir-grid">
                ${souvenirs.map(item => `
                    <div class="souvenir-card">
                        <img src="${item.image}" alt="${item.name}" class="souvenir-img" onerror="this.src='https://placehold.co/400x200?text=No+Image'">
                        <div class="souvenir-info">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <div class="price">${item.price}</div>
                            <button class="whatsapp-btn" data-wa="${item.whatsapp}" data-produk="${item.name}">
                                <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showDestinationModal(destId) {
    const dest = destinations.find(d => d.id === destId);
    if(!dest) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${dest.name}</h2>
            <img src="${dest.image}" alt="${dest.name}" style="width:100%; border-radius:10px; margin:1rem 0;" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            <p><strong>📝 Deskripsi:</strong> ${dest.description}</p>
            <p><strong>📍 Lokasi:</strong> <a href="${dest.location}" target="_blank" style="color:#ff6b35;">Lihat di Google Maps <i class="fas fa-external-link-alt"></i></a></p>
            <p><strong>🎫 Harga Tiket:</strong> ${dest.ticketPrice}</p>
            <p><strong>⏰ Jam Operasional:</strong> ${dest.hours}</p>
            <div class="rating">
                <strong>⭐ Rating:</strong> ${renderStars(dest.rating)} (${dest.rating.toFixed(1)})
            </div>
            
            <div class="review-input">
                <h4>💬 Berikan Review</h4>
                <select id="ratingSelect" style="padding:0.5rem; margin:0.5rem 0; border-radius:5px; border:1px solid #ddd;">
                    <option value="5">★★★★★ (5) - Luar biasa</option>
                    <option value="4">★★★★☆ (4) - Bagus</option>
                    <option value="3">★★★☆☆ (3) - Cukup</option>
                    <option value="2">★★☆☆☆ (2) - Kurang</option>
                    <option value="1">★☆☆☆☆ (1) - Buruk</option>
                </select>
                <textarea id="reviewText" placeholder="Tulis review Anda..." rows="3" style="width:100%; padding:0.5rem; border-radius:5px; border:1px solid #ddd;"></textarea>
                <button class="btn-secondary" id="submitReview" style="margin-top:0.5rem;">Kirim Review</button>
                
                <div class="review-list" id="reviewList" style="margin-top:1.5rem;">
                    <h4>📝 Review Pengunjung:</h4>
                    ${dest.reviews.length === 0 ? '<p style="color:#666;">Belum ada review. Jadilah yang pertama!</p>' : 
                        dest.reviews.map(r => `
                            <div class="review-item" style="background:#f1f5f9; padding:0.8rem; border-radius:8px; margin-bottom:0.8rem;">
                                <strong>⭐ ${r.rating}/5</strong>
                                <p style="margin:0.5rem 0;">${r.comment}</p>
                                <small style="color:#888;">📅 ${r.date}</small>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    
    const submitBtn = modal.querySelector('#submitReview');
    submitBtn.onclick = () => {
        const rating = parseInt(modal.querySelector('#ratingSelect').value);
        const comment = modal.querySelector('#reviewText').value.trim();
        if(comment) {
            dest.reviews.unshift({
                rating: rating,
                comment: comment,
                date: new Date().toLocaleDateString('id-ID')
            });
            // Update rating average
            const total = dest.reviews.reduce((sum, r) => sum + r.rating, 0);
            dest.rating = total / dest.reviews.length;
            modal.remove();
            showDestinationModal(destId);
        } else {
            alert('✏️ Mohon tulis review Anda terlebih dahulu!');
        }
    };
    
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function showCultureModal(cultureId) {
    const culture = culturalItems.find(c => c.id === cultureId);
    if(!culture) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>🎨 ${culture.name}</h2>
            <img src="${culture.image}" alt="${culture.name}" style="width:100%; border-radius:10px; margin:1rem 0;" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
            
            <h3>📖 Tentang ${culture.name}</h3>
            <p>${culture.description}</p>
            
            <h3>📜 Sejarah Singkat</h3>
            <p>${culture.history}</p>
            
            <h3>🎥 Video Edukasi</h3>
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; margin:1rem 0; border-radius:10px;">
                <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                    src="${culture.video}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
            <p style="font-size:0.85rem; color:#888; margin-top:0.5rem;">* Video edukasi tentang ${culture.name}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function showTravelCalculator() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>🧮 Travel Calculator</h2>
            <p>Hitung estimasi biaya perjalanan Anda di Sulawesi Utara</p>
            <hr style="margin:1rem 0;">
            <div style="margin:1rem 0;">
                <label><strong>📅 Jumlah Hari:</strong></label>
                <input type="number" id="days" value="3" min="1" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>👥 Jumlah Orang:</strong></label>
                <input type="number" id="people" value="2" min="1" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🏨 Jenis Penginapan:</strong></label>
                <select id="accommodation" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
                    <option value="300000">Budget (Rp 300.000/malam)</option>
                    <option value="600000">Menengah (Rp 600.000/malam)</option>
                    <option value="1000000">Mewah (Rp 1.000.000/malam)</option>
                </select>
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🚗 Transportasi/hari:</strong></label>
                <input type="number" id="transport" value="200000" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <div style="margin:1rem 0;">
                <label><strong>🍽️ Makan/hari/orang:</strong></label>
                <input type="number" id="food" value="150000" style="width:100%; padding:0.5rem; margin-top:0.3rem; border-radius:5px; border:1px solid #ddd;">
            </div>
            <button class="btn-primary" id="calculateBtn" style="width:100%; margin-top:1rem;">Hitung Total Biaya</button>
            <div id="calculationResult" style="margin-top:1.5rem; padding:1rem; background:#e2e8f0; border-radius:10px;">
                <h3>💰 Estimasi Biaya:</h3>
                <p id="totalCost" style="font-size:1.2rem; font-weight:bold; color:#1a5d4a;">-</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();
    
    const calculateBtn = modal.querySelector('#calculateBtn');
    calculateBtn.onclick = () => {
        const days = parseInt(modal.querySelector('#days').value);
        const people = parseInt(modal.querySelector('#people').value);
        const accomPrice = parseInt(modal.querySelector('#accommodation').value);
        const transport = parseInt(modal.querySelector('#transport').value);
        const food = parseInt(modal.querySelector('#food').value);
        
        const totalAccom = accomPrice * days;
        const totalTransport = transport * days;
        const totalFood = food * days * people;
        const total = totalAccom + totalTransport + totalFood;
        
        const resultElement = modal.querySelector('#totalCost');
        resultElement.innerHTML = `Rp ${total.toLocaleString('id-ID')} <span style="font-size:0.9rem; font-weight:normal;">(termasuk penginapan, transportasi, dan makan)</span>`;
        
        // Add breakdown
        const breakdown = `
            <div style="margin-top:1rem; font-size:0.9rem;">
                <hr style="margin:0.5rem 0;">
                <p>📋 Rincian:</p>
                <p>🏨 Penginapan: Rp ${totalAccom.toLocaleString('id-ID')}</p>
                <p>🚗 Transportasi: Rp ${totalTransport.toLocaleString('id-ID')}</p>
                <p>🍽️ Makan: Rp ${totalFood.toLocaleString('id-ID')}</p>
            </div>
        `;
        resultElement.innerHTML += breakdown;
    };
    
    modal.onclick = (e) => {
        if(e.target === modal) modal.remove();
    };
}

function attachHomeEvents() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = btn.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
    
    document.querySelectorAll('.quick-card[data-nav]').forEach(card => {
        card.addEventListener('click', () => {
            const page = card.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
    
    const travelCalcBtn = document.getElementById('travelCalcBtn');
    if(travelCalcBtn) {
        travelCalcBtn.addEventListener('click', showTravelCalculator);
    }
    
    // Inisialisasi slideshow
    startSlideshow();
    attachSlideshowEvents();
}
    
    

function attachSightsEvents() {
    document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const destId = parseInt(btn.getAttribute('data-dest-id'));
            showDestinationModal(destId);
        });
    });
}

function attachCultureEvents() {
    document.querySelectorAll('.culture-card').forEach(card => {
        card.addEventListener('click', () => {
            const cultureId = parseInt(card.getAttribute('data-culture-id'));
            showCultureModal(cultureId);
        });
    });
}

function attachSouvenirEvents() {
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const waNumber = btn.getAttribute('data-wa');
            const productName = btn.getAttribute('data-produk');
            const message = `Halo, saya tertarik dengan produk ${productName} dari NyiurGo. Apakah masih tersedia?`;
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        });
    });
}

// Navigation Handler
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if(page) loadPage(page);
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
}

// Initialize App
function init() {
    initNavigation();
    loadPage('home');
}
// ===== SLIDESHOW DATA & FUNCTIONS =====
const slides = [
    {
        image: "https://asset.tribunnews.com/v-nLazlUDr43roymCM-aQibKVfA=/1200x675/filters:upscale():quality(30):format(webp):focal(0.5x0.5:0.5x0.5)/manado/foto/bank/originals/foto-keindahan-taman-sindulang-manado-sulawesi-utara-rabu-26420238.jpg",
        title: "Taman Sindulang",
        description: "Keindahan taman kota di Manado"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU5KLpPFCVCHc_cffQaA5xhE0zLwBf3z-FQ&s",
        title: "Pesona Sulawesi Utara",
        description: "Destinasi wisata menakjubkan menanti Anda"
    },
    {
        image: "https://images.unsplash.com/photo-1589189373335-0f4f8b9d8f2c?w=1200",
        title: "Jelajahi Bunaken",
        description: "Surga bawah laut kelas dunia"
    }
];

let currentSlide = 0;
let slideInterval;

function renderSlideshow() {
    return `
        <div class="hero-slideshow" id="heroSlideshow">
            ${slides.map((slide, index) => `
                <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}');">
                    <div class="slide-content">
                        <h2>${slide.title}</h2>
                        <p>${slide.description}</p>
                        <button class="slide-btn" data-nav="sights">Mulai Jelajahi</button>
                    </div>
                </div>
            `).join('')}
            <div class="slide-dots">
                ${slides.map((_, index) => `
                    <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
                `).join('')}
            </div>
        </div>
    `;
}

function startSlideshow() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        goToSlide(nextSlide);
    }, 5000);
}

function goToSlide(index) {
    const slidesElements = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slidesElements.length === 0) return;
    
    slidesElements[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slidesElements[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function attachSlideshowEvents() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(dot.getAttribute('data-slide'));
            goToSlide(index);
            startSlideshow(); // Reset timer
        });
    });
    
    // Tombol "Mulai Jelajahi" di slideshow
    const slideBtns = document.querySelectorAll('.slide-btn');
    slideBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = btn.getAttribute('data-nav');
            if(page) loadPage(page);
        });
    });
}
// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);