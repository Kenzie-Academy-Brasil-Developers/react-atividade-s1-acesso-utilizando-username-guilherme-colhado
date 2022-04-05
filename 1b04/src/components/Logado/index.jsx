export default function Logado({setLogin, user}){
    return <div>
        <h1>Bem-vindo, {user} !</h1>
        <button onClick={() => setLogin(false)}>Sair</button>
    </div>
}