import Form from './Form'
import BoxCard from './BoxCard'

/*
  Alfabeto: abcdefghijklmnopqrstuvwxyz
  Alfabeto após a cifra de César (chave = 3): defghijklmnopqrstuvwxyzabc
*/

function App() {
  return (
    <>
      {/* Adicione aqui o campo para inserir um novo item seguindo a cifra de César */}
      <Form />
      <BoxCard />
    </>
  )
}

export default App
