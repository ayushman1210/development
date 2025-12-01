import { SearchBar } from "./SearchBar"

export const Appbar=()=>{
    return (<div className="flex justify-between">
        <div>youtube </div>
        <SearchBar/>
        <div> login</div>
    </div>
    )
}