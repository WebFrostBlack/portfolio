document.addEventListener('DOMContentLoaded', () => {
    const setupInputHandler = (inputElement) => {
        inputElement.addEventListener('keydown', () => {
            touchSong.currentTime = 0;
            touchSong.play();
        });

        inputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' || event.key === 'Return' || event.keyCode === 13) {
                event.preventDefault();
                
                const stockage = inputElement.value.trim().toLowerCase();
                let prompt = `<span class="color-blue">admin></span> <span class="color-blue">${stockage}</span>`;
                let response = '';

                switch (stockage) {
                    case 'help':
                        response = `<br><br>
                            <span style="margin-right: 80px;" class="color-purple">about</span><span class="color-blue">Learn all about me</span><br>
                            <span style="margin-right: 47px;" class="color-purple">projects</span><span class="color-blue">See all my projects</span><br>
                            <span style="margin-right: 70px;" class="color-purple">github</span><span class="color-blue">My github profile link</span><br>
                            <span style="margin-right: 70px;" class="color-purple">secret</span><span class="color-blue" style="opacity: 50%;">wE!:è"=)ç█$Hld4█g"éM</span><br>
                            <span style="margin-right: 58px;" class="color-purple">contact</span><span class="color-blue">My contact</span><br>
                            <span style="margin-right: 58px;" class="color-purple">credits</span><span class="color-blue">All credits of this website</span><br><br>`;
                        break;
                    case 'about':
                        response = `<br><br>
                            <p class="color-pink">Hello There!</p>
                            <p class="color-pink">My name is FrostBlack, I\'m ▓▓ years old and I\'m a French developer.</p>
                            <p class="color-pink">I\'m working for Novincept and currently learning Go and JavaScript. If you want to see my works, you can go to my GitHub.</p><br>`;
                        break;
                    case 'secret':
                            responseDiv.innerHTML += `  ${prompt}<br><br>
                                                        <span class="color-pink">
                                                            If you want to find my password, press <span class="color-purple">F12</span> and search in the developer tools.
                                                        </span><br>
                                                        <div class="password-div">
                                                            <span class="color-purple">Password: </span>
                                                            <input class="password-input color-pink" autofocus>
                                                        </div>`;
                            inputDiv.classList.add('hide');
                        
                            const passwordInput = document.querySelector('.password-input');
                            const passwordDiv = document.querySelector('.password-div');
                        
                            passwordInput.focus();
                            passwordInput.addEventListener('keypress', function(event) {
                                if (event.key === 'Enter') {
                                    if (passwordInput.value.trim().toLowerCase() === 'root') {
                                        passwordDiv.remove();
                                        responseDiv.innerHTML += `
                                            <div class="password-div-ok">
                                                <span class="color-purple">Password: </span>
                                                <span class='color-pink'>${passwordInput.value}</span>
                                            </div><br>
                                            <span class="color-green">
                                                GG, you just found my password! You can <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">click here</a> to access the admin page.
                                            </span><br><br>`;
                                    } else {
                                        passwordDiv.remove();
                                        responseDiv.innerHTML += `
                                            <div class="password-div-false">
                                                <span class="color-purple">Password: </span>
                                                <span class='color-pink'>${passwordInput.value}</span>
                                            </div><br>
                                            <span class="color-red">You're so bad!!</span><br><br>`;
                                    }
                                    inputDiv.classList.remove('hide');
                                    input.value = ' ';
                                    input.focus();
                                }
                            });
                            return;
                                            

                    case 'github':
                        response = `<br><br><span class="color-pink">My GitHub => <a class="color-purple" href="https://github.com/webfrostblack">https://github.com/webfrostblack</a></span><br><br>`;
                        break;
                    case 'projects':
                        response = `<br><br><span class="color-pink">Novincept => <a class="color-purple" href="https://novincept.com/">https://novincept.com/</a></span><br><span class="color-pink">My portfolio => <a class="color-purple" href="https://github.com/WebFrostBlack/portfolio/">https://github.com/WebFrostBlack/portfolio/</a></span><br><br>`;
                        break;
                    case 'contact':
                        response = `<br><br><span class="color-pink">My email: </span><a class="color-blue" href="mailto:contact@frostblack.fr"><span class="color-blue">contact@frostblack.fr</span></a><br>
                            <span class="color-pink">My Discord: </span><span class="color-blue">_frostblack</span><br><br>`;
                        break;
                    case 'credits':
                        response = `<br><br><span class="color-pink">This website was developed by <span class="color-purple">FrostBlack.</span><br>
                            (The design was inspired by the website <a class="color-purple" href="https://valentinsld.fr/Terminal/#">https://valentinsld.fr/Terminal/#</a>)</span><br><br>`;
                        break;
                    case 'cls':
                    case 'clear':
                        responseDiv.innerHTML = '';
                        inputElement.value = ' ';
                        return;
                    default:
                        response = `<br><br><span class="color-red">${stockage} : command not found</span><br><br>`;
                }

                inputElement.value = ' ';
                responseDiv.innerHTML += prompt + response;
            }
        });
    };

    const passwordInput = document.querySelector('.password-input');
    const inputDiv = document.querySelector('.input-div');
    const input = document.querySelector('.input');
    const touchSong = document.getElementById('touchSong');
    const responseDiv = document.querySelector('.response');

    input.value = ' ';
    setupInputHandler(input);
});
