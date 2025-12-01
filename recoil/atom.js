import { atom, selector } from "recoil";
export const notificationatom=atom({
key:'notificationcount',
default:0
})

export const jobatom=atom({
key:'jobcount',
default:0
})

export const messageatom=atom({
key:'messagecount',
default:0
})

export const networkatom=atom({
key:'networkcount',
default:0
})

export const totalatom=selector({
    key:"totalcount",
    get:({get})=>{
        const networkcount=get(networkatom);
        const jobcount=get(jobatom);
        const messagecount=get(messageatom);
        const notificationcount=get(notificationatom);
        return networkcount+jobcount+messagecount+notificationcount;    
    }
})