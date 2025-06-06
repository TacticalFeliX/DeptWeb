// Sidebar functionality
let sidebarOpen = false;
const openDropdowns = new Set();
const openSitemapDropdowns = new Set();


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (sidebarOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  sidebar.classList.add('active');
  overlay.classList.add('active');
  sidebarOpen = true;

  // Prevent body scroll when sidebar is open
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  sidebarOpen = false;

  // Restore body scroll
  document.body.style.overflow = '';
}

function toggleDropdown(dropdownName) {
  const dropdown = document.getElementById(dropdownName + '-dropdown');
  const parent = dropdown.parentElement;

  if (openDropdowns.has(dropdownName)) {
    // Close dropdown
    dropdown.classList.remove('active');
    parent.classList.remove('active');
    openDropdowns.delete(dropdownName);
  } else {
    // Open dropdown
    dropdown.classList.add('active');
    parent.classList.add('active');
    openDropdowns.add(dropdownName);
  }
}

function toggleSitemapDropdown(dropdownName) {
  const dropdown = document.getElementById(dropdownName + '-sitemap');
  const button = dropdown.previousElementSibling;
  
  // Close all other open sitemap dropdowns first
  openSitemapDropdowns.forEach(openDropdownName => {
    if (openDropdownName !== dropdownName) {
      const otherDropdown = document.getElementById(openDropdownName + '-sitemap');
      const otherButton = otherDropdown.previousElementSibling;
      otherDropdown.classList.remove('active');
      otherButton.classList.remove('active');
      openSitemapDropdowns.delete(openDropdownName);
    }
  });
  
  if (openSitemapDropdowns.has(dropdownName)) {
    // Close dropdown
    dropdown.classList.remove('active');
    button.classList.remove('active');
    openSitemapDropdowns.delete(dropdownName);
  } else {
    // Open dropdown
    dropdown.classList.add('active');
    button.classList.add('active');
    openSitemapDropdowns.add(dropdownName);
  }
}

// Close sidebar when clicking on links
document.addEventListener('DOMContentLoaded', function () {
  const sidebarLinks = document.querySelectorAll('.sidebar-menu a:not(.dropdown-btn)');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeSidebar();
    });
  });

  // Close sidebar on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebarOpen) {
      closeSidebar();
    }
  });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close sidebar if open
        if (sidebarOpen) {
          closeSidebar();
        }
      }
    });
  });
});





window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});


const images = [
  "files/images/home-bg/image2.png",
  "files/images/home-bg/image3.png",
  "files/images/home-bg/image4.png",
  "files/images/home-bg/image5.png",
];


let currentIndex = 0;

const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

function changeImage() {
  const slider = document.getElementById("slider");


  slider.style.opacity = 0;
  setTimeout(() => {
    slider.style.backgroundImage = `url('${images[currentIndex]}')`;
    slider.style.opacity = 1;
  }, 0);

  currentIndex = (currentIndex + 1) % images.length;
}

document.addEventListener("DOMContentLoaded", () => {
  preloadImages();
  changeImage();
  setInterval(changeImage, 10000);
});

var typed = new Typed(".typed-text", {
  strings: ["", ",we are Innovaters"],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 2000,
  smartbackspace: true,
  loop: true,
  showCursor: false,

});
const container = document.getElementById("About-us-container-right");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor(0xffffff);
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);


const geometry = new THREE.BufferGeometry();
const vertices = [];

const size = 1;
const points4D = [];
for (let i = 0; i < 16; i++) {
  const x = (i & 1 ? 0.8 : -1) * size;
  const y = (i & 2 ? 0.8 : -1) * size;
  const z = (i & 4 ? 0.8 : -1) * size;
  const w = (i & 8 ? 0.8 : -1) * size;

  const factor = 1 / (2 - w / size);
  points4D.push(new THREE.Vector3(x * factor, y * factor, z * factor));
}

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 4; j++) {
    const neighbor = i ^ (1 << j);
    if (i < neighbor) {
      vertices.push(points4D[i].x, points4D[i].y, points4D[i].z);
      vertices.push(points4D[neighbor].x, points4D[neighbor].y, points4D[neighbor].z);
    }
  }
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.LineBasicMaterial({ color: 0x00BFFF });
const cube = new THREE.LineSegments(geometry, material);
scene.add(cube);


camera.position.z = 5.2;
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});
