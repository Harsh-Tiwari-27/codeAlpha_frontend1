/* ═══════════════════════════════════════════════════
   EXO APE GALLERY — SCRIPT
   ═══════════════════════════════════════════════════ */

const projects = [
  {
    title: "Speed & Style",
    subtitle: "Automotive Portrait Series",
    description: "A curated collection exploring the artistry of automotive design — where raw horsepower meets sculptural elegance.",
    year: "2024",
    category: "Automotive",
    client: "AutoVision Magazine",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600",
    detail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400",
    gridImages: [
      {
        src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
        title: "Silver Arrow",
        photographer: "Erik Mclean",
        description: "A sleek silver sports car captured in motion, showcasing aerodynamic curves and aggressive stance.",
        camera: "Canon EOS R5",
        location: "Munich, Germany",
        tags: ["sports car", "silver", "motion"]
      },
      {
        src: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800",
        title: "Desert Cruiser",
        photographer: "Campbell Boulanger",
        description: "A vintage muscle car against a golden desert backdrop, blending retro American culture with natural beauty.",
        camera: "Nikon Z7 II",
        location: "Arizona, USA",
        tags: ["vintage", "muscle car", "desert"]
      },
      {
        src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800",
        title: "Neon Night Ride",
        photographer: "Samuele Errico Piccarini",
        description: "An exotic supercar illuminated by vibrant neon city lights, capturing the energy of nighttime urban driving.",
        camera: "Sony A7 IV",
        location: "Tokyo, Japan",
        tags: ["supercar", "neon", "night"]
      }
    ]
  },
  {
    title: "Drive Culture",
    subtitle: "Street & Performance",
    description: "Documenting the passionate community of car enthusiasts — from underground meetups to iconic racetracks.",
    year: "2024",
    category: "Lifestyle",
    client: "Petrolhead Studios",
    image: "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=600",
    detail: "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=1400",
    gridImages: [
      {
        src: "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=800",
        title: "Midnight Black",
        photographer: "Unsplash Premium",
        description: "A matte black luxury sedan exuding understated power, in a dramatic low-light studio environment.",
        camera: "Hasselblad X2D",
        location: "Los Angeles, USA",
        tags: ["luxury", "sedan", "matte black"]
      },
      {
        src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
        title: "Open Road",
        photographer: "Peter Broomfield",
        description: "A classic American car cruising an endless highway, symbolizing freedom and the allure of the open road.",
        camera: "Canon 5D Mark IV",
        location: "Route 66, USA",
        tags: ["classic", "highway", "freedom"]
      },
      {
        src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        title: "Sunset Racer",
        photographer: "Joey Banks",
        description: "A performance vehicle silhouetted against a burning sunset, dramatic contrast between machine and nature.",
        camera: "Fujifilm GFX 100S",
        location: "Malibu, USA",
        tags: ["sunset", "silhouette", "performance"]
      }
    ]
  },
  {
    title: "Electric Future",
    subtitle: "Next-Gen Mobility",
    description: "Exploring the bold frontier of electric vehicles — where sustainable innovation meets breathtaking design.",
    year: "2025",
    category: "Technology",
    client: "Volt Media Group",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600",
    detail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1400",
    gridImages: [
      {
        src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
        title: "EV Prototype",
        photographer: "Bram Van Oost",
        description: "A cutting-edge electric concept car with fluid lines hinting at a sustainable future.",
        camera: "Sony A1",
        location: "Geneva, Switzerland",
        tags: ["electric", "concept", "futuristic"]
      },
      {
        src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800",
        title: "Charging Station",
        photographer: "CHUTTERSNAP",
        description: "A sleek EV at a modern charging station, representing the evolving clean transport infrastructure.",
        camera: "Nikon D850",
        location: "Oslo, Norway",
        tags: ["charging", "infrastructure", "clean energy"]
      },
      {
        src: "https://images.unsplash.com/photo-1668293750324-bd77c1f08ca9?w=800",
        title: "Silent Power",
        photographer: "Hyundai Motor Group",
        description: "An electric hypercar with blistering acceleration in a whisper-quiet powertrain.",
        camera: "Phase One IQ4",
        location: "Seoul, South Korea",
        tags: ["hypercar", "electric", "speed"]
      }
    ]
  },
  {
    title: "Luxury Motion",
    subtitle: "Premium Automotive",
    description: "Celebrating the pinnacle of luxury automotive craftsmanship — bespoke finishes, timeless design.",
    year: "2025",
    category: "Luxury",
    client: "Prestige Auto Quarterly",
    image: "https://images.unsplash.com/photo-1778084765801-a53bc6dc5f96?w=600",
    detail: "https://images.unsplash.com/photo-1778084765801-a53bc6dc5f96?w=1400",
    gridImages: [
      {
        src: "https://images.unsplash.com/photo-1778084765801-a53bc6dc5f96?w=800",
        title: "Grand Tourer",
        photographer: "Unsplash Collection",
        description: "A grand touring coupe on a winding mountain road, fusing comfort and spirited driving dynamics.",
        camera: "Leica SL2",
        location: "Swiss Alps",
        tags: ["grand tourer", "mountains", "luxury"]
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?w=800",
        title: "Showroom Elegance",
        photographer: "Unsplash Premium",
        description: "A premium vehicle in a pristine showroom with dramatic lighting accentuating every detail.",
        camera: "Canon EOS R3",
        location: "London, UK",
        tags: ["showroom", "elegance", "premium"]
      },
      {
        src: "https://images.unsplash.com/photo-1778142375628-73010ebde16a?w=800",
        title: "Crafted Interior",
        photographer: "Unsplash Collection",
        description: "Handcrafted interior featuring supple leather, brushed aluminum, and ambient lighting.",
        camera: "Sony A7R V",
        location: "Stuttgart, Germany",
        tags: ["interior", "craftsmanship", "leather"]
      }
    ]
  },
  {
    title: "Rino & Pelle",
    subtitle: "Effortless Chic Lifestyle",
    description: "A fashion-forward editorial capturing effortless European style — bold textures and magnetic confidence.",
    year: "2024",
    category: "Fashion",
    client: "Rino & Pelle",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
    detail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400",
    gridImages: [
      {
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        title: "Runway Moment",
        photographer: "Kris Atomic",
        description: "A model striding down the runway in a statement outfit, the electric atmosphere of fashion.",
        camera: "Canon EOS R5",
        location: "Milan, Italy",
        tags: ["runway", "fashion", "model"]
      },
      {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        title: "Street Style",
        photographer: "Dom Hill",
        description: "A candid street-style shot with bold color blocking and confident urban attitude.",
        camera: "Sony A7 IV",
        location: "Paris, France",
        tags: ["street style", "urban", "color"]
      },
      {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        title: "Portrait Editorial",
        photographer: "Amir Seilsepour",
        description: "A striking close-up portrait with natural lighting highlighting minimalist styling and beauty.",
        camera: "Nikon Z8",
        location: "Amsterdam, Netherlands",
        tags: ["portrait", "editorial", "beauty"]
      }
    ]
  }
];


