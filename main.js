var booking=path.basename('./booking.html')

let etime = document.getElementById("etime")
let extime =document.getElementById("extime")
    function timechecking(){
        if(extime <= etime){
            alert("entry time greater than exit time")
        }
    }

    function myfunction(){
        alert("hi")
    }

function namechange(){
    var name=document.getElementById("name").value;
    return name;
//     // document.getElementById("username").innerHTML=name;
//     console.log(name);
//     // var div=document.getElementById("div")
//     // var name=document.target.value
//     // div.innerHTML=name;
}

let n = namechange();
