// alternative
//const Book = ({ img, title, author, number }) => {) //

export const Book = (props) => {
  console.log(props);

  const { img, title, author, number } = props;

  return (
    <>
      <div className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h2>{author.toLocaleUpperCase()}</h2>
        <h4 className="number">{`#${number + 1}`}</h4>
      </div>
    </>
  );
};
