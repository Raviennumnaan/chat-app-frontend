import Friend from './Friend';

function FriendList({ friends, isSearchSession, resetSearch }) {
  return (
    <ul onClick={isSearchSession && resetSearch}>
      {friends.map(friend => (
        <Friend friend={friend} key={friend._id} />
      ))}
    </ul>
  );
}

export default FriendList;
