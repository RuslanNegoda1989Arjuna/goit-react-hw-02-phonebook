import { BtnDelete, ContactIt, Item, ListBox } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListBox>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactIt>
                {name}: {number}
              </ContactIt>
              <BtnDelete type="button" onClick={() => onDelete(id)}>
                Delete
              </BtnDelete>
            </Item>
          );
        })}
      </ul>
    </ListBox>
  );
};
