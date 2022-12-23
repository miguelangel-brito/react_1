const Card = (props) => {
	return (
		<div className="card">
			<img src={props.img} className="card-img-top" alt={props.alt} />
			<div className="card-body">
				<h5 className="card-title">{props.tittle}</h5>
				<a href="#" className="btn btn-warning">
					comprar
				</a>
			</div>
		</div>
	);
};

export default Card;