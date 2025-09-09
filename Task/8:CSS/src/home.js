import { githubSvg, linkedinSvg, instagramSvg, tiktokSvg, whatsappSvg } from './icons.js';

export function renderHome() {
    const socialMedia = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dimas-dwi-rachmat-susilo-baa30923b/',
            icon: linkedinSvg
        },
        {
            name: 'GitHub',
            url: 'https://github.com/DRSDimas',
            icon: githubSvg
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/drsdimas_/',
            icon: instagramSvg
        },
        {
            name: 'Tiktok',
            url: 'https://www.tiktok.com/@drsdimas_/',
            icon: tiktokSvg
        },
        {
            name: 'Whatsapp',
            url: 'https://wa.me/+6282189805989',
            icon: whatsappSvg
        }
    ];

    const socialMediaLinks = socialMedia.map(item => `
        <a href="${item.url}" target="_blank" class="text-white hover:text-s1buildings transition-colors duration-200">
            ${item.icon}
        </a>
    `).join('');

    const html = /*html*/ `
        <div class="container mx-auto text-left py-70 pl-20">
            <h1 class="text-8xl font-bold text-white px-10">DRSDimas</h1>
            <p id="typing-text" class="text-3xl mt-3 text-white px-11"></p>
            <div class="mt-8 flex justify-left space-x-6 px-11">
                ${socialMediaLinks}
            </div>
        </div>
    `;

    document.getElementById('content').innerHTML = html;

    const text = "I do Earth-Observation stuff";
    let i = 0;
    const typingElement = document.getElementById('typing-text');

    function type() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}