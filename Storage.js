const addToLocalStorage = () =>{
    const IdINput = document.getElementById('storage-id');
    const id = IdINput.value; 
    const valueINput = document.getElementById('storage-value');
    const value = valueINput.value; 


    localStorage.setItem(id, value);

    IdINput.value = "";
    valueINput.value = "";
}