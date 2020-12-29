import React, { useEffect, useState } from 'react'
import './App.css';
import Facebook from "./Componets/Facebook";
import { FormControl, ListGroup, Media, Nav, Navbar, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function App() {

  const [all, setAll] = useState([])
  const [count, setCount] = useState(null)
  const getdat = async () => {
    await axios.get('http://inmyhouse.co:4500/all')
      .then(async response => {
        //console.log(response.data)
        await setAll(response.data)
      }, error => {
        console.log('error')
      })
  }

  const getcount = async () => {
    await axios.get('http://inmyhouse.co:4500/count')
      .then(async response => {
        //console.log(response.data)
        await setCount(response.data.result.numero)
      }, error => {
        console.log('error')
      })
  }

  useEffect(() => {
    getdat()
    getcount()
    const interval = setInterval(() => {
      getdat()
      getcount()
    }, 3000);
    return () => clearInterval(interval);

  }, [])
  return (
    <>
      <Navbar bg="light" expand="lg"  fixed="top">
        <Navbar.Brand href="#home">Pacto con el planeta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Form inline>
            <Nav.Link href="#home">HAN FIRMADO: {count}</Nav.Link>
            <Button variant="outline-success" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=haroldmaussa%40gmail.com&item_name=mantener+infraestructura&currency_code=USD">Donar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <div className='pacto'>
          <h3>Hoy hago un pacto con el planeta</h3>
          <p>
            Hoy en este dia, quiero hacer un pacto con el planeta, quiero hacerme cinco compromisos no solo conmigo mismo sino también con el mundo entero, quiero ser parte del cambio, quiero contribuir a tener un mundo mejor y que la esperanza de un mejor mañana sea mi mayor contribución al cuidado de este mundo, por las generaciones venideras, por mis hijos, por mis padres, mis nietos, por mis sobrinos, por mi mismo hoy me comprometo a cumplir estos cinco propósitos para el resto de mi vida.
          </p>

          <ListGroup>
            <ListGroup.Item>Reducir el uso de plásticos, y reutilizar lo más que pueda los empaques, ayudare a reciclar para que en el mundo se reduzca la contaminación esta será mi contribución.</ListGroup.Item>
            <ListGroup.Item>No arrojar basura a las calles, fuentes hídricas (Ríos, Lagos o Mares) para conservar el agua, la fauna que en ella habita.</ListGroup.Item>
            <ListGroup.Item>Cuidar el agua, no generar desperdicios, cerraré la llave y los grifos cuando no la esté usando y cuidar las fuentes naturales de agua a mi alrededor.</ListGroup.Item>
            <ListGroup.Item>Respetar el medio ambiente, plantas, árboles, animales y demás recursos naturales para que las generaciones que vengan después de mi las disfruten.</ListGroup.Item>
            <ListGroup.Item>Enseñaré a mis Hijos, Sobrinos, Nietos a cumplir los cuatro compromisos de este pacto.</ListGroup.Item>
          </ListGroup>
          <p>
            Me comprometo a cumplir por siempre este pacto, y para constancia dejo mi firma digital en él, como muestra de cumplimiento y de ejemplo para los demás, pero sobretodo para no olvidarlo nunca.
          </p>

        </div>
        <div className='facebook'>
          <Facebook />
          <ListGroup>
            <ListGroup.Item style={{ textAlign: 'center' }}><h4>Los que ya firmaron</h4></ListGroup.Item>
            {all.map((key) => {
              return (
                <ListGroup.Item key={key.id}>
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="mr-3"
                      src={key.picture}
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <h5>{key.name}</h5>
                    </Media.Body>
                  </Media>
                </ListGroup.Item>
              )
            })}
          </ListGroup>

        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
