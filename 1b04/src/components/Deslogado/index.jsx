export default function Deslogado({setLogin, setUser}){
    return <div>
        <input type="text" placeholder="Insira seu nome" onChange={(e)=>setUser(e.target.value)}/>
        <br />
        <button onClick={() => setLogin(true)}>Acessar com o nome</button>
    </div>
}