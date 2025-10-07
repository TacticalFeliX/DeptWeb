// This robust listener waits for the entire page, including all scripts, to be fully loaded.
window.addEventListener('load', () => {
    const headerContainer = document.getElementById('header');
    const sidebarContainer = document.getElementById('sidebar');
    const footerContainer = document.getElementById('footer');
    // --- Inject Header HTML ---
    headerContainer.innerHTML = `
                <div class="header-container">
                    <a href="#" class="logo-container">
                        <img src="../files/images/logo1.webp" alt="IIT Indore Logo" />
                        <div class="logo-text">
                            <p class="title">Department of Physics</p>
                            <p class="subtitle">Indian Instuite Of Technology Indore</p>
                        </div>
                    </a>
                    <nav class="desktop-nav" id="desktop-nav"></nav>
                    <button class="hamburger-btn" id="hamburger-btn">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            `;
    // --- Inject Sidebar HTML ---
    sidebarContainer.innerHTML = `
                <div class="sidebar-header">
                    <h3 style="font-weight: 600; font-size: 1.2rem;">Menu</h3>
                    <button id="sidebar-close-btn" class="sidebar-close-btn">&times;</button>
                </div>
                <nav id="sidebar-nav" class="sidebar-nav"></nav>
            `;
    // --- Inject Footer HTML ---
    footerContainer.innerHTML = `
                <div class="footer-container">
                  <div class="footer-grid">
                    <div class="footer-about">
                      <div class="footer-logo-container">
                        <img src="./files/images/logo1.webp" alt="Logo" />
                        <div class="footer-logo-text">
                          <h2>Department of Physics</h2>
                          <p>IIT Indore</p>
                        </div>
                      </div>
                      <p>Dedicated to advancing the frontiers of physics through innovative research, rigorous education, and a commitment to scientific discovery.</p>
                    </div>
                    <div class="footer-links">
                      <h3>Quick Links</h3>
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Activites</a></li>
                      </ul>
                    </div>
                    <div class="footer-links">
                      <h3>Contact Us</h3>
                      <ul>
                        <li class="footer-contact-item"><span>📍</span><span>Khandwa Road, Simrol, Indore, 453552</span></li>
                        <li class="footer-contact-item"><span>📧</span><a href="mailto:info@iiti.ac.in">info@iiti.ac.in</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="footer-bottom">
                    <p>&copy; 2025 Department of Physics, IIT Indore. All rights reserved.</p>
                  </div>
                </div>
            `;
});
// This robust listener waits for the entire page, including all scripts, to be fully loaded.
window.addEventListener('load', () => {
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // --- Now that HTML is injected, run the interactive scripts ---
    initializeInteractiveScripts();
});

function initializeInteractiveScripts() {
    const desktopNav = document.getElementById('desktop-nav');
    const sidebarNav = document.getElementById('sidebar-nav');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const header = document.getElementById('header');

    const navigationItems = [
        { name: 'HOME', href: '../index.html' },
        { name: 'ABOUT US', subItems: [{ name: 'HOD Desk', href: '../hoddesk.html' }, { name: 'Department Insights', href: '../depins.html' }] },
        { name: 'ACADEMICS', subItems: [{ name: 'B.TECH (Engg Physics)', href: '../btech.html' }, { name: 'M.Sc. in Physics', href: '../mscphy.html' }, { name: 'PhD Program', href: '../phdphy.html' }] },
        {
            name: 'PEOPLE', subItems: [
                { name: 'Faculty', href: '../faculty.html' },
                { name: 'Former Faculty', href: '../formerfaculty.html' },
                { name: 'Administration', href: '../admin.html' },
                { name: 'Postdocs & Visitors', href: '../pdocsvis.html' },
                { name: 'PhD Students', href: 'phdstus.html' },
                { name: 'MS Students', href: 'mscstus.html' },
                {
                    name: 'BTech Students', subItems: [
                        { name: "BTech Batch'28", href: 'btech28.html' },
                        { name: "BTech Batch'27", href: 'btech27.html' },
                        { name: "BTech Batch'26", href: 'btech26.html' }
                    ]
                },
                { name: 'Alumni', href: 'almuni.html' }
            ]
        },
        { name: 'RESEARCH', subItems: [{ name: 'Research Divisions', href: '../resdivs.html' }, { name: 'Research Facilites', href: '../resfacs.html' }] },
        { name: 'ACTIVITIES', 
            subItems: [
                { name: 'Physics Club', href: '../phyclub.html' }, 
                { name: 'Seminars & Colloquiums', href: '../seminars.html' },
                { name: 'Gallery', href: '../gallery.html' },
                { name: 'Awards & Achievements', href: '../achievements.html' }
            ] 
        },
        { name: 'CONTACT', href: '#CONTACT' },
    ];

    // --- Desktop Navigation ---
    desktopNav.innerHTML = '';
    navigationItems.forEach((item, index) => {
        const desktopItem = document.createElement('div');
        desktopItem.className = 'nav-item';

        let desktopLinkHTML = '';
        if (item.subItems) {
            desktopLinkHTML = `<button class="nav-link">${item.name}</button>`;
            desktopLinkHTML += generateDropdown(item.subItems);
        } else {
            desktopLinkHTML = `<a href="${item.href}" class="nav-link">${item.name}</a>`;
        }

        desktopItem.innerHTML = desktopLinkHTML;
        desktopNav.appendChild(desktopItem);
    });

    function generateDropdown(subItems) {
        let html = '<div class="dropdown-menu">';
        subItems.forEach(sub => {
            if (sub.subItems) {
                html += `<div class="dropdown-submenu">
            <button class="dropdown-link">${sub.name} ▸</button>
            ${generateDropdown(sub.subItems)}
         </div>`;
            } else {
                html += `<a href="${sub.href}" class="dropdown-link">${sub.name}</a>`;
            }
        });
        html += '</div>';
        return html;
    }

    // --- Mobile Navigation ---
    sidebarNav.innerHTML = '';
    navigationItems.forEach((item, index) => {
        const mobileItemDiv = document.createElement('div');
        let mobileLinkHTML = `<a href="${item.href || '#'}" class="sidebar-link">${item.name}`;
        if (item.subItems) mobileLinkHTML += `<svg fill="none" stroke="currentColor" viewBox="100 100 100 10"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
        mobileLinkHTML += `</a>`;

        if (item.subItems) {
            let submenuHTML = `<div class="sidebar-submenu" id="submenu-${index}">`;
            item.subItems.forEach(sub => { submenuHTML += `<a href="${sub.href || '#'}" class="sidebar-submenu-link">${sub.name}</a>`; });
            submenuHTML += '</div>';
            mobileLinkHTML += submenuHTML;
        }

        mobileItemDiv.innerHTML = mobileLinkHTML;

        if (item.subItems) {
            const link = mobileItemDiv.querySelector('.sidebar-link');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const submenu = document.getElementById(`submenu-${index}`);
                submenu.classList.toggle('active');
            });
        }

        sidebarNav.appendChild(mobileItemDiv);
    });

    // --- Sidebar toggles ---
    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    });

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    };

    sidebarCloseBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
}
