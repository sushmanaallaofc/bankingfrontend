const Card = (props) => {

    return (
        <div className="main-card" style={{maxWidth:"100%", minWidth:"350px", margin:"1rem",marginTop:'100px', backgroundColor:`${props.bodycolor}`, boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",borderRadius:'12px'}}>
            <div className="card-header" style={{backgroundColor:`${props.hdrcolor}`, color:`${props.hdrtext}`}}>{props.header}</div>
            <div className="card-body" style={{color:`${props.bodytext}` ,textAlign:"center"}}>
                {props.title && (<h4 className="card-title">{props.title}</h4>)}
                {props.text && (<p style={{marginTop:'50px'}} className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}
export default Card;