const Card = props => {
  return (
    <div
      className="main-card"
      style={{
        maxWidth: "100%",
        minWidth: "400px",
        margin: "1rem",
        backgroundColor: `${props.bodycolor}`,
        textAlign: "center"
      }}
    >
      <div
        className="card-header"
        style={{
          backgroundColor: `${props.hdrcolor}`,
          color: `${props.hdrtext}`,
          fontSize: "30px"
        }}
      >
        {props.header}
        {props.title && (
          <h6
            className="card-title"
            style={{ fontStyle: "italic", fontSize: "15px" }}
          >
            {props.title}
          </h6>
        )}
      </div>
      <div className="card-body" style={{ color: `${props.bodytext}` }}>
        {props.text && (
          <p style={{ fontSize: "15px" }} className="card-text">
            {props.text}!
          </p>
        )}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
};
export default Card;
