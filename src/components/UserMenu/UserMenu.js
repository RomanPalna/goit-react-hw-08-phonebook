import avatar from '../../icons/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div>
      <img alt="avatar" src={avatar} width="35" />
      <span>Have a nice day, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
