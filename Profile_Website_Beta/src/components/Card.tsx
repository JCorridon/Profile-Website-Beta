interface Props {
  image: string;
  title: string;
  summary: string;
}

function Card({ image, title, summary }: Props) {
  return (
    <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
