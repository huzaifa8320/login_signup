
// Sign_up item 
var sign_username = document.getElementById(`sign_username`)
var sign_email = document.getElementById(`sign_email`)
var sign_password = document.getElementById(`sign_password`)

// Log_in item 
var log_email = document.getElementById(`log_email`)
var log_password = document.getElementById(`log_password`)


// login button 
var login_btn2 = document.getElementById(`btn2`)

// Sign_up button 
var sign_btn2 = document.getElementById(`btn2`)

// Eye button
var eye_btn1 = document.getElementById(`btn1`)

// Condition
var login_fill_condition = true
var sign_fill_condition = true


// Sign up in function start
sign_btn2.addEventListener(`click`, function () {
    if (sign_fill_condition == true) {
        if (sign_username.value == ``) {
            Swal.fire("Pleas Enter Username 📝");
        }
        else if (sign_email.value == ``) {
            Swal.fire("Pleas Enter Email 📝");
        }
        else if (sign_password.value == ``) {
            Swal.fire("Pleas Enter Password 📝");
        }
        else if (!sign_email.value.includes('@gmail.com')) {
            Swal.fire("Pleas Enter a valid Email 📝");
        }
        else {
            Swal.fire({
                title: "Account Created Successfully 📝",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../index.html';
                }
              });
            var sign_details = {
                username: sign_username.value,
                email: sign_email.value,
                password: sign_password.value,
            }
            localStorage.setItem(`${sign_email.value}`, JSON.stringify(sign_details))
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 2000);
        }
    }
})

// Log in function start
login_btn2.addEventListener(`click`, function (event) {
    event.preventDefault()
    if (login_fill_condition == true) {
        if (log_email.value == ``) {
            Swal.fire("Pleas Enter Email 📝");
        }
        else if (log_password.value == ``) {
            Swal.fire("Pleas Enter Password 📝");
        }
        else if (!log_email.value.includes('@gmail.com')) {
            Swal.fire("Pleas Enter a valid Email 📝");
        }
        else if (log_email.value != `` && log_password.value != ``) {
            var arr = []
            var found = false
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(localStorage.key(i));

            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].includes(log_email.value)) {
                    var convert = JSON.parse(localStorage.getItem(`${arr[i]}`))
                    if (log_email.value == convert.email) {
                        found = true
                        if (log_password.value != convert.password) {
                            Swal.fire("Password not match 📝");
                        }
                        else if (log_password.value == convert.password) {
                            Swal.fire({
                                title: "Successfully log in 📝",
                                confirmButtonText: "Ok",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  window.location.href = `https://muhammadhuzaifaportfolio.netlify.app/`
                                }
                              });
                            setTimeout(() => {
                                window.location.href = `https://muhammadhuzaifaportfolio.netlify.app/`
                            }, 2000);
                        }
                    }

                }

            }
            if (found == false) {
                Swal.fire({
                    title: "User Not found 📝",
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = `file:///E:/Java%20Script%20Project/login%20page/pages/signup.html`
                    }
                  });
                setTimeout(() => {
                    window.location.href = `file:///E:/Java%20Script%20Project/login%20page/pages/signup.html`
                }, 2000);
            }
        }
    }
})
// Log in function end

// Eye function start
eye_btn1.addEventListener(`click`, function (e) {
    if (e.target.parentElement.previousElementSibling.id == `log_password`) {
        var log_type = e.target.parentElement.previousElementSibling.type

        if (log_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            log_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            log_password.setAttribute(`type`, `password`)
        }
    }
    else if (e.target.parentElement.previousElementSibling.id == `sign_password`) {
        var sign_type = e.target.parentElement.previousElementSibling.type

        if (sign_type == `password`) {
            btn1.innerHTML = `<i class="bi bi-eye-fill"></i>`
            sign_password.setAttribute(`type`, `text`)
        }
        else {
            btn1.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
            sign_password.setAttribute(`type`, `password`)
        }
    }
})
// Eye function end