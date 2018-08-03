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
        var url:string = checkedUrl;
        var doc:Document = new Document();
        let reportData = new OpsReportData();

        d3.html(url)
        .then(
            function (d:Document) {
                console.log('Loading HTML file');
                doc = d;
            }
        ).then(
            function () {
                console.log('Extracting data from HTML');
                let eui = OpenStudioReport.GetEUI(doc,reportData);
                    
                
                console.log(eui);


            }
            //let sel = new d3.selection(doc,);
            
            
            // var htmlObj = c._groups[0];
            
            // alert( "Load htmlFileUrl2 was performed." );
            // var row = htmlObj[4];
            // var textContent = row.cells[1].innerHTML;
            // var textUnit = row.cells[2].innerHTML;
            // alert( textContent);
        )


        
        //get data from html report

        return reportData;

    }

    static GetEUI(document:Document,reportObj:OpsReportData):OpsReportData {

        let c = d3.select(document).selectAll("#table_0 tbody tr").nodes()
        .map(function (d) {
            return <HTMLTableRowElement>d;
        })
        // c.forEach(element => {
            
        // });
        // c.forEach(element => {
        //     let rowEle = <HTMLTableRowElement> element;
            
        //     rowEle.cells.length
        //     console.log(rowEle.cells.item(1).innerHTML);
        // })

        
        let eui:number = Number(c[4].cells.item(1).innerHTML);
        let area:number = Number(c[3].cells.item(1).innerHTML.replace(',',''));
        let euiUnit: string = c[4].cells.item(2).innerHTML;
        
        reportObj.EUI = eui;
        reportObj.TotalFloorArea = area;
        reportObj.EUIUnit = euiUnit;
        return reportObj;

    }


}

class OpsReportData {
    EUI:number = 0;
    EUIUnit:string = '';
    TotalFloorArea:number = 0;
    //etc
}