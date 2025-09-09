export function renderPortfolio() {
    const projects = [
        {
            title: "US Navy Carrier Strike Group Tracker",
            subtitle: "Red Sea & Caribbean Sea Operation",
            details: "Detailed information about the project...",
            websiteUrl: "https://example.com/project-one",
            backgroundUrl: "/images/Background1.png"
        },
        {
            title: "Esthera Locus Field Work II & III Atlas",
            subtitle: "Geospatial Data Acquisition, Modeling, & Analysis",
            details: "Detailed information about the project...",
            websiteUrl: "https://example.com/project-two",
            backgroundUrl: "/images/Background2.png"
        },
        {
            title: "West Java Sustainable Development Profile Atlas",
            subtitle: "Each goals has its own map",
            details: "Detailed information about the project...",
            websiteUrl: "https://example.com/project-three",
            backgroundUrl: "/images/Background3.png"
        }
    ];

    const projectSections = projects.map(project => /*html*/ `
        <div class="h-screen w-full relative flex items-center justify-center text-center">
            <div class="absolute inset-0 w-full h-full bg-cover bg-center" style="background-image: url('${project.backgroundUrl}');">
                <div class="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div class="relative z-10 p-8 text-white">
                <h1 class="text-4xl md:text-5xl font-bold mb-2">${project.title}</h1>
                <p class="text-xl md:text-2xl font-light mb-8">${project.subtitle}</p>
                <a href="${project.websiteUrl}" target="_blank" class="bg-white text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200 hover:bg-gray-200">
                    View Atlas
                </a>
                <details class="mt-8">
                    <summary class="text-lg cursor-pointer hover:text-s1leeward text-s1buildings transition-colors duration-200">
                        Expand for more details
                    </summary>
                    <div class="mt-2 p-4 bg-white bg-opacity-80 text-gray-800 rounded-lg shadow-md">
                        <p>${project.details}</p>
                    </div>
                </details>
            </div>
        </div>
    `).join('');

    document.getElementById('content').innerHTML = `
        <div>
            ${projectSections}
        </div>
    `;

    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
}