import Card from 'react-bootstrap/Card';
import '../styles.css'
import { useState } from 'react'


function Stats(){
  
  const [posjedLopte1, postaviPosjedLopte1]= useState(0);
  const [posjedLopte2, postaviPosjedLopte2]= useState(0);

  const [udarci1, postaviUdarce1]= useState(0);
  const [udarci2, postaviUdarce2]= useState(0);

  const [udarciUokvir1, postaviUdarceUokvir1]= useState(0);
  const [udarciUokvir2, postaviUdarceUokvir2]= useState(0);

  const [prekrsaji1, postaviPrekrsaje1]= useState(0);
  const [prekrsaji2, postaviPrekrsaje2]= useState(0);

  const [zutiKartoni1, postaviZuteKartone1]= useState(0);
  const [zutiKartoni2, postaviZuteKartone2]= useState(0);
  
    return(
<Card className= "stats" style={{backgroundColor:'#fff'}}>
     <div className='hajduk-stats'>
       <h3>{posjedLopte1}  <button onClick={()=> postaviPosjedLopte1(posjedLopte1+1)}>+</button><button onClick={()=> postaviPosjedLopte1(posjedLopte1-1)}>-</button></h3>
       <h3>{udarci1}  <button onClick={()=> postaviUdarce1(udarci1+1)}>+</button><button onClick={()=> postaviUdarce1(udarci1-1)}>-</button></h3>
       <h3>{udarciUokvir1}  <button onClick={()=> postaviUdarceUkvir1(udarciUokvir1+1)}>+</button><button onClick={()=> postaviUdarceUokvir1(udarciUokvir1-1)}>-</button></h3>
       <h3>{prekrsaji1}  <button onClick={()=> postaviPrekrsaje1(prekrsaji1+1)}>+</button><button onClick={()=> postaviPrekrsaje1(prekrsaji1-1)}>-</button></h3>
       <h3>{zutiKartoni1}  <button onClick={()=> postaviZuteKartone1(zutiKartoni1+1)}>+</button><button onClick={()=> postaviZuteKartone1(zutiKartoni1-1)}>-</button></h3>
    </div>  
    <div>
        <h3 className='stats-detalji'>Posjed Lopte</h3>
        <h3 className='stats-detalji'>Udarci</h3>
        <h3 className='stats-detalji' >Udarci u okvir</h3>
        <h3 className='stats-detalji'>Prekršaji</h3>
        <h3 className='stats-detalji'>Žuti kartoni</h3>
    </div>
    <div>
    <h3> <button onClick={()=> postaviPosjedLopte2(posjedLopte2+1)}>+</button><button onClick={()=> postaviPosjedLopte2(posjedLopte2-1)}>-</button>  {posjedLopte2} </h3>
       <h3>  <button onClick={()=> postaviUdarce2(udarci2+1)}>+</button><button onClick={()=> postaviUdarce2(udarci2-1)}>-</button>  {udarci2}</h3>
       <h3>  <button onClick={()=> postaviUdarceUkvir2(udarciUokvir2+1)}>+</button><button onClick={()=> postaviUdarceUokvir2(udarciUokvir2-1)}>-</button>  {udarciUokvir2}</h3>
       <h3>  <button onClick={()=> postaviPrekrsaje2(prekrsaji2+1)}>+</button><button onClick={()=> postaviPrekrsaje2(prekrsaji2-1)}>-</button>  {prekrsaji2}</h3>
       <h3> <button onClick={()=> postaviZuteKartone2(zutiKartoni2+1)}>+</button><button onClick={()=> postaviZuteKartone2(zutiKartoni2-1)}>-</button>  {zutiKartoni2} </h3>
    </div>
    
   
    
</Card>
    )
}
export default Stats