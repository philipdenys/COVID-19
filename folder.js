/**
 * @module CSV-to-JSON-converter
 * @description takes the CSV data and converts it to a json file.
 * @author Philip Denys
 * @version 0.2 
 */

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
let csvToJson = require('convert-csv-to-json');

//joining path of directory 
const directoryPath = path.join(__dirname, 'csse_covid_19_data/csse_covid_19_daily_reports');
var daily_reports_folder = "./csse_covid_19_data/csse_covid_19_daily_reports/";
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {

        // load fileinputname
        let fileInputName = daily_reports_folder + file;

        // if is .csv then
        if (/([a-zA-Z0-9\s_\\.\-\(\):])+(.csv)$/.test(file)) {

            // change the extention of the file
            file = file.substr(0, file.lastIndexOf(".")) + ".json";
            let fileOutputName = daily_reports_folder + file;

            // convert csv content to json content
            csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);
        }





        // console.log(file);
    });
});