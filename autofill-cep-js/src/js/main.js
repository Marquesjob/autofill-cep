const cep = document.querySelector("#cep");

const showData = (result) => {
    for(const field in result) {
        if(document.querySelector("#" + field)){
              document.querySelector("#" + field).value = result[field];
        }
    }
};

 //tratando dado recebido do input

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");

    console.log(search.value);

    //configurando req
    const config = {
        method: "GET",
        mode: "cors",
        cache: "default"
    };

    //Realizando req
    fetch(`https://viacep.com.br/ws/${search}/json/`, config).then((res) => {
        res.json()
            .then(data => showData(data))
    });
})
