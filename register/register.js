

//Déclarations username
const username= document.getElementById('username');
const usercontent=document.getElementById('usercontent');
const msg_user= "Username must be at least 3 characters";

//Déclarations email
const email=document.getElementById('email');
const emailcontent=document.getElementById('emailcontent');
const msg_email="Email is not available";

//Déclarations password 1
const password=document.getElementById('psswrd');
const passwordcontent=document.getElementById('psswrdcontent');
const msg_pwd="Password must be at least 6 characters";

// Déclarations password 2
const password2=document.getElementById('psswrd2');
const password2content=document.getElementById('psswrdcontent2');
const msg_pwd2="Password2 is required";



function checkusername(){
    let node_msg= document.createElement('p');

    if (usercontent.value.length>3){
        usercontent.classList.remove('error');
        usercontent.classList.add('success');
        if (node_msg.textContent.length>0) {
            node_msg.remove();
          }
        return true;
    }
    else {
        usercontent.classList.remove('success');
        usercontent.classList.add('error');
        node_msg.classList.add('error');
        node_msg.textContent=msg_user;
        username.appendChild(node_msg);
        return false;
    }

}



function checkemail(){
    
    if(emailcontent.value.includes('@') && emailcontent.value.includes('.')){
        emailcontent.classList.remove('error');
        emailcontent.classList.add('success');
        return true;
    }
    else {
        emailcontent.classList.remove('success');
        emailcontent.classList.add('error');
        let node_msg=document.createElement('p');
        node_msg.classList.add('error');
        node_msg.textContent=msg_email;
        email.appendChild(node_msg);
        return false;
    }
}


function checkpwd(){

    if(passwordcontent.value.length>=6){
        passwordcontent.classList.remove('error');
        passwordcontent.classList.add('success');
        return true;

    }
    else {
        passwordcontent.classList.remove('success');
        passwordcontent.classList.add('error');
        let node_msg=document.createElement('p');
        node_msg.classList.add('error');
        password.appendChild(node_msg);
        node_msg.textContent=msg_pwd;
        return false;
    }
}



function ckeckpwd2(){

    if(password2content.value===passwordcontent.value && password2content.value.length>=6){
        password2content.classList.remove('error');
        password2content.classList.add('success');
        return true;
    }
    else {
        password2content.classList.remove('success');
        password2content.classList.add('errorr');
        let node_msg=document.createElement('p');
        node_msg.classList.add('error');
        node_msg.textContent=msg_pwd2;
        password2.appendChild(node_msg);
        return false;

    }

}


function handlesubmit(event){

        event.preventDefault();
        if(checkusername() && checkemail() &&  checkpwd() && ckeckpwd2()){

            console.log(
                'Username: ' + usercontent.value + " " +
                'E-mail: ' + emailcontent.value + " " +
                'Password: ' + passwordcontent.value + " " +
                'Password2: ' + password2content.value + " " 
            );
        }
        else{
            console.log('Error in input');
        }
    }
