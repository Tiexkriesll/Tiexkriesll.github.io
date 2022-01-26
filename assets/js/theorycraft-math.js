// JavaScript Document
//get inputs and button element from document
            
            var num1El=document.querySelector("#num1");
            var num2El=document.querySelector("#num2");
            var addBtn=document.querySelector("#add");
            var msgEl=document.querySelector("#msg");
            
            //bind a function tothe onClick event the AddBtn
            addBtn.onclick=function(){
                
                //add two numbers
                sum=Number(num1.value)+ Number(num2.value);
                
                //write the sum into #msg document 
                msgEl.innerHTML=sum;
            }