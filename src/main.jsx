import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <main>
            <form>
                
    <label htmlFor="nome">Nome:</label>
                <input
                   
          type="text"
          name="nome"
          id="nome"
         value={nome}
       onChange={(event) => setNome(event.target.value)}
                />

      <label htmlFor="telefone">Telefone:</label>
      <input
      type="tel"
      name="telefone"
      id="telefone"
     value={telefone}
       onChange={(event) => setTelefone(event.target.value)}
                />
            {telefone}
           <label htmlFor="c
         PF">CPF:</label>
          <imput
          type="number"
          Cpf="" id=""
          onChange={(event)=> setCpf(event.target.event)}
          />
          {CPF}
                   <button type="submit">Salvar</button>
            </form>
        </main>
    );
}

 event.preventDefault();

alert("olá")

setListaContatos([...listaContatos,

{
    nomeSalvo: nome,
    telefoneSalvo: telefone,

}


]);

};

console.table (listaContatos);

return(
<main>
       < form action="" onSubmit={registrar}>
       < label htmlFor="nome">Nome: </label> <in 
           {nome}

           <label htmlFor="NumeroTELFONE">N. TELEFONE:</label>
           {TELEFONE}

           <input type="text" Numero-CPF=""  id="CPF" 
           onChange={(event) => setCpf(event.target.value)}/>
           {CPF}
 

