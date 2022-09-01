function Card(props) {
    const { name } = props.info;
  
    return (
      <div className="card">
        <h1>{name}</h1>
      </div>
    );
  }
  
  export default Card;