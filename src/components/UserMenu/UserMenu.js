import avatar from '../../icons/avatar.png';

function UserMenu() {
  const name = 'User';
  return (
    <div>
      <img alt="avatar" src={avatar} width="35" />
      <span>Have a nice day, {name}</span>
      <button type="button">Log Out</button>
    </div>
  );
}

export default UserMenu;
