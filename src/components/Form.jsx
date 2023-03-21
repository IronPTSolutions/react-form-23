import { useState } from "react";

const empty = {
  name: "",
  email: "",
  password: "",
  surname: "",
};

function Form({ addUser }) {
  const [user, setUser] = useState(empty);

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = ev.target.value;

    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addUser(user);
    setUser(empty);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 border-bottom pb-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>

        <input
          value={user.name}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          surname
        </label>

        <input
          value={user.surname}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="surname"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          email
        </label>

        <input
          value={user.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          id="email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          password
        </label>

        <input
          value={user.password}
          onChange={handleChange}
          type="password"
          className="form-control"
          id="password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default Form;
