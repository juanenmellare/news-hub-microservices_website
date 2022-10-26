import React from "react";

const emptyUserDataState = {
    userData: null,
    setUserData: () => {},
};

const UserDataContext = React.createContext(emptyUserDataState);

const UserDataProvider = ({children}) => {
    const [userData, setUserData] = React.useState(emptyUserDataState.userData);

    const value = { userData, setUserData };
    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

const UserDataConsumer = ({children}) => (
    <UserDataContext.Consumer>
        { context => children(context) }
    </UserDataContext.Consumer>
)

const useUserDataContext = () => React.useContext(UserDataContext);

export { useUserDataContext, UserDataProvider, UserDataConsumer };
