import { FilterBox, FilterInp, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <FilterInp type="text" valueFilter={filter} onChange={onChange} />
      </Label>
    </FilterBox>
  );
};

Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
