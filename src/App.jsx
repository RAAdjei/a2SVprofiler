import './App.css'
import Card from './components/Card'
import Avatar from './components/Avatar';

export default function App() {
  return (
    // The card component imported having children of avatar card
    <>
    <div className='App'>
      <Card>
      <Avatar
          person={{
            name: 'Michael Chandler',
            imageId: 'gtwi43'
          }}
          size={100}
          isPicture={true}
        />  
      </Card>


    </div>
    
    </>
    
   
  )
}


