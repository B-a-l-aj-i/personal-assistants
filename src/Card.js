
function Card(props){
    let {src,name,handle,desc}=props
    return (
   <div className="card">
     <div className="card-image" >
        <figure className="image is-4by3">
           <img src={src}  alt={name} />
        </figure>
     </div>
      <div className="card-content">
         <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6" >  <a href={handle} target="_blank" rel="noreferrer"> { `@visit!!`} </a> </p>
         </div>
         <div className="content" >{desc}</div>
      </div>
   </div>
    )
}
export default Card