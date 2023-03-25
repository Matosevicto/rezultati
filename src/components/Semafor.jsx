import Card from 'react-bootstrap/Card';
import '../styles.css'
import { useState } from 'react'
import Timer from './Timer';




function Semafor(){

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [prvi, postaviPrvi]= useState(0);
  const [drugi, postaviDrugi] = useState(0);

  const resetState = () => {
    postaviPrvi(0);
    postaviDrugi(0);
  };

    return(
<Card className= "semafor" style={{backgroundColor:'#fff'}}>
   <div className='hajduk'>
    <img src="https://upload.wikimedia.org/wikipedia/hr/thumb/a/ad/HNK_Hajduk_Split.svg/225px-HNK_Hajduk_Split.svg.png"  alt="hajduk-img" style={{ height:'150px', width:'150px'}}  />
    <h2 className='hajduk-naziv'>Hajduk</h2>
    </div>
    
    <div className='informacije' >
        <h3 className='datum' >{date}</h3>
        <Timer/>
        <h1 className='rezultat'>{prvi}:{drugi}</h1>
        <a className='promjena-rezultata'>
     
        <button onClick={()=> postaviPrvi(prvi+1)}>+</button>
        <button onClick={()=> postaviPrvi(prvi-1)}>-</button>
        <button onClick={()=> postaviDrugi(drugi+1)}>+</button>
        <button onClick={()=> postaviDrugi(drugi-1)}>-</button>
        <button onClick={resetState}>Reset</button>
        </a>
        
    </div>
    <div className='dinamo'>
    <img   src="https://api.sofascore.app/api/v1/team/2032/image" alt="dinamo-img" style={{ height:'150px', width:'150px'}} />
    <h2 className='dinamo-naziv'>Dinamo</h2>
    </div>
   
    
</Card>
    )
}
export default Semafor