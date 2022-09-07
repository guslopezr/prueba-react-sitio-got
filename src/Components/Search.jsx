function TermSearch(setFiltering) {
  return (
    <>
      <div className="busqueda">
        <br />
        <label htmlFor="name">Buscar por Nombre:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          onChange={(e) => setFiltering(e.target.value)}
        />
        <br />

        <br />
      </div>
    </>
  );
}

export default TermSearch;
