document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('command-line');
    input.focus();
    var stockage = '';
    var content = document.getElementById('content-server');
    const isMobile = navigator.userAgentData.mobile;
    console.log(isMobile)

    if (isMobile == true) {
        window.location.replace('https://m.frostblack.fr')
    }

    window.addEventListener('beforeunload', function() {
        document.cookie = "hacked=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            var inputValue = input.value.trim();
            stockage = inputValue.toLowerCase();

            var prompt = '<span class="color-blue">admin></span>' + '<span class="color-blue">' + stockage + '</span>';
            var response = '';

            if (stockage === 'help') {
                response = '<br><br><span style="margin-right: 80px;" class="color-purple">about</span><span class="color-blue">Learn all about me</span><br><span style="margin-right: 60px;" class="color-purple">projets</span><span class="color-blue">See all my projects</span><br><span style="margin-right: 70px;" class="color-purple">github</span><span class="color-blue">My github profil link</span><br><span style="margin-right: 70px;" class="color-purple">secret</span><span class="color-blue" style="opacity: 50%;">wE!:è"=)ç█$Hld4█g"éM</span><br><span style="margin-right: 50px;" class="color-purple">contacts</span><span class="color-blue">My contacts</span><br><span style="margin-right: 60px;" class="color-purple">credits</span><span class="color-blue">All credits of this website</span><br><br>';
            } else if (stockage === 'cls' || stockage === 'clear') {
                content.innerHTML = '';
                stockage = '';
                input.value = '';
                return;
            } else if (stockage == 'cd') {
                response = '<br><br><p class="color-pink file-list"> Desktop/ </p><p class="color-pink file-list"> Music/ </p><p class="color-pink file-list"> Public/ </p><p class="color-pink file-list"> Videos/ </p><p class="color-pink file-list"> Documents/ </p><p class="color-pink file-list"> Downloads/ </p><br><br>';
            } else if (stockage == 'about') {
                response = '<br><br><p class="color-pink">Hello There !</p><p class="color-pink">My name is FrostBlack, I\'m ▓▓ years old and i\'m a french developer.</p><br>';
            } else if (stockage == 'github') {
                response = '<br><br><span class="color-pink">My github => <a class="color-purple" href="https://github.com/webfrostblack">https://github.com/webfrostblack</a></span><br><br>';
            } else if (stockage == 'credits') {
                response = '<br><br><span class="color-pink">This website was developed by <span class="color-purple">FrostBlack.</span><br>(The design was inspired by the website <a class="color-purple" href="https://valentinsld.fr/Terminal/#">https://valentinsld.fr/Terminal/#</a>)</span><br><br>';
            } else if (stockage == 'contacts') {
                response = '<br><br><span class="color-pink">My email : </span><a class="color-blue" href="mailto:webfrostblack@gmail.com"><span class="color-blue">webfrostblack@gmail.com</span></a><br><span class="color-pink">My discord : </span><span class="color-blue">_frostblack</span><br><br>'
            } else if (stockage == 'projects') {
                response = '<br><br><span class="color-pink">All my projects are avaible on my github !</span><br><br>'
            } else if (stockage == 'secret') {
                content.innerHTML += prompt + '<br><br><span class="color-pink">Don\'t try to hack me !!! (If you want to find my password press <span class="color-purple">F12</span>)</span><br><span class="color-pink"><span class="color-purple password-input">Password : </span><input class="secret color-pink"></span>';
                const secretInput = document.getElementsByClassName('secret');
                document.getElementById('input').style.display = 'none';
                secretInput[0].focus();

                function verify() {
                    secretInput[0].addEventListener('keypress', function(event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            const secretInput = document.getElementsByClassName('secret')[0];
                            var password = secretInput.value;
                            if (password === 'test') { // I think you can search here !
                                document.querySelector('.password-input').style.display = 'none';
                                document.querySelector('.secret').style.display = 'none';
                                content.innerHTML += `<span class="color-pink"><span class="color-purple">Password : </span>${password}</span>` + '<br><br><span class="color-green ">GG you just hack me, lol -_- !</span><br><br>';
                                document.getElementById('input').style.display = 'flex';
                                var hacked = document.getElementsByClassName('hacked');
                                for (var i = 0; i < hacked.length; i++) {
                                    hacked[i].style.removeProperty('display');
                                }
                                document.cookie = "hacked=true; path=/;";
                                input.value = '';
                                input.focus();
                            } else {
                                document.querySelector('.password-input').remove();
                                document.querySelector('.secret').remove();
                                content.innerHTML += `<span class="color-pink"><span class="color-purple">Password : </span>${password}</span>` + '<br><br><span class="color-red">You are so BAD !!!</span><br><br>';
                                content.innerHTML += '<span class="color-purple password-input">Password : </span><input class="secret color-pink"></span>';
                                input.focus();
                                verify();
                            }
                        }
                    });
                }
                verify();
                return;
            } else {
                response = '<br><br><p class="color-red">This is not a valid command, don\'t try to hack the system !!!</p><br>';
            }

            if (document.cookie.includes('hacked=true')) {
                prompt = '<span class="color-blue">admin<span>#hacked</span>></span>' + '<span class="color-blue">' + stockage + '</span>';
            } else {
                prompt = '<span class="color-blue">admin></span>' + '<span class="color-blue">' + stockage + '</span>';
            }
            
            content.innerHTML += prompt + response;
            input.value = '';
        }
    });
});
