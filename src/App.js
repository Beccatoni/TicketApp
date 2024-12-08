
import Card from './components/Card'
import {cards} from '../src/data/data.js'

function App() {

  
  return (
    <>
    <p>Here are the available tickets</p>
    <div className=" w-full min-h-screen flex  py-10 px-10 gap-6 max-w-6xl flex-wrap ">

     {cards.map(card => <Card title={card.title} i price={card.price} description={card.description} type={card.type}/>)}
    </div>

    
    </>
      
    
  );
}

export default App;
