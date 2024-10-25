import { atom, selector } from "recoil";

export const NOTIFICATIONS = atom({
    key: "NOTIFICATIONSAtom",
    default :{
        Home: 0,
        Jobs:0,
        Network:0,
        Notifications:0
    }
})


export const totalnotificationSelector = selector({
    key: "totalnotificationSelector",
    get: ({get})=>{
        const Allnotifications = get(NOTIFICATIONS);
        return Allnotifications.Jobs +
        Allnotifications.Home+
        Allnotifications.Network+
        Allnotifications.Notifications
    }
    
})




//**IMP**


// The default value of a atom is always synchronous that is why we cannot just use useeffect in it ot get the direct value 
// from the backend, however a selector can be asynchronous and a atom can set it value to be a selector 
// through which it can be asynchronous



//****************IMPOORRTANTTTT*****************
//  This is where we get to the idea of ASYNCHRONOUS DATA QUERIES