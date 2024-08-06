
        var userName, userEmail, userLocation, userBirthday, userPhone, userPassword;
        var iconpart = document.querySelectorAll(".material-symbols-outlined");
        var image = document.getElementById("userImg");
        var Name = document.getElementById("userName");
        var desc = document.getElementById("userDesc");
    
        document.addEventListener("DOMContentLoaded", generateUser);

        function generateUser() {
            fetch("https://randomuser.me/api/")
                .then((response) => response.json())
                .then((data) => {
                    const user = data.results[0];
                    image.src = user.picture.large;
                    userName = `${user.name.first} ${user.name.last}`;
                    userEmail = `${user.email}`;
                    userLocation = `${user.location.street.number} ${user.location.street.name}`;
                    userBirthday = `${user.dob.date} (${user.dob.age} years)`;
                    userPhone = `${user.phone}`;
                    userPassword = `${user.login.password}`;
                    Name.innerText = "Hi, My name is";
                    desc.innerText = userName;
                    iconpart[0].style.color = "green";
                });
        }

        iconpart[0].addEventListener('mouseover', generateName);
        iconpart[1].addEventListener('mouseover', generateEmail);
        iconpart[2].addEventListener('mouseover', generateLocation);
        iconpart[3].addEventListener('mouseover', generateBirthday);
        iconpart[4].addEventListener('mouseover', generatePhone);
        iconpart[5].addEventListener('mouseover', generatePassword);





        function generateEmail() {
            Name.innerText = "My email address is";
            desc.innerText = userEmail;
            iconpart[1].style.color = "green";
            iconpart[0].style.color = "gray";
        }

        function generateName() {
            Name.innerText = "Hi, My name is";
            desc.innerText = userName;
            iconpart[0].style.color = "green";
            iconpart[1].style.color = "gray";
        }
        function generateLocation(){
            Name.innerText= "My address is";
            desc.innerText = userLocation;
            iconpart[0].style.color = "gray";
            iconpart[1].style.color = "gray";
            iconpart[2].style.color = "green";

        }
        function generateBirthday(){
            Name.innerText= "My birthday is";
            desc.innerText = userBirthday;
            iconpart[0].style.color = "gray";
            iconpart[1].style.color = "gray";
            iconpart[2].style.color = "gray";
            iconpart[3].style.color = "green";

        }
        function generatePhone(){
            Name.innerText= "My phone number is";
            desc.innerText = userPhone;
            iconpart[0].style.color = "gray";
            iconpart[1].style.color = "gray";
            iconpart[2].style.color = "gray";
            iconpart[3].style.color = "gray";
            iconpart[4].style.color = "green";
        }

        function generatePassword(){
            Name.innerText= "My password is";
            desc.innerText = userPassword;
            iconpart[0].style.color = "gray";
            iconpart[1].style.color = "gray";
            iconpart[2].style.color = "gray";
            iconpart[3].style.color = "gray";
            iconpart[4].style.color = "gray";
            iconpart[5].style.color = "green";

        }


       