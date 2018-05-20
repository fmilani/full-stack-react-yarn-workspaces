import React, { Component } from 'react';
import Button from 'shared/Button';
import Header from 'shared/Header';
import Result from './components/Result';
import SearchCity from './components/SearchCity';
import latinize from 'latinize';

class App extends Component {
  // TODO: get initial city from gps
  state = {
    loading: false,
    price: 1234.56,
    details: {
      distance: 1234,
      duration: '12 horas 34 minutos',
      kmPrice: 1000,
      tollPrice: 234.56,
    },
    showDetails: true,
  };

  checkCityPrice = selectedCity => {
    if (!selectedCity) return;
    this.setState({ loading: true });
    fetch(`/price?destination=${latinize(selectedCity)}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ loading: false });
        this.setState({ price: data.price, details: data.details });
      });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Header title="Consultar Preço" />
        <SearchCity onSelectCity={this.checkCityPrice} />
        {this.state.loading ? (
          'Consultando preço...'
        ) : this.state.price ? (
          <Result
            price={this.state.price}
            details={this.state.details}
            showDetails={this.state.showDetails}
            onShowDetailsClick={() =>
              this.setState(prevState => ({
                showDetails: !prevState.showDetails,
              }))
            }
          />
        ) : null}
        <div
          style={{
            margin: '1rem 0',
          }}
        >
          <p>
            Se quiser já pedir o guincho, ou até mesmo tirar dúvidas, é só ligar
          </p>
          <a href="tel:555-555-5555">
            <Button>Ligar</Button>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
