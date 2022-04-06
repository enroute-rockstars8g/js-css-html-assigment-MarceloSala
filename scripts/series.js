function fibonacci(){
    let input = document.getElementById("numberInput").value;
    let num1 = 0;
    let num2 = 1;
    let num3 = num1 + num2;
    
    if( !(input <= 0) ){
        if(input == 1){
            xValues = [1];
            yValues = [num1];
        }
        else if(input == 2){
            xValues = [1,2];
            yValues = [num1, num3];
        }
        else{
            xValues = [1,2];
            yValues = [num1, num3];
            for(let i = 2; i < input; i++){
                num3 = num1 + num2;
                num1 = num2;
                num2 = num3;
                xValues[i] = i+1;
                yValues[i] = num3;
            }
        }
        Draw("Position","Fibonacci sucesion", input + "th fibonacci number = " + num3);
    }
    else{
        xValues = [0];
        yValues = [0];
    }   
}

function factorial(){
    let input = document.getElementById("numberInput").value;
    if( input >= 0 ){
        xValues = [0];
        yValues = [0];
        for(i = 0; i<input; i++){
            xValues[i] = i;
            yValues[i] = singleFactorial(i);
        }
        Draw("n","Factorial of: n", input + "! = " + singleFactorial(input));
    }
}

function singleFactorial(n){
    if(n == 0){
        return 1;
    }
    return n * singleFactorial(n - 1);
}

function printResult(input){
    document.getElementById("result").innerText = input;
}

function Draw(xAxesName,yAxesName,relation){
    const chart = new Chart("myChart", {
        type: "line", //graph type
        data: {
            labels: xValues, //array of x Values
            datasets: [{
                backgroundColor: "white", //intersection color
                label: relation, //leyend label
                data: yValues, //array of y Values
                borderColor: "red", //line color
                fill: false,
          }]
        },
        options: {
            legend: {
                display: true,
            },
            scales: {
                yAxes: [{ //y axis label
                    scaleLabel:{
                        display:true,
                        labelString: yAxesName
                    }
                }],
                xAxes: [{ //y axis label
                    display: true,
                    scaleLabel:{
                        display:true,
                        labelString: xAxesName
                    },
                }],
            },
        },
    });
} 
  