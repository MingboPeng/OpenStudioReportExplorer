import { OpenStudioReport } from "./OpenStudioReport";


var url = 'https://gist.githubusercontent.com/MingboPeng/e68e488045cbc74d9cbeb41ee87724f7/raw/openstudio_results_copy_report.html';

OpenStudioReport.GetData(url);

function greeter(person:string) {
    return "Hello, " + person;
}

let user = "MP";

document.body.innerHTML = greeter(user);