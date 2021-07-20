
function process1(){
    console.log("Process 1 strated");
    console.log("Process 1 woking");
    console.log("Process 1 ended");
};
function process2(){
    console.log("Process 2 strated");
    console.log("Proces 2 woking");
    console.log("Process 2 ended");
};
setInterval(process1,2000);
setInterval(process2,5000);