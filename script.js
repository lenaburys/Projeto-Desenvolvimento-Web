const btnLogin = document.getElementById('btnLogin')
const btnFechar = document.getElementById('btnFechar')
const dialog = document.getElementById('login')
const frmLogin = document.querySelector('#login form')

btnLogin.onclick = function(){
    dialog.showModal()
    let msgErro = document.querySelector('.erro')
    if(msgErro) {
        dialog.removeChild(msgErro)
    }
}

btnFechar.onclick = function(){
    dialog.close()
}

let dadosUsuario = [
    {nome: "user", email: "teste@teste.com", senha: "123"},
    {nome: "aluno", email: "aluno@teste.com", senha: "321"}
]

frmLogin.addEventListener('submit', evento => {
    evento.preventDefault()
    
    let msgErro = document.querySelector('.erro')
    if(msgErro) {
        dialog.removeChild(msgErro)
    }

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    dadosUsuario.forEach(usuario => {
        if (email === usuario.email && senha === usuario.senha) {
            sessionStorage.setItem('usuarioLogado', true)
            sessionStorage.setItem('nomeUsuario', usuario.nome)
        
            window.location.href = './admin/index.html'
        }
    })

    let logado = sessionStorage.getItem('usuarioLogado')
    if (!logado) {
        let erro = document.createElement('p')
        erro.classList.add('erro')
        erro.innerText = 'Login ou senha invalida'
        dialog.insertBefore(erro, dialog.firstChild)
        document.querySelector()
    }
})