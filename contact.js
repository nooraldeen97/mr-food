"use strict";

let allcontact=[];

let formElement=document.getElementById("formContact");
let divCon=document.getElementById("divCon");

function Contact(firstName,lastName,email,date,time,phone,massage){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.date=date;
    this.time=time;
    this.phone=phone;
    this.massage=massage;

    allcontact.push(this);
}

//here to make sure allcontact array not empty when refreshing the page ,So when i make refresh for the page to push all old request to the array before adding any new request.
let getData=JSON.parse(localStorage.getItem("conData"));

if(getData!=null)
{   
    for(let i=0;i<getData.length;i++){
    allcontact.push(getData[i]);
    }
}



formElement.addEventListener("submit",function handler(event){
    event.preventDefault();
    let first=event.target.firstName.value;
    let last=event.target.lastName.value;
    let email=event.target.email.value;
    let date=event.target.date.value;
    let time=event.target.time.value;
    let phone=event.target.phone.value;
    let massage=event.target.massage.value;

    let newObj =new Contact(first,last,email,date,time,phone,massage);
    // allcontact.push(newObj);

setData();
divCon.textContent='';
render();

})

//set the data in local storage.
function setData(){
    localStorage.setItem("conData",JSON.stringify(allcontact));
}


//get the data and render them in the browser .

///////////////////////////////// search ////////////////////////////////////////

// let sssElement=document.getElementById("sss");

// sssElement.addEventListener("submit",submitter)

// function submitter(event){
// event.preventDefault();
// let searchWord=event.target.gsearch.value;
// // console.log(searchWord);

// let filteredArr=getDataArray.filter(element=>{
//     return element.firstName==searchWord;
// })

// if(filteredArr){
//      getDataArray=filteredArr;
//      console.log(getDataArray)
//      console.log(filteredArr);
// }else{
// getDataArray = JSON.parse(localStorage.getItem("conData"));
// }
// console.log(filteredArr)
// render();
// // console.log(filteredArr);
// }
//////////////////////////////////////////////////////////////////////////////////
function render(){
let getDataArray = JSON.parse(localStorage.getItem("conData"));
    for (let i = 0; i < getDataArray.length; i++) {
        let divElement=document.createElement("div");
        divCon.appendChild(divElement);

        divElement.className="subDiv";

        let brElement0=document.createElement("br");
        divElement.appendChild(brElement0);

        let spanElement=document.createElement("span");
        divElement.appendChild(spanElement);

        let iElement=document.createElement("i");
        divElement.appendChild(iElement);
        iElement.className="fas fa-user";
        
        let h3Element=document.createElement("h3");
        // divElement.appendChild(h3Element);
        h3Element.textContent=`Name : ${getDataArray[i].firstName} ${getDataArray[i].lastName}`;

        spanElement.textContent=`${h3Element.textContent}${iElement.textContent}`;

        let brElement=document.createElement("br");
        divElement.appendChild(brElement);

        let h4Element=document.createElement("h4");
        // divElement.appendChild(h4Element);
        h4Element.textContent=`Email: ${getDataArray[i].email}`;

        let spanElement2=document.createElement("span");
        divElement.appendChild(spanElement2);


        let iElement2=document.createElement("i");
        divElement.appendChild(iElement2);
        iElement2.className="fas fa-envelope";
        
        spanElement2.textContent=`${h4Element.textContent}${iElement2.textContent}`;

        let brElement2=document.createElement("br");
        divElement.appendChild(brElement2);

        let pElement=document.createElement("p");
        // divElement.appendChild(pElement);
        pElement.textContent=`Phone Number: ${getDataArray[i].phone}`;

        let iElement3=document.createElement("i");
        divElement.appendChild(iElement3);
        iElement3.className="fas fa-phone-alt";

        let spanElement3=document.createElement("span");
        divElement.appendChild(spanElement3);

        spanElement3.textContent=`${pElement.textContent}${iElement3.textContent}`;

    }
}
render();



