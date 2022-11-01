export const PhonebookForm = () => {
  const userSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form autoComplete="off" onSubmit={userSubmit}>
      <label htmlFor="">
        Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Number
        <input type="text" name="number" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
