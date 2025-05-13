// DOM elements
const licenseContainer = document.getElementById('license-container');
const licenseDetail = document.getElementById('license-detail');
const detailTitle = document.getElementById('detail-title');
const licenseText = document.getElementById('license-text');
const licenseFeatures = document.querySelector('.license-features');
const copyButton = document.getElementById('copy-license');
const downloadButton = document.getElementById('download-license');

// Filter checkboxes
const filterSimple = document.getElementById('filter-simple');
const filterPatent = document.getElementById('filter-patent');
const filterPermissive = document.getElementById('filter-permissive');
const filterCopyleft = document.getElementById('filter-copyleft');
const filterPopular = document.getElementById('filter-popular');
const filterCompatibility = document.getElementById('filter-compatibility');

// Initialize filter state
const filterState = {
    simple: false,
    patent: false,
    permissive: false,
    copyleft: false,
    popular: false,
    compatibility: false
};

// Initialize ClipboardJS
new ClipboardJS('#copy-license', {
    text: function() {
        return licenseText.textContent;
    }
}).on('success', function(e) {
    const originalText = copyButton.textContent;
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
        copyButton.textContent = originalText;
    }, 2000);
});

// Event listeners for filters
filterSimple.addEventListener('change', updateFilters);
filterPatent.addEventListener('change', updateFilters);
filterPermissive.addEventListener('change', updateFilters);
filterCopyleft.addEventListener('change', updateFilters);
filterPopular.addEventListener('change', updateFilters);
filterCompatibility.addEventListener('change', updateFilters);

// Download license
downloadButton.addEventListener('click', function() {
    const licenseId = downloadButton.dataset.licenseId;
    const license = licenses.find(l => l.id === licenseId);
    if (!license) return;
    
    const element = document.createElement('a');
    const file = new Blob([license.text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${license.id}-license.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

// Update filters and re-render license cards
function updateFilters(e) {
    filterState.simple = filterSimple.checked;
    filterState.patent = filterPatent.checked;
    filterState.permissive = filterPermissive.checked;
    filterState.copyleft = filterCopyleft.checked;
    filterState.popular = filterPopular.checked;
    filterState.compatibility = filterCompatibility.checked;
    
    renderLicenseCards();
}

// Filter licenses based on selected attributes
function filterLicenses() {
    // If no filters are active, show all licenses
    const anyFilterActive = Object.values(filterState).some(value => value);
    
    if (!anyFilterActive) {
        return licenses;
    }
    
    return licenses.filter(license => {
        let match = true;
        
        if (filterState.simple && !license.attributes.simple) match = false;
        if (filterState.patent && !license.attributes.patent) match = false;
        if (filterState.permissive && !license.attributes.permissive) match = false;
        if (filterState.copyleft && !license.attributes.copyleft) match = false;
        if (filterState.popular && !license.attributes.popular) match = false;
        if (filterState.compatibility && !license.attributes.compatibility) match = false;
        
        return match;
    });
}

// Render license cards based on current filters
function renderLicenseCards() {
    licenseContainer.innerHTML = '';
    const filteredLicenses = filterLicenses();
    
    if (filteredLicenses.length === 0) {
        licenseContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500">No licenses match your selected criteria.</p>
                <button class="mt-4 px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded hover:bg-indigo-200 transition" onclick="resetFilters()">
                    Reset filters
                </button>
            </div>
        `;
        licenseDetail.classList.add('hidden');
        return;
    }
    
    filteredLicenses.forEach(license => {
        const card = document.createElement('div');
        card.className = 'license-card bg-white rounded-lg p-6 border-2 border-transparent hover:border-indigo-300 cursor-pointer transition shadow-sm hover:shadow';
        card.dataset.id = license.id;
        
        let featuresList = '';
        
        // Create a condensed feature list - just show 3 key features
        const keyFeatures = [];
        if (license.attributes.simple) keyFeatures.push('Simple');
        if (license.attributes.patent) keyFeatures.push('Patent protection');
        if (license.attributes.permissive) keyFeatures.push('Permissive');
        if (license.attributes.copyleft) keyFeatures.push('Copyleft');
        if (license.attributes.popular) keyFeatures.push('Popular');
        
        const featureItems = keyFeatures.slice(0, 3).map(feature => 
            `<span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">${feature}</span>`
        ).join('');
        
        card.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-gray-800">${license.name}</h3>
            <p class="text-gray-600 mb-4">${license.description}</p>
            <div class="flex flex-wrap">
                ${featureItems}
            </div>
        `;
        
        card.addEventListener('click', () => {
            selectLicense(license.id);
        });
        
        licenseContainer.appendChild(card);
    });
}

// Reset all filters
function resetFilters() {
    filterSimple.checked = false;
    filterPatent.checked = false;
    filterPermissive.checked = false;
    filterCopyleft.checked = false;
    filterPopular.checked = false;
    filterCompatibility.checked = false;
    
    filterState.simple = false;
    filterState.patent = false;
    filterState.permissive = false;
    filterState.copyleft = false;
    filterState.popular = false;
    filterState.compatibility = false;
    
    renderLicenseCards();
}

// Select a license and show its details
function selectLicense(licenseId) {
    // Deselect all cards first
    document.querySelectorAll('.license-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select the clicked card
    const card = document.querySelector(`.license-card[data-id="${licenseId}"]`);
    if (card) {
        card.classList.add('selected');
    }
    
    const license = licenses.find(l => l.id === licenseId);
    if (!license) return;
    
    // Update detail view
    detailTitle.textContent = license.name;
    licenseText.textContent = license.text;
    
    // Set download button data
    downloadButton.dataset.licenseId = licenseId;
    
    // Generate features HTML
    licenseFeatures.innerHTML = '';
    license.features.forEach(feature => {
        const featureEl = document.createElement('div');
        featureEl.className = 'flex items-center';
        featureEl.innerHTML = `
            <div class="mr-2">
                ${feature.value 
                    ? '<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'
                    : '<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>'
                }
            </div>
            <span class="text-gray-700">${feature.name}</span>
        `;
        licenseFeatures.appendChild(featureEl);
    });
    
    // Hide comparison container if visible
    const comparisonContainer = document.getElementById('comparison-container');
    if (comparisonContainer) {
        comparisonContainer.classList.add('hidden');
    }
    
    // Show detail view
    licenseDetail.classList.remove('hidden');
    licenseDetail.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the application
function initApp() {
    // Initial render of license cards
    renderLicenseCards();
    
    // Initialize comparison feature
    initializeComparison();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Make resetFilters available globally
window.resetFilters = resetFilters;