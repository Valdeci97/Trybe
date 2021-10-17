import { Component } from "react";

class Build extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <section>
        <div>
          <label htmlFor="casa">
            Casa<input
            id="casa"
            type="radio"
            value="casa"
            name="realState"
            onChange={ handleChange }
            required></input>     
          </label>
          <label htmlFor="ap">
            Apartamento<input
            id="ap"
            type="radio"
            value="apartamento"
            name="realState"
            onChange={ handleChange }
            required></input>
          </label>
        </div>
      </section>
    );
  }
}

export default Build;