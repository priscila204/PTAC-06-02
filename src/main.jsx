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

                <button type="submit">Salvar</button>
            </form>
        </main>
    );
}