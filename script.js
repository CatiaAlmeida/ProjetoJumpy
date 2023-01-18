const formulario = document.querySelector("#principal"); 
let paragrafos = document.querySelectorAll('.msgAlerta') 

formulario.onsubmit = (evento) => {
    evento.preventDefault(); 

    //Receber o valor do campo
        //campo nome
    var nome = document.querySelector("#nome").value

    if (nome === ""){
        //verificar se o campo está vazio
        paragrafos[0].innerHTML = "Campo obrigatório";
        paragrafos[0].style.color='#E73550'
        } else {     //Agora foi !!!! uhuuuuuu
            paragrafos[0].innerHTML = "Sucesso!"
            paragrafos[0].style.color='#0F7B0F'
        }

        //campo email
        var email = document.querySelector("#email").value

    if (email === ""){
        //verificar se o campo está vazio
        paragrafos[1].innerHTML = "Campo obrigatório"
        paragrafos[1].style.color='#E73550'
        } else {
            paragrafos[1].innerHTML = "Sucesso!"
            paragrafos[1].style.color='#0F7B0F'
        }

        //campo telefone
        var telefone = document.querySelector("#telefone").value

    if (telefone === ""){
        //verificar se o campo está vazio
        paragrafos[2].innerHTML = "Campo obrigatório"
        paragrafos[2].style.color='#E73550'
        } else {
            paragrafos[2].innerHTML = "Sucesso!"
            paragrafos[2].style.color='#0F7B0F'
        }

        //campo cpf
        var cpf = document.querySelector("#cpf").value

    if (cpf === ""){
        //verificar se o campo está vazio
        paragrafos[3].innerHTML = "Campo obrigatório"
        paragrafos[3].style.color='#E73550'
        } else {
            paragrafos[3].innerHTML = "Sucesso!"
            paragrafos[3].style.color='#0F7B0F'
        }

        //campo senha
        var senha = document.querySelector("#senha").value

        if (senha === ""){
            //verificar se o campo está vazio
            paragrafos[4].innerHTML = "Campo obrigatório"
            paragrafos[4].style.color='#E73550'
            } else {
                paragrafos[4].innerHTML = "Sucesso!"
                paragrafos[4].style.color='#0F7B0F'
            }


            if (nome!="" && email!="" && telefone != "" && cpf !="" && senha != "" && botao != ""){
                paragrafos[5].innerHTML = "Sucesso"
                paragrafos[5].style.color='#0F7B0F'
                document.querySelector("#nome").value=""
                document.querySelector("#email").value=""
                document.querySelector("#telefone").value=""
                document.querySelector("#cpf").value=""
                document.querySelector("#senha").value=""
            
        //botão
        // var botao = document.querySelector("#botao").value

        // if (botao === ""){
        //     //verificar se o campo está vazio
        //     // paragrafos[5].innerHTML = "Campos obrigatórios não registrados"
        //     paragrafos[5].style.color='#E73550'
        //     // } else {

        //     //     // if (botao != "")
        //     //     paragrafos[5].innerHTML = "Sucesso"
        //         // paragrafos[5].style.color='#0F7B0F'
            } else {
                paragrafos[5].innerHTML = "Campos obrigatórios não registrados"
                paragrafos[5].style.color='#E73550'
            }

                // uhuuuuu




                //  deu ruim!!!
                
        
                

                // mais uma vez...!!!
                // const btn = document.getElementsByClassName('.btn')

                // btn.addEventListener('click', () =>{
                //     document.body.style.color='#0F7B0F'
                // });
   


                // alterando o nome dos id´s e orando  kkkkkkk
                // var validar1 = document.getElementById ('validar1')
                // var validar2 = document.getElementById ('validar2')

                // validar1.addEventListener ('click', function() {
                //     input.forEach(element => {
                //         if (element.value == "") {
                //             textAlertErro()
                //         }else{
                //             textAlertSucesso()
                //         }
                //     });
                // })
} 


