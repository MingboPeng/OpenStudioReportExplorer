import * as d3 from "d3";

export class OpenStudioReport{
    private _reportHtmlUrl: string;
    

    /**
     *
     */
    constructor(reportUrl:string) {
        this._reportHtmlUrl = OpenStudioReport.CheckHtmlUrl(reportUrl);
        
    }

    static CheckHtmlUrl(htmlUrl:string):string
    {
        let url = htmlUrl;
        //do some checking works here.
        return url;
    }

    static GetData(checkedUrl:string):OpsReportData
    {
        let reportData:OpsReportData = {EUI:0,TotalFloorArea:0};
        //get data from html report
        reportData.EUI = 1;
        reportData.TotalFloorArea = 2;

        return reportData;

    }


}

interface OpsReportData {
    EUI:number;
    TotalFloorArea:number;
    //etc
}