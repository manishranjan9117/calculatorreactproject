function Display({ data }) {
  return (
    <>
      <input type="text" readOnly className="inputbox" value={data}></input>
    </>
  );
}
export default Display;
