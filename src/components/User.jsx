function User({ name, email, password, surname }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{surname}</h6>
        <p className="card-text">{email}</p>
        <p className="card-text">{password.slice(3)}***</p>
      </div>
    </div>
  );
}

export default User;
