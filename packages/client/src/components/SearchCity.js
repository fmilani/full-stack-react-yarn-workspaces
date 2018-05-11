import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import latinize from 'latinize';

class SearchCity extends Component {
  state = {
    queryCity: '',
    cities: [],
  };

  formatCity = city => `${city.name}, ${city.uf}`;

  async componentDidMount() {
    const cities = await (await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
    )).json();
    this.setState({
      cities: cities.map(city => ({
        id: city.id,
        name: city.nome,
        uf: city.microrregiao.mesorregiao.UF.sigla,
      })),
    });
  }

  render() {
    const { onSelectCity } = this.props;

    return (
      <Autocomplete
        getItemValue={item => this.formatCity(item)}
        inputProps={{
          placeholder: 'Para onde?',
          style: { textAlign: 'center' },
        }}
        menuStyle={{
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '60%',
        }}
        items={this.state.cities}
        renderItem={(item, isHighlighted) => (
          <div
            key={item.id}
            style={{
              fontSize: '1.2rem',
              padding: '10px 0',
              background: isHighlighted ? 'lightgray' : 'white',
            }}
          >
            {this.formatCity(item)}
          </div>
        )}
        shouldItemRender={(item, value) =>
          value &&
          value.length >= 3 &&
          latinize(this.formatCity(item))
            .toLowerCase()
            .indexOf(latinize(value).toLowerCase()) > -1
        }
        value={this.state.queryCity}
        onChange={e => this.setState({ queryCity: e.target.value })}
        onSelect={selectedCity => {
          this.setState({ queryCity: selectedCity });
          onSelectCity(selectedCity);
        }}
      />
    );
  }
}

export default SearchCity;
