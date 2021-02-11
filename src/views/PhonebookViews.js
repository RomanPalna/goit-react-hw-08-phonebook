import Phonebook from '../components/Phonebook';
import Contacts from '../components/Contacts';
import Finder from '../components/Finder';

export default function PhonebookViews() {
  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook />

      <h2>Contacts</h2>
      <Finder />
      <Contacts />
    </div>
  );
}
