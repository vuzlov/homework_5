function initiation() {
    const UserEmail = prompt('enter your email');
    const login = 'admin@test.io';
    const password = 'admin1234';
    if(UserEmail === login) {      
        const paswod = prompt('enter password');
        if (paswod === password) {        
            alert('login sucsess');
        } else {
            alert('wrong password');
        }    
    } else {
        alert('wrong email');
    }
}
initiation();