/* ── DOM REFS ── */
const gallery     = document.getElementById('galleryWrapper');
const items       = document.querySelectorAll('.gallery-item');
const closeBtn    = document.getElementById('closeBtn');
const bottomInfo  = document.getElementById('bottomProjectInfo');
const bottomTitle = document.getElementById('bottomTitle');
const bottomSub   = document.getElementById('bottomSub');

// Project view
const projectView  = document.getElementById('projectView');
const pvBg         = document.getElementById('pvBg');
const pvTitle      = document.getElementById('pvTitle');
const pvSubtitle   = document.getElementById('pvSubtitle');
const pvThumb      = document.getElementById('pvThumb');
const pvCounter    = document.getElementById('pvCounter');
const pvBack       = document.getElementById('pvBack');
const pvPrev       = document.getElementById('pvPrev');
const pvNext       = document.getElementById('pvNext');
const pvViewAction = document.getElementById('pvViewAction');

// Detail panel
const detailPanel = document.getElementById('detailPanel');
const dpCard      = document.getElementById('dpCard');
const dpMainImg   = document.getElementById('dpMainImg');
const dpThumbs    = document.getElementById('dpThumbs');
const dpTitle     = document.getElementById('dpTitle');
const dpDesc      = document.getElementById('dpDesc');

let currentIndex = 0;
let isDragging   = false;
let startX       = 0;
let scrollStart  = 0;
let dragDist     = 0;


/* ═══════════════════════════════════════════════════
   DRAG SCROLL
   ═══════════════════════════════════════════════════ */

gallery.addEventListener('mousedown', (e) => {
  isDragging  = true;
  startX      = e.pageX;
  scrollStart = gallery.scrollLeft;
  dragDist    = 0;
  gallery.classList.add('dragging');
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const moved = e.pageX - startX;
  dragDist    = Math.abs(moved);
  gallery.scrollLeft = scrollStart - moved;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  gallery.classList.remove('dragging');
});

gallery.addEventListener('touchstart', (e) => {
  startX      = e.touches[0].pageX;
  scrollStart = gallery.scrollLeft;
  dragDist    = 0;
});

gallery.addEventListener('touchmove', (e) => {
  const moved = e.touches[0].pageX - startX;
  dragDist    = Math.abs(moved);
  gallery.scrollLeft = scrollStart - moved;
});


