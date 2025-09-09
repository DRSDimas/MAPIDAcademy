export function renderEducation() {
    const html = /*html*/ `
        <div class="pl-20 py-8 px-4">
            <h2 class="text-4xl font-bold mb-8 text-s1buildings">Education</h2>
            
            <div class="space-y-8">
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">Universitas Gadjah Mada</h3>
                    <p class="text-gray-600 mt-1">BSc Cartography & Remote Sensing</p>
                    <p class="text-gray-600 mt-1">Aug 2023 - Sep 2027</p>
                </div>
                
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">SMA Al Kautsar Bandar Lampung</h3>
                    <p class="text-gray-600 mt-1">Social Sciences</p>
                    <p class="text-gray-600 mt-1">Jul 2020 - May 2023</p>
                </div>
            </div>

            <div class="mt-10 space-y-8">
                <h3 class="text-4xl font-bold mb-8 text-s1leeward">Experiences</h3>
                
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">Fakultas Geografi UGM</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Teaching Assistant for the Cartography Practicum in the International Undergraduate Program (Sep 2025 - Present)</li>
                        <li>Teaching Assistant Coordinator for Passive Remote Sensing System Practicum (Sep 2025 - Present)</li>
                        <li>Teaching Assistant for Algorithms and Programming Practicum (Sep 2025 - Present)</li>
                        <li>Vice Head of Field Work 2 Geospatial Data Acquisition for Regional Database Development 2025 (Sep 2024 - Aug 2025)</li>
                    </ul>
                </div>

                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">Himpunan Mahasiswa Sains Informasi Geografi UGM (HMSaIG)</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Head of Academic & Advocation Department (Mar 2025 - Present)</li>
                        <li>Academic & Advocation Staff (Mar 2024 - Feb 2025)</li>
                    </ul>
                </div>

                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">Ruangguru</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Clash of Champions Season 2 Cast (Mar 2025 - Present)</li>
                    </ul>
                </div>


                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">Geography Study Club</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Atmospheric Science Research & Study Staff (Dec 2024 - Present)</li>
                    </ul>
                </div>
                
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">OLGENAS International Geolympiad</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Competition Division Coordinator (Mar 2024 - Mar 2025)</li>
                        <li>Competition Division Staff (Sep 2023 - Mar 2024)</li>
                    </ul>
                </div>

                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 class="text-xl font-semibold text-gray-800">Tim Olimpiade Geografi Indonesia (IA-TOGI)</h4>
                    <p class="text-gray-600 mt-1">Part-time • On-site</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li>Indonesian Representative at the 19th International Geography Olympiad 2023 (Jul 2023 - Aug 2024)</li>
                        <li>Participant of the First, Second, & Third National Training (Pelatnas) for iGeo 2023 (Feb 2023 - Jul 2023)</li>
                    </ul>
                </div>
                
            </div>
        </div>
    `;

    document.getElementById('content').innerHTML = html;
}