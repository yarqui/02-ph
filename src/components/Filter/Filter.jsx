import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Filter extends PureComponent {
  static propTypes = { filterContacts: PropTypes.func.isRequired };

  render() {
    const { filter } = this.props;

    return (
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => this.props.filterContacts(e.target.value)}
        required
      />
    );
  }
}

export default Filter;
