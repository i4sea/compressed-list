import Form from './components/Form'
import BoxCard from './components/BoxCard'
import FormFilter from './components/FormFilter'

/*
  Alfabeto: abcdefghijklmnopqrstuvwxyz
  Alfabeto após a cifra de César (chave = 3): defghijklmnopqrstuvwxyzabc
*/

function App() {
  return (
    <>
      {/* Adicione aqui o campo para inserir um novo item seguindo a cifra de César */}
      <FormFilter />
      <Form />
      <BoxCard />
    </>
  )
}

export default App
