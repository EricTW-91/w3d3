fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(res.ok){
            console.log('Sucsess!');
        }
        return res.json();
    })
    .then(data => {
        for(i=0; i<10; i++){
            document.getElementById(`ID_${i}`).innerHTML = `ID: ${data[i].id}`;
            document.getElementById(`Name_${i}`).innerHTML = `Name: ${data[i].name}`;
            document.getElementById(`userName_${i}`).innerHTML = `Username: ${data[i].username}`;
            document.getElementById(`Email_${i}`).innerHTML = `Email: ${data[i].email}`;
            document.getElementById(`Address_${i}`).innerHTML = `Address: ${data[i].address.suite} ${data[i].address.street}, ${data[i].address.city}`;

        }
    });


function filterID() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(res.ok){
            console.log('Sucsess!');
        }
        return res.json();
    })
    .then(data => {
        var x = document.forms["selectID_form"]["userID"].value;
        document.getElementById(`ID_f`).innerHTML = `ID: ${data[x].id}`;
        document.getElementById(`Name_f`).innerHTML = `Name: ${data[x].name}`;
        document.getElementById(`userName_f`).innerHTML = `Username: ${data[x].username}`;
        document.getElementById(`Email_f`).innerHTML = `Email: ${data[x].email}`;
        document.getElementById(`Address_f`).innerHTML = `Address: ${data[x].address.suite} ${data[x].address.street}, ${data[x].address.city}`;
    })
    
}


    