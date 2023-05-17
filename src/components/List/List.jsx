import { UlStyled, ButtonStyled, LiStyled } from './List.styled';
import { remove } from 'redux/slice';
import { useDispatch } from 'react-redux';
const List = ({contacts}) => {
  const dispatch = useDispatch();
  return (
    <UlStyled>
      {contacts.map(({ id, number, name }) => (
        <LiStyled key={id}>
          {name}: {number}
          <ButtonStyled onClick={() => dispatch(remove(id))}>Delete</ButtonStyled>
        </LiStyled>
      ))}
    </UlStyled>
  );
};

export default List;
