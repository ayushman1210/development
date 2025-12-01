import { useMemo, useState, useEffect } from "react"
import Fetch from "./component/fetch"
import Useeffect from "./component/useeffect" // keep or remove if unused

function App() {

  const [bank1, setbank1] = useState({ money: 0 })
  const [bank2, setbank2] = useState({ money: 0 })
  const [bank, setbank] = useState({ money: 0 })

  useEffect(() => {
    const t = setTimeout(() => setbank1({ money: 100 }), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setbank2({ money: 200 }), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setbank({ money: 100 }), 1000)
    return () => clearTimeout(t)
  }, [])

  const Money = useMemo(() => {
    // ensure numeric values
    return (Number(bank.money ?? 0)) + (Number(bank1.money ?? 0))
  }, [bank, bank1])

  const income = Number(Money) + Number(bank2.money ?? 0)

  // debug - remove when fixed
  console.log("bank", bank, "bank1", bank1, "bank2", bank2, "Money", Money, "income", income)

  return (
    <>
      {/* <Useeffect/> */}
      {/* <Fetch/> */}
      <h1>hello i am ayushman my monthly income is {income}</h1>
    </>
  )
}

export default App