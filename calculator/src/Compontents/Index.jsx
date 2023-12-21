function Button({ handler }) {
  let obj = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "+",
    "c",
    "*",
    "/",
  ];
  return (
    <>
      <div className="mona">
        {obj.map((item) => {
          return (
            <button className="sunny" onClick={() => handler(item)} key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
export default Button;
