import './App.css'
// import Header from './componets/Header/Header'

import {Header, Footer, Testimonails,Info,Blog} from "./componets";
import Topics from './componets/Topics/Topics';

const App=() =>{


  return (
    <>
     <Header></Header>
     <Topics></Topics>
     <Info></Info>
     <Blog></Blog>
     <Testimonails></Testimonails>
     <Footer></Footer>
    </>
  )
}

export default App
