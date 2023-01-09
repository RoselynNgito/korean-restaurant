const forms= document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link")

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => { 
            if (password.type === "password"){
                password.type= "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
                password.type= "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");                
        })

    })
})
links.forEach(link => {
  
       forms.classList.toggle("show-signup");
    
    })

    //login
    
    const ver1=localStorage.getItem("10")
    const ver2=localStorage.getItem("20")
    const ver3=localStorage.getItem("30")
const emails= document.getElementById('emails')
const psw= document.getElementById('passwords')


function login() {
    console.log(ver1, ver2, ver3);
    emails.value == ver1 && psw.value == ver2 ? allow() : Deny();
  }
  function allow() {
      document.getElementById('err').style.color='green'
    document.getElementById("err").textContent = `Welcome Back  ${ver1}`;
    window.location.href="C:\Users\USER\OneDrive\Desktop\NjokiProject\final website\home.html"
  }
  
  function Deny() {
      document.getElementById('err').style.color='red'
    document.getElementById("err").textContent = `Wrong username or password!`;
    psw.value=''
    psw.focus()
  }
  
  