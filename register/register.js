

//Déclarations username
const username= document.getElementById('username');
const usercontent=document.getElementById('usercontent');
const msg_user_low= "Username must be at least 3 characters";
const msg_user_long= "Username must be less than 15 characters";

//Déclarations email
const email=document.getElementById('email');
const emailcontent=document.getElementById('emailcontent');
const msg_email="Email is not available";

//Déclarations password 
const password=document.getElementById('psswrd');
const passwordcontent=document.getElementById('psswrdcontent');
const msg_pwd="Password must be at least 6 characters";

// Déclarations password 2
const password2=document.getElementById('psswrd2');
const password2content=document.getElementById('psswrdcontent2');
const msg_pwd2_match="Passwords do not match";
const msg_pwd2_empty="Password2 is required";



function addError(node,child,msg){
    child.classList.remove('success');
    child.classList.add('error');
    let node_msg= document.createElement('p');
    node_msg.classList.add('error');
    node_msg.textContent=msg;
    node.appendChild(node_msg);
}


function checkusername(){
    let node_msg = username.querySelector('p.error');

    if (usercontent.value.length>3 && usercontent.value.length<15){
        usercontent.classList.remove('error');
        usercontent.classList.add('success');
        if (node_msg){
            node_msg.remove();
        }
        return true;
    }
    else if(usercontent.value.length>=15){
        if (node_msg){
            node_msg.remove();
        }
        addError(username,usercontent,msg_user_long);
        return false;

    }
    else {
        addError(username,usercontent,msg_user_low);
        return false;
    }

}



function checkemail(){
    let node_msg = email.querySelector('p.error');
    
    if(emailcontent.value.includes('@') && emailcontent.value.includes('.')){
        emailcontent.classList.remove('error');
        emailcontent.classList.add('success');
        if (node_msg){
            node_msg.remove();
        }
        return true;
    }
    else {
        if (node_msg){
            node_msg.remove();
        }
        addError(email,emailcontent,msg_email);
        return false;
    }
}


function checkpwd(){
    let node_msg = password.querySelector('p.error');

    if(passwordcontent.value.length>=6){
        passwordcontent.classList.remove('error');
        passwordcontent.classList.add('success');
        if (node_msg){
            node_msg.remove();
        }
        return true;

    }
    else {

        if (node_msg){
            node_msg.remove();
        }
        addError(password,passwordcontent,msg_pwd);
        return false;
    }
}



function ckeckpwd2(){
    let node_msg = password2.querySelector('p.error');

    if(password2content.value===passwordcontent.value && password2content.value.length>=6){
        password2content.classList.remove('error');
        password2content.classList.add('success');
        if (node_msg){
            node_msg.remove();
        }
        return true;
    }
    else if(password2content.value===''){
        if (node_msg){
            node_msg.remove();
        }
        addError(password2,password2content,msg_pwd2_empty);
        return false;

    }
    else {
        if (node_msg){
            node_msg.remove();
        }
        addError(password2,password2content,msg_pwd2_match);
        return false;

    }

}


function handlesubmit(event){

        event.preventDefault();
        if(checkusername() && checkemail() &&  checkpwd() && ckeckpwd2()){

            console.log(
                'Username: ' + usercontent.value + "\n" +
                'E-mail: ' + emailcontent.value + "\n" +
                'Password: ' + passwordcontent.value + "\n" +
                'Password2: ' + password2content.value + "\n" 
            );
        }
        else{
            console.log(
                'Error in input'
            );
        }
    }
