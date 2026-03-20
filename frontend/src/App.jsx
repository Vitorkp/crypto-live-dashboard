import { useState, useEffect } from 'react'

function App() {
  const [preco, setPreco] = useState(null)

  const buscarPreco = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/preco/bitcoin')
      const data = await res.json()
      setPreco(data.bitcoin.usd)
    } catch (e) { console.log("Ligue o Python!") }
  }

  useEffect(() => { buscarPreco() }, [])

  return (
    <div style={{ background: '#111', color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Bitcoin Price</h1>
      <h2 style={{ color: '#f7931a', fontSize: '3rem' }}>
        {preco ? `U$ ${preco.toLocaleString()}` : 'Carregando...'}
      </h2>
      <button onClick={buscarPreco} style={{ padding: '10px 20px', cursor: 'pointer' }}>Atualizar</button>
    </div>
  )
}
export default App