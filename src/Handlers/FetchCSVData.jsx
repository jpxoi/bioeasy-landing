import { useEffect, useState } from 'react'
import axios from 'axios'; // Import Axios

export default function FetchCSVData(props) {
    const [csvData, setCsvData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []); // The empty array ensures that this effect runs only once, like componentDidMount

    const fetchCSVData = () => {
        const csvUrl = props; // Replace with your Google Sheets CSV file URL

        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                setCsvData(parsedCsvData);        // Set the fetched data in the component's state
                console.log(parsedCsvData);        // Now you can work with 'csvData' in your component's state.
                setLoading(false);        // Update loading state to 'false' now that data fetching is complete
            })
            .catch((error) => {
                handleError(error);
            });
    }

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
        const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
        const data = [];        // Initialize an array to store the parsed data
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);     // Use regex to split the row while handling double quoted values
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j] ? rowData[j].replace(/"/g, '') : ''; // Remove double quotes from the values
            }
            data.push(rowObject);
        }
        return data;
    }

    function handleError(error) {
        console.warn(error);
        return error;
    }

    if (loading) {
        console.log("Loading...");
    }
    else {
        return csvData;
    }
}