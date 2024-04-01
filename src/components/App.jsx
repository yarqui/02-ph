import { PureComponent } from 'react';

import Section from '../common/components/Section/Section';
import { Container } from '../common/components/Container/Container.styled';

const Titles = {
  PHONEBOOK: 'Phonebook',
  CONTACTS: 'Contacts',
};

class App extends PureComponent {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <Section title={Titles.PHONEBOOK}></Section>

        <Section title={Titles.CONTACTS}></Section>
      </Container>
    );
  }
}

export default App;
