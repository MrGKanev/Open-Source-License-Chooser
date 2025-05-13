// Handle license comparison functionality

// Selected licenses for comparison (maximum 4)
let selectedLicensesForComparison = [];

// DOM Elements
const compareButton = document.getElementById('compare-button');
const comparisonContainer = document.getElementById('comparison-container');
const comparisonSelector = document.getElementById('comparison-selector');
const comparisonTableBody = document.getElementById('comparison-table-body');
const closeComparisonButton = document.getElementById('close-comparison');

// License header elements
const compareLicense1 = document.getElementById('compare-license-1');
const compareLicense2 = document.getElementById('compare-license-2');
const compareLicense3 = document.getElementById('compare-license-3');
const compareLicense4 = document.getElementById('compare-license-4');

// Initialize comparison UI
function initializeComparison() {
    // Create license selector for comparison
    createComparisonSelectors();
    
    // Add event listeners
    compareButton.addEventListener('click', showComparisonUI);
    closeComparisonButton.addEventListener('click', hideComparisonUI);
}

// Create license selectors for comparison
function createComparisonSelectors() {
    comparisonSelector.innerHTML = '';
    
    // Create up to 4 selection slots
    for (let i = 0; i < 4; i++) {
        const selectorContainer = document.createElement('div');
        selectorContainer.className = 'bg-white rounded-lg border p-4';
        
        const selectLabel = document.createElement('label');
        selectLabel.className = 'block text-gray-700 font-medium mb-2';
        selectLabel.textContent = `License ${i + 1}`;
        
        const select = document.createElement('select');
        select.className = 'w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500';
        select.setAttribute('data-index', i);
        
        // Empty option
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '-- Select a license --';
        select.appendChild(emptyOption);
        
        // License options
        licenses.forEach(license => {
            const option = document.createElement('option');
            option.value = license.id;
            option.textContent = license.name;
            select.appendChild(option);
        });
        
        // Event listener for selection change
        select.addEventListener('change', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const licenseId = this.value;
            
            // Update selected licenses array
            if (licenseId === '') {
                // Empty selection, remove from array
                selectedLicensesForComparison[index] = null;
            } else {
                selectedLicensesForComparison[index] = licenseId;
            }
            
            // Update comparison table
            updateComparisonTable();
        });
        
        selectorContainer.appendChild(selectLabel);
        selectorContainer.appendChild(select);
        comparisonSelector.appendChild(selectorContainer);
    }
}

// Show comparison UI
function showComparisonUI() {
    // Reset selected licenses
    selectedLicensesForComparison = [null, null, null, null];
    
    // Reset license selectors
    const selects = comparisonSelector.querySelectorAll('select');
    selects.forEach(select => {
        select.value = '';
    });
    
    // Clear comparison table
    updateComparisonTable();
    
    // Show comparison container
    comparisonContainer.classList.remove('hidden');
    
    // Hide license detail if visible
    const licenseDetail = document.getElementById('license-detail');
    if (licenseDetail) {
        licenseDetail.classList.add('hidden');
    }
    
    // Scroll to comparison container
    comparisonContainer.scrollIntoView({ behavior: 'smooth' });
}

// Hide comparison UI
function hideComparisonUI() {
    comparisonContainer.classList.add('hidden');
}

// Update comparison table based on selected licenses
function updateComparisonTable() {
    // Clear table body
    comparisonTableBody.innerHTML = '';
    
    // Update license headers
    updateLicenseHeaders();
    
    // If no licenses selected, show message
    if (!selectedLicensesForComparison.some(id => id !== null)) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="5" class="py-4 px-4 text-center text-gray-500">
                Select at least one license to compare
            </td>
        `;
        comparisonTableBody.appendChild(row);
        return;
    }
    
    // Collect all unique feature names from selected licenses
    const allFeatures = new Set();
    
    selectedLicensesForComparison.forEach(licenseId => {
        if (licenseId) {
            const license = licenses.find(l => l.id === licenseId);
            if (license) {
                license.features.forEach(feature => {
                    allFeatures.add(feature.name);
                });
            }
        }
    });
    
    // Create rows for each feature
    allFeatures.forEach(featureName => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        
        // Feature name cell
        const featureCell = document.createElement('td');
        featureCell.className = 'py-3 px-4 font-medium';
        featureCell.textContent = featureName;
        row.appendChild(featureCell);
        
        // Add cells for each selected license
        for (let i = 0; i < 4; i++) {
            const licenseId = selectedLicensesForComparison[i];
            const cell = document.createElement('td');
            cell.className = 'py-3 px-4';
            
            if (licenseId) {
                const license = licenses.find(l => l.id === licenseId);
                if (license) {
                    const feature = license.features.find(f => f.name === featureName);
                    if (feature) {
                        const icon = feature.value 
                            ? '<svg class="w-5 h-5 text-green-500 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'
                            : '<svg class="w-5 h-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
                        
                        cell.innerHTML = icon;
                    } else {
                        cell.innerHTML = '<span class="text-gray-400">-</span>';
                    }
                }
            }
            
            row.appendChild(cell);
        }
        
        comparisonTableBody.appendChild(row);
    });
    
    // Add rows for license attributes
    addAttributeRows();
}

// Add rows for license attributes
function addAttributeRows() {
    const attributeNames = {
        simple: 'Simple and short',
        patent: 'Patent protection',
        permissive: 'Permissive (no copyleft)',
        copyleft: 'Copyleft',
        popular: 'Widely used',
        compatibility: 'Good compatibility'
    };
    
    // Add a separator row
    const separatorRow = document.createElement('tr');
    separatorRow.className = 'border-b';
    separatorRow.innerHTML = `
        <td colspan="5" class="py-3 px-4 font-semibold bg-gray-50">License Characteristics</td>
    `;
    comparisonTableBody.appendChild(separatorRow);
    
    // Add a row for each attribute
    Object.entries(attributeNames).forEach(([attr, label]) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        
        // Attribute name cell
        const attrCell = document.createElement('td');
        attrCell.className = 'py-3 px-4 font-medium';
        attrCell.textContent = label;
        row.appendChild(attrCell);
        
        // Add cells for each selected license
        for (let i = 0; i < 4; i++) {
            const licenseId = selectedLicensesForComparison[i];
            const cell = document.createElement('td');
            cell.className = 'py-3 px-4';
            
            if (licenseId) {
                const license = licenses.find(l => l.id === licenseId);
                if (license) {
                    const hasAttr = license.attributes[attr];
                    const icon = hasAttr 
                        ? '<svg class="w-5 h-5 text-green-500 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>'
                        : '<svg class="w-5 h-5 text-red-500 inline-block" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
                    
                    cell.innerHTML = icon;
                }
            }
            
            row.appendChild(cell);
        }
        
        comparisonTableBody.appendChild(row);
    });
}

// Update license headers in comparison table
function updateLicenseHeaders() {
    // Reset headers
    compareLicense1.textContent = 'License 1';
    compareLicense2.textContent = 'License 2';
    compareLicense3.textContent = 'License 3';
    compareLicense4.textContent = 'License 4';
    
    // Update headers with selected license names
    for (let i = 0; i < selectedLicensesForComparison.length; i++) {
        const licenseId = selectedLicensesForComparison[i];
        if (licenseId) {
            const license = licenses.find(l => l.id === licenseId);
            if (license) {
                const headerElement = document.getElementById(`compare-license-${i + 1}`);
                if (headerElement) {
                    headerElement.textContent = license.name;
                }
            }
        }
    }
}