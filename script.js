const footerContent = {
    companyName: 'Agentur Baumeister',
    street: 'Bockhstraße 13',
    cityZip: '10967 Berlin',
    email: 'hallo@neue-agentur.com',
    phone: '+49 (0)30 - 555 123 45',

    patternImageSrc: '/images/pattern.png',
    linkedinUrl: 'https://www.linkedin.com/company/new-baumeister',
    instagramUrl: 'https://www.instagram.com/new-baumeister',
    impressumUrl: '/legal/imprint',
    datenschutzUrl: '/legal/privacy',

    linkedinText: 'LinkedIn',
    instagramText: 'Instagram',
    impressumText: 'Impressum',
    datenschutzText: 'Datenschutz'
};

function loadComponent(targetId, filePath) {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
        console.error(`Target element with ID "${targetId}" not found.`);
        return;
    }

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch component: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            targetElement.innerHTML = htmlContent;
            populateFooter();
        })
        .catch(error => {
            console.error('Error loading component:', error);
            targetElement.innerHTML = `<p style="color: red;">Error loading footer component: ${filePath}</p>`;
        });
}


function populateFooter() {
    const patternImage = document.getElementById('pattern-image');
    if (patternImage) {
        patternImage.src = footerContent.patternImageSrc;
        patternImage.alt = footerContent.companyName + ' Pattern';
    }

    const desktopAdd1 = document.getElementById('desktop1');
    const desktopAdd2 = document.getElementById('desktop2');
    const desktopAdd3 = document.getElementById('desktop3');
    if (desktopAdd1) desktopAdd1.textContent = footerContent.companyName;
    if (desktopAdd2) desktopAdd2.textContent = footerContent.street;
    if (desktopAdd3) desktopAdd3.textContent = footerContent.cityZip;

    const desktopEmailLink = document.getElementById('desktop-email-link');
    const desktopPhone = document.getElementById('desktop-phone');
    if (desktopEmailLink) {
        desktopEmailLink.textContent = footerContent.email;
        desktopEmailLink.href = 'mailto:' + footerContent.email;
    }
    if (desktopPhone) desktopPhone.textContent = footerContent.phone;

    const desktopLinkedIn = document.getElementById('desktop-linkedin-link');
    const desktopInstagram = document.getElementById('desktop-instagram-link');
    if (desktopLinkedIn) {
        desktopLinkedIn.href = footerContent.linkedinUrl;
        desktopLinkedIn.textContent = footerContent.linkedinText;
    }
    if (desktopInstagram) {
        desktopInstagram.href = footerContent.instagramUrl;
        desktopInstagram.textContent = footerContent.instagramText;
    }

    const desktopImpressum = document.getElementById('desktop-impressum-link');
    const desktopDatenschutz = document.getElementById('desktop-datenschutz-link');
    if (desktopImpressum) {
        desktopImpressum.href = footerContent.impressumUrl;
        desktopImpressum.textContent = footerContent.impressumText;
    }
    if (desktopDatenschutz) {
        desktopDatenschutz.href = footerContent.datenschutzUrl;
        desktopDatenschutz.textContent = footerContent.datenschutzText;
    }

    const mobileAdd1 = document.getElementById('mobile-address-line1');
    const mobileAdd2 = document.getElementById('mobile-address-line2');
    const mobileAdd3 = document.getElementById('mobile-address-line3');
    if (mobileAdd1) mobileAdd1.textContent = footerContent.companyName;
    if (mobileAdd2) mobileAdd2.textContent = footerContent.street;
    if (mobileAdd3) mobileAdd3.textContent = footerContent.cityZip;

    const mobileEmailLink = document.getElementById('mobile-email-link');
    const mobilePhone = document.getElementById('mobile-phone');
    if (mobileEmailLink) {
        mobileEmailLink.textContent = footerContent.email;
        mobileEmailLink.href = 'mailto:' + footerContent.email;
    }
    if (mobilePhone) mobilePhone.textContent = footerContent.phone;

    const mobileLinkedIn = document.getElementById('mobile-linkedin-link');
    const mobileInstagram = document.getElementById('mobile-instagram-link');
    if (mobileLinkedIn) {
        mobileLinkedIn.href = footerContent.linkedinUrl;
        mobileLinkedIn.textContent = footerContent.linkedinText;
    }
    if (mobileInstagram) {
        mobileInstagram.href = footerContent.instagramUrl;
        mobileInstagram.textContent = footerContent.instagramText;
    }
    const mobileImpressum = document.getElementById('mobile-impressum-link');
    const mobileDatenschutz = document.getElementById('mobile-datenschutz-link');
    if (mobileImpressum) {
        mobileImpressum.href = footerContent.impressumUrl;
        mobileImpressum.textContent = footerContent.impressumText;
    }
    if (mobileDatenschutz) {
        mobileDatenschutz.href = footerContent.datenschutzUrl;
        mobileDatenschutz.textContent = footerContent.datenschutzText;
    }
}