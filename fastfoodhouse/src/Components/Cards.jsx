function Card(props) {
    const { img, title, type } = props;
  
    return (
      <div className="cards">
        <img className="card-image" src={img} alt={title}/>
        <span>{title}</span>
        <span>{type}</span>
      </div>
    );
  }
  
  export default Card;
  