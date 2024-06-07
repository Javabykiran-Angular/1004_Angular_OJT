import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary",
    // pure:false
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=20) {
        console.log("======= U r in Transform Method ========")
        // type assertion 
        let temp=(<string> value);

    //    return  (temp.substring(0,20)+"...");
    return  (temp.substring(start,end)+"...");

    }

}
