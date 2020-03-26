// load modules

// convert csv to json (easier to work with)

// load data
let csvToJson = require('convert-csv-to-json');

// get csv folder
var daily_reports_folder = "./csse_covid_19_data/csse_covid_19_daily_reports/";
var timeline_confirmed = "./csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
var timeline_deaths = "./csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"
var timeline_recovered = "./csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"
// get list filenames

// if json file exists don't convert



let fileInputName = daily_reports_folder + '02-23-2020.csv';
let fileOutputName = '02-23-2020.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);
//.fieldDelimiter('~')