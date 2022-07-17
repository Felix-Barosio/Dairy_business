
//I can do this

const val1 = document.getElementById("shedA");
const val2 = document.getElementById("shedB");
const val3 = document.getElementById("shedC");
const val4 = document.getElementById("shedD");

//daily stats
data.addEventListener('submit',dailystats);

    function dailystats(e){
        e.preventDefault();  
            let res=parseFloat(val1.value)+parseFloat(val2.value)+parseFloat(val3.value)+parseFloat(val4.value);

                 console.log(res);
                 console.log("      ");
                 document.getElementById('myhead').innerHTML="Day's Report.";
                 document.getElementById('myleft').innerHTML=" Shed ";
                 document.getElementById('myright').innerHTML="Ltrs.";                 
                 document.getElementById('shed1').innerHTML=" A ";
                 document.getElementById('shed1val').innerHTML=val1.value;
                 document.getElementById('shed2').innerHTML=" B ";
                 document.getElementById('shed2val').innerHTML=val2.value;
                 document.getElementById('shed3').innerHTML=" C ";
                 document.getElementById('shed3val').innerHTML=val3.value;
                 document.getElementById('shed4').innerHTML=" D ";
                 document.getElementById('shed4val').innerHTML=val4.value;
                 document.getElementById('allsheds').innerHTML=" Total. ";
                 document.getElementById('totalsheds').innerHTML=res;

            }


            //weekly stats
data.addEventListener('submit',weeklyStats);

    function weeklyStats(){
        let units="  Litres."
        let shedA= parseFloat(val1.value)*7;

             //html page
        document.getElementById('weeklyH').innerHTML="Week's Report.(Sheds)";        
        document.getElementById('desc1').innerHTML=" ShedA ";        
        document.getElementById('value1').innerHTML=shedA;
        document.getElementById('units1').innerHTML=units;

            //console
        console.log("Weeks report");
        console.log(" A : "+ shedA+ " Litres.");
        console.log("  ");

        let shedB= parseFloat(val2.value)*7;
        document.getElementById('desc2').innerHTML=" ShedB ";        
        document.getElementById('value2').innerHTML=shedB;
        document.getElementById('units2').innerHTML=units;
        console.log(" B : "+ shedB+ " Litres.");
        console.log("  ");

        let shedC= parseFloat(val3.value)*7;
        document.getElementById('desc3').innerHTML=" ShedC ";        
        document.getElementById('value3').innerHTML=shedC;
        document.getElementById('units3').innerHTML=units;
        console.log(" C : "+ shedC+ " Litres.");
        console.log("  ");

        let shedD= parseFloat(val4.value)*7;
        document.getElementById('desc4').innerHTML=" ShedD ";        
        document.getElementById('value4').innerHTML=shedD;
        document.getElementById('units4').innerHTML=units;
        console.log(" D : "+ shedD+ " Litres.");
        console.log("  ");


        console.log(" Totals from Sheds");
        
        let totLitres = shedA+shedB+shedC+shedD;
        document.getElementById('shedstotal').innerHTML=" Total " + totLitres + " Ltrs."
        console.log("Total " +totLitres+" Ltr.");
    }
//prompt/alert
function getStats(){
    let rate = prompt("Current Market rate in Ksh. ",'60.0');
    let rates=parseFloat(rate);
    let totalProductionDaily= parseFloat(val1.value)+parseFloat(val2.value)+parseFloat(val3.value)+parseFloat(val4.value);
    let weeklyIncome= rates*totalProductionDaily*7;
    console.log(weeklyIncome);

    //Months * Remember its leap year
    //January
    let janProduction= totalProductionDaily*31;
    let janIncome= janProduction*rates;
    document.getElementById('janProd').innerHTML=janProduction;
    document.getElementById('janInc').innerHTML="Ksh. "+janIncome;

    //febuary(29days)*
    let febProduction=totalProductionDaily*29;
    let febIncome=febProduction*rates;
    document.getElementById('febProd').innerHTML=febProduction;
    document.getElementById('febInc').innerHTML="Ksh. "+febIncome;

    //March
    let marchProduction=totalProductionDaily*31;
    let marchIncome=marchProduction*rates;
    document.getElementById('marProd').innerHTML=marchProduction;
    document.getElementById('marInc').innerHTML="Ksh. "+marchIncome;

    // April
    let aprProduction =totalProductionDaily*30;
    let aprIncome =aprProduction*rates;
    document.getElementById('aprProd').innerHTML=aprProduction;
    document.getElementById('aprInc').innerHTML="Ksh. "+aprIncome;

    //May
    let mayProduction =totalProductionDaily*31;
    let mayIncome =mayProduction*rates;
    document.getElementById('mayProd').innerHTML=mayProduction;
    document.getElementById('mayInc').innerHTML="Ksh. "+mayIncome;

    //June
    let junProduction= totalProductionDaily*30;
    let junIncome= junProduction*rates;
    document.getElementById('junProd').innerHTML=junProduction;
    document.getElementById('junInc').innerHTML="Ksh. "+junIncome;

    //July
    let julyproduction=totalProductionDaily*31;
    let julyIncome=julyproduction*rates;
    document.getElementById('julProd').innerHTML=julyproduction;
    document.getElementById('julInc').innerHTML="Ksh. "+julyIncome;

    //August
    let augProduction=totalProductionDaily*31;
    let augIncome=augProduction*rates;
    document.getElementById('augProd').innerHTML=augProduction;
    document.getElementById('augInc').innerHTML="Ksh. "+augIncome;

    //September
    let sepProduction= totalProductionDaily*30;
    let sepIncome=sepProduction*rates;
    document.getElementById('sepProd').innerHTML=sepProduction;
    document.getElementById('sepInc').innerHTML="Ksh. "+sepIncome;

    //October
    let octProduction = totalProductionDaily*31;
    let octIncome= octProduction*rates;
    document.getElementById('octProd').innerHTML=octProduction;
    document.getElementById('octInc').innerHTML="Ksh. "+octIncome;

    //November
    let novProduction=totalProductionDaily*30;
    let novIncome=novProduction*rates;
    document.getElementById('novProd').innerHTML=novProduction;
    document.getElementById('novInc').innerHTML="Ksh. "+novIncome;

    // December
    let decProduction= totalProductionDaily*31;
    let decIncome=decProduction*rates;
    document.getElementById('decProd').innerHTML=decProduction;
    document.getElementById('decInc').innerHTML="Ksh. "+decIncome;

    // Yearly income
    let incomeOverYear=janIncome+febIncome+marchIncome+aprIncome+mayIncome+junIncome+julyIncome+augIncome+sepIncome+octIncome+novIncome+decIncome;
    document.getElementById('endyearincome').innerHTML="Ksh "+incomeOverYear;
    
}
const rateChange = () => {
    var invoice = document.getElementById("invoice");
    if(milkAmount > 45){
      invoice.display = "block"
    }else{
        invoice.display = "none"
    }
}

const generatePdf = () => {
    var prtContent = document.getElementById("pdf");
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    }