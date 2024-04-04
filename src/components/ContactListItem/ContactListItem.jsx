import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/components/Button/Button';

class ContactListItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <li>
        <span>{name}</span>
        <span>{number}</span>
        <Button
          type="button"
          label="Delete"
          onClick={() => deleteContact(id)}
        />
      </li>
    );
  }
}

export default ContactListItem;
