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

    const formModuleHtml = /*html*/ `
        <div class="w-full bg-gray-900 text-white p-10">
            <h2 class="text-3xl font-bold mb-8 text-center">Critiques & Suggestions</h2>
            <div class="max-w-2xl mx-auto">
                <form id="critique-form" class="space-y-6">
                    <div>
                        <label for="nama" class="block mb-2 text-sm font-medium">Name</label>
                        <input id="nama" name="nama" type="text" class="w-full px-4 py-2 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-s1buildings focus:outline-none" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                        <input id="email" name="email" type="email" class="w-full px-4 py-2 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-s1buildings focus:outline-none" required />
                    </div>
                    <div>
                        <label for="kritik" class="block mb-2 text-sm font-medium">Critique and Suggestion</label>
                        <textarea id="kritik" name="kritik" class="w-full px-4 py-2 text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-s1buildings focus:outline-none" rows="4" placeholder="Enter your critique or suggestion here..." required></textarea>
                    </div>
                    <button type="submit" class="w-full px-6 py-3 bg-s1buildings text-gray-900 font-bold rounded-full hover:bg-s1leeward transition-colors duration-200">
                        Submit
                    </button>
                </form>

                <div class="mt-10">
                    <h3 class="text-2xl font-bold mb-4">Previous Submissions</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full table-auto text-sm text-left">
                            <thead class="text-xs uppercase bg-gray-700">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Name</th>
                                    <th scope="col" class="px-6 py-3">Critique and Suggestion</th>
                                </tr>
                            </thead>
                            <tbody id="table-body" class="bg-gray-800">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('content').innerHTML = `
        <div>
            ${projectSections}
            ${formModuleHtml}
        </div>
    `;

    initializeFormAndTable();

    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
}

function initializeFormAndTable() {
    const apiUrl = "https://68d93d1490a75154f0d9e302.mockapi.io/webgis/saran/v1";
    const form = document.getElementById("critique-form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const kritik_saran = document.getElementById("kritik").value;
            
            if (name && email && kritik_saran) {
                postSaran(name, email, kritik_saran);
            } else {
                alert("Please fill in all the fields.");
            }
        });
    }

    function postSaran(name, email, kritik_saran) {
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, kritik_saran })
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(() => {
            alert("Critique submitted successfully!");
            form.reset();
            getData();
        })
        .catch(error => {
            console.error("Error submitting critique:", error);
            alert("Failed to submit critique. Please try again.");
        });
    }

    function getData() {
        const tableBody = document.getElementById("table-body");
        if (!tableBody) return;

        tableBody.innerHTML = `<tr><td colspan="2" class="text-center py-4">Loading...</td></tr>`;

        fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            tableBody.innerHTML = '';
            if (data.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="2" class="text-center py-4">No critiques submitted yet.</td></tr>`;
            } else {
                data.forEach(item => {
                    const row = document.createElement("tr");
                    row.className = "border-b border-gray-700";
                    row.innerHTML = `
                        <td class="px-6 py-4">${item.name}</td>
                        <td class="px-6 py-4">${item.critique_suggestion}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching critiques:", error);
            tableBody.innerHTML = `<tr><td colspan="2" class="text-center py-4 text-red-400">Failed to load critiques.</td></tr>`;
        });
    }

    getData();
}
