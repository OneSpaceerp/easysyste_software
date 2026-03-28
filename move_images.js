const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\kelsh\\.gemini\\antigravity\\brain\\fbf023fd-f09a-43eb-8e9e-10ff65a31d0d';
const destDir = path.join(__dirname, 'public', 'illustrations');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const filesToCopy = {
    'data_analytics_3d': 'data-analytics',
    'ai_machine_learning_3d': 'ai-ml',
    'software_dev_3d': 'software',
    'integration_api_3d': 'integration',
    'automation_rpa_3d': 'automation',
    'erpnext_3d': 'erpnext-erp',
    'issabel_pbx_3d': 'issabel-pbx',
    'nestcloud_infrastructure_3d': 'nestcloud'
};

const allFiles = fs.readdirSync(srcDir);

for (const [prefix, solutionId] of Object.entries(filesToCopy)) {
    const matchingFile = allFiles.find(f => f.startsWith(prefix) && f.endsWith('.png'));
    if (matchingFile) {
        const destName = solutionId.replace(/-/g, '_') + '_3d.png';
        fs.copyFileSync(path.join(srcDir, matchingFile), path.join(destDir, destName));
        console.log(`Successfully copied ${destName}`);
    } else {
        console.error(`Could not find generated image for ${prefix}`);
    }
}
console.log('Finished copying all cinematic 3D assets!');
