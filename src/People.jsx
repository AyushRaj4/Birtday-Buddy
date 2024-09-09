const People = (props) => {
  const { name, age, image } = props;
  return (
    <article className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default People;
