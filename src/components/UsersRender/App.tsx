import React, { useEffect } from "react";
import "./index.scss";
import { Users } from "./components/Users";
import { Success } from "./components/Success";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUsers, setSuccess, setSearch, addInvite, removeInvite } from "../../redux/usersSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const invites = useSelector((state: RootState) => state.users.invites);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);
  const search = useSelector((state: RootState) => state.users.search);
  const success = useSelector((state: RootState) => state.users.success);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onClickSendInvites = () => {
    dispatch(setSuccess(true));
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      dispatch(removeInvite(id));
    } else {
      dispatch(addInvite(id));
    }
  };

  return (
    <div className="container-users">
    <div className="App-users">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onClickInvite={onClickInvite}
          items={users}
          isLoading={isLoading}
          search={search}
          invites={invites}
          onChangeSearch={onChangeSearch}
          onClickSendInvites={onClickSendInvites}
        />
      )}
      </div>
      </div>
  );
}

export default App;
