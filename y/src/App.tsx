import './App.css'
// import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
  const extraItems = ['item6', 'item7', 'item8', 'item9', 'item10'];

  const handleOnItemSelected = (item: string) => {
    console.log('item selected', item);
  }

  return (
    <>
      <div>
        {/* <Message/> */}
        <ListGroup items={extraItems} heading={'Just Items'} onItemSelected={handleOnItemSelected} />
      </div>

    </>
  )
}

export default App
