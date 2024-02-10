import { useState } from 'react';
import Input from '../../ui/Input';
import FriendList from '../chat/FriendList';
import { useSearchUsers } from './useSearchUsers';

function SearchUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const { users } = useSearchUsers(searchQuery);

  function resetSearch() {
    setSearchQuery('');
  }

  return (
    <div>
      <Input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search users..."
      />
      <FriendList
        friends={users}
        isSearchSession={true}
        resetSearch={resetSearch}
      />
    </div>
  );
}

export default SearchUser;
