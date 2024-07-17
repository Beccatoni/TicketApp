
import Card from './components/Card'
import gold from './assets/images/gold.jpg'
function App() {

  const cards = [
    {
      title: "Gold Ticket",
      price: "$50",
      image: gold,
      description: "Buy one and win a lottery"
    }
    
    ,
    {
      title: "Gold Ticket",
      price: "$50",
      image: gold,
      description: "Buy one and win a lottery"
    },
    {
      title: "Gold Ticket",
      price: "$50",
      image: gold,
      description: "Buy one and win a lottery"
    }
  ]
  return (
    <>
    <p>Here are the available tickets</p>
    <div className=" w-full h-screen flex justify-between py-9 px-10 gap-6 ">

     {cards.map(card => <Card title={card.title} image={card.image} price={card.price} description={card.description} className="bg-amber-400"/>)}
    </div>

    
    </>
      
    
  );
}

export default App;
