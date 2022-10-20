export function Filter({ onChange }) {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} />
    </label>
  );
}
