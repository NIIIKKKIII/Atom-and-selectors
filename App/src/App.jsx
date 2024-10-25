import { totalnotificationSelector, NOTIFICATIONS } from "./Atoms";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios"; // Make sure axios is imported

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [notification, setNotification] = useRecoilState(NOTIFICATIONS);
  const totalValue = useRecoilValue(totalnotificationSelector);

  useEffect(() => {
    axios.get("http://localhost:3000/N")
      .then(res => {
        setNotification({
          Home: res.data.Home,
          Jobs: res.data.Jobs,
          Network: res.data.MyNetwork, 
          Notifications: res.data.Notifications
        });
      })
      .catch(error => {
        console.error("Error fetching notifications:", error);
      });
  }, [setNotification]);

  return (
    <div>
    
      <button>Home {notification.Home}</button>
      <button>Jobs {notification.Jobs}</button>
      <button>Network {notification.Network}</button>
      <button>Notifications {notification.Notifications}</button>
      <button>Total {totalValue}</button>
    </div>
    
  );
}

export default App;


// Problem in this code is that we have se the defaukt value to 0 to every thing in the atom and this makes the 
// default value of all the things to zero and then get back the data and the updates it after fetching which is
// wrong approach