/* ═══════════════════════════════════════════════════
   HOVER — Show project name in bottom bar
   ═══════════════════════════════════════════════════ */

items.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const idx = parseInt(item.dataset.index);
    const p   = projects[idx];
    bottomTitle.textContent = p.title;
    bottomSub.textContent   = p.subtitle;
    bottomInfo.classList.add('visible');
  });

  item.addEventListener('mouseleave', () => {
    bottomInfo.classList.remove('visible');
  });
});


/* ═══════════════════════════════════════════════════
   PROJECT VIEW (Full-screen Exo Ape style)
   ═══════════════════════════════════════════════════ */

function openProject(index) {
  currentIndex = index;
  const p = projects[index];

  pvBg.style.backgroundImage = `url(${p.detail})`;
  pvTitle.textContent    = p.title;
  pvSubtitle.textContent = p.subtitle;
  pvThumb.src            = p.detail;

  const cur = String(index + 1).padStart(2, '0');
  const tot = String(projects.length).padStart(2, '0');
  pvCounter.textContent = `${cur} / ${tot}`;

  // Re-trigger entrance animations
  const thumbWrap = document.querySelector('.pv-thumb-wrap');
  pvTitle.style.animation      = 'none';
  pvSubtitle.style.animation   = 'none';
  thumbWrap.style.animation    = 'none';
  pvViewAction.style.animation = 'none';

  void pvTitle.offsetHeight; // reflow

  pvTitle.style.animation      = 'pvFadeUp 0.7s 0.2s ease forwards';
  pvSubtitle.style.animation   = 'pvFadeUp 0.6s 0.35s ease forwards';
  thumbWrap.style.animation    = 'pvThumbIn 0.8s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) forwards';
  pvViewAction.style.animation = 'pvFadeUp 0.5s 0.55s ease forwards';

  projectView.classList.add('active');
}

function closeProject() {
  projectView.classList.remove('active');
}


/* ═══════════════════════════════════════════════════
   DETAIL PANEL (image info)
   ═══════════════════════════════════════════════════ */

function openDetail(index) {
  const p = projects[index];

  // Set initial main image and text
  if (p.gridImages && p.gridImages.length > 0) {
    dpMainImg.src = p.gridImages[0].src;
    dpTitle.textContent = p.gridImages[0].title;
    dpDesc.textContent = p.gridImages[0].description;
  } else {
    dpMainImg.src = p.detail;
    dpTitle.textContent = p.title;
    dpDesc.textContent = p.description;
  }

  // Populate thumbnails
  dpThumbs.innerHTML = '';
  p.gridImages.forEach((img, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'dp-thumb-item' + (i === 0 ? ' active' : '');
    thumb.src = img.src;
    thumb.alt = img.title;

    thumb.addEventListener('click', () => {
      dpMainImg.style.opacity = 0.3;
      setTimeout(() => {
        dpMainImg.src = img.src;
        dpTitle.textContent = img.title;
        dpDesc.textContent = img.description;
        dpMainImg.style.opacity = 1;
      }, 150);

      document.querySelectorAll('.dp-thumb-item').forEach(el => el.classList.remove('active'));
      thumb.classList.add('active');
    });

    dpThumbs.appendChild(thumb);
  });

  detailPanel.classList.add('active');
}

function closeDetail() {
  detailPanel.classList.remove('active');
}



/* ═══════════════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════════════ */

/* Click gallery item → open full-screen project view */
items.forEach((item) => {
  item.addEventListener('click', () => {
    if (dragDist > 5) return;
    openProject(parseInt(item.dataset.index));
  });
});

/* "View" button in project view → open detail panel */
pvViewAction.addEventListener('click', () => {
  openDetail(currentIndex);
});

/* Close buttons */
pvBack.addEventListener('click', closeProject);
closeBtn.addEventListener('click', closeProject);
detailPanel.addEventListener('click', (e) => {
  if (e.target === detailPanel) closeDetail();
});

/* Navigation arrows */
pvPrev.addEventListener('click', () => {
  openProject((currentIndex - 1 + projects.length) % projects.length);
});

pvNext.addEventListener('click', () => {
  openProject((currentIndex + 1) % projects.length);
});

/* Keyboard shortcuts */
document.addEventListener('keydown', (e) => {
  if (detailPanel.classList.contains('active')) {
    if (e.key === 'Escape') closeDetail();
    return;
  }

  if (projectView.classList.contains('active')) {
    if (e.key === 'Escape')     closeProject();
    if (e.key === 'ArrowLeft')  pvPrev.click();
    if (e.key === 'ArrowRight') pvNext.click();
    if (e.key === 'Enter')      openDetail(currentIndex);
    return;
  }
});