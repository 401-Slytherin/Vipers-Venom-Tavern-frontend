import CardForm from "./CardForm"

export default function Main3({createSellCard, user}) {
  return (
    <main>
      <CardForm createSellCard={createSellCard}
      user={user}/>
    </main>
  )
}