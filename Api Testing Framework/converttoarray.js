const xlsx = require('xlsx');
const fs = require('fs');

function convertExcelToArray(filePath) {
    // Read the Excel file
    const workbook = xlsx.readFile(filePath);

    // Assume the data is in the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });

    

    
    console.log("Test")
    console.log(jsonData)
    

    // Create an array to hold the data
    const dataArray = [];

    // Iterate over the JSON data and push each row to the array
    jsonData.forEach(row => {
        // Process each cell in the row
        const processedRow = row.map(cell => {
            // Replace empty or blank cells with null
            return (typeof cell === 'string' && cell.trim() === '') ? '' : cell;
        });

        dataArray.push(processedRow);
    });

    return dataArray;
}

// Specify the path to your Excel file
const filePath = 'C://Users//lnv0165//Downloads//testing.xlsx';

// Convert the Excel data to a JavaScript array
const scenarioData = convertExcelToArray(filePath);

// Print the array to the console
console.log(JSON.stringify(scenarioData,';'));

// Optionally, write the array to a JSON file
//fs.writeFileSync('output.json', JSON.stringify(scenarioData, null, 2));
