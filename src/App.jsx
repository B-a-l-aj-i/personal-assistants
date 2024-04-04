import Card from "./Card"
import "bulma/css/bulma.css";
import all from "./assistant"

function App(){
  
    return(
        <div >
        
         <section className="hero is-success" >
          <div className="hero-body">
            <p className="title">Personal digital assistant</p>
          </div>
        </section>
        
          
        <div className="container">
         <section className="section">
         
          
          <div className="grid is-col-min-12">
          {all.map((a,b)=>{

         return(
          
         <div className="cell" key={b+1}> 
                 <Card 
              src={a.imageSource}
              name={a.name}
              handle={a.link}
              desc={a.description}
            />
             </div>
             ) 
          })
             }
             </div> 
         </section>

        </div>

          
        </div>
    )
}

export default App