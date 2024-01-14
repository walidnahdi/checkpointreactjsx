
import './Style.css';
import CustomName from './Componant/Name';
import CustomImage from './Componant/Image';
import CustomDescription from './Componant/Description';
import CustomPrice from './Componant/Price';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




const click = (name)  => {
  alert (`bonjour ${name}`)
};




function App() {
  return (
         
    <div className="App">
       <h2>entry your name </h2>
       <input type ='text' name='nom'  ></input>
    <Card className="Carte"style={{width:'18rem'}}>
      <CustomImage /> 
      <hr />
      <Card.Body>
        <Card.Title style={{color:'blue'}}>Card produit</Card.Title>
        <hr />
        <Card.Text>
        <CustomDescription />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><CustomName /></ListGroup.Item>
        <ListGroup.Item><CustomPrice /></ListGroup.Item>
      </ListGroup>
    </Card>

     <button onClick={click}>click me</button>

    
    

      
    </div>

  );
}



export default App;
