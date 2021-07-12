const Square = (props) => {
  return <div className="box" style={{ background: props.bg }}></div>;
};

const Board = () => {
  return (
    <div style={{ width: "340px" }} className="card2">
      {[...Array(8).keys()].map((i) => {
        return [...Array(8).keys()].map((j) => {
          // console.log(i, j);
          if (i % 2 === j % 2) {
            console.log("working");
            return <Square bg="black" />;
          }
          return <Square bg="white" />;
        });
      })}
    </div>
  );
};

export default Board;
