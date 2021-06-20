import React, { Component } from 'react';
import List from '../list';
import './app.css';
import SearchMovies from '../service/SearchMovies';

export default class App extends Component {
  state = {
    dataBase: [],
  };

  search = SearchMovies;

  constructor() {
    super();
    this.Fun();
  }

  Fun = () => {
    this.search
      .then((res) => res.results)
      .then((res) => {
        this.setState({ dataBase: res });
      });
  };

  render() {
    const { dataBase } = this.state;
    return (
      <div>
        <List data={dataBase} />
      </div>
    );
  }
}
