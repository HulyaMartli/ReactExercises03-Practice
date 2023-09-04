import { DATA_MEMBERS } from "../data"
import classes from "../assets/styles/FilterableContactList.module.css"
import { useState } from "react";

DATA_MEMBERS.sort((a,b)=>{
    if(a.profession>b.profession){
        return 1;
    }
    if(a.profession<b.profession){
        return -1;
    }

    return 0;
})

export function FilterableContactList() {
    /* Lifting state up: we moved useState from 
    SearchBar's scope to here because SearchBar and 
    ContactsTable uses it and we need it to be in a 
    empracive function like FilterableContactList */
    const [searchTerm, setSearchTerm] = useState("");
    const [onlineOnly, setOnlineOnly] = useState(false);
    return (
        <div>
            <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} onlineOnly={onlineOnly} onOnlineOnlyChange = {setOnlineOnly}/>
            <div>
                <ContactsTable searchTerm={searchTerm} onlineOnly={onlineOnly}/>
            </div>
        </div>
    );
}

function SearchBar({searchTerm, onTermChange, onlineOnly, onOnlineOnlyChange}) {
    //const [searchTerm, setSearchTerm] = useState("");
    return (
        <header>
            <form>
                <input 
                type="text" 
                name="searchTerm" 
                id="searchTerm" 
                placeholder="Search by member name" onChange={(e)=>{
                    onTermChange(e.target.value);
                }} value={searchTerm}/>
                <label>
                    <input 
                    type="checkbox" 
                    name="onlineOnly" 
                    id="onlineOnly" 
                    onChange={(e)=>{
                        onOnlineOnlyChange(e.target.checked);
                    }}
                    checked={onlineOnly}
                    />
                    Show just online
                </label>
                <p>{searchTerm}</p>
            </form>
        </header>
    );
}

function ContactsTable({searchTerm, onlineOnly}) {

    /* const contacts = DATA_CONTACTS.filter(c=>c.name.toLowerCase()
        .includes(searchTerm))
        .map((c)=> <RowContact key={c.id} name={c.name} email={c.email}/>); */
    
    const members = [];
    let lastProfession = null;

    DATA_MEMBERS.forEach((c)=>{
        const lowerName = c.name.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        const indexOf = lowerName.indexOf(lowerSearchTerm);

        if(indexOf === -1){
            return;
        }

        if(onlineOnly && !c.isOnline){
            return;
        }

        if(lastProfession !== c.profession){
            members.push(<RowProfession key={c.profession} profession={c.profession}/>);
        }

        members.push(
            <RowContact key={c.id} name={c.name} email={c.email} />
        );

        lastProfession = c.profession
    })

    return (
        <>
        <table className={classes.tbl}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {members}
                {/* <RowProfession profession="Frontend Developer"/>
                <RowContact/>
                <RowContact/>
                <RowProfession profession="Dentist"/> */}
            </tbody>
        </table>
        </>
    );
}

function RowProfession({profession}) {
    return (
        <tr>
            <th colSpan={2}>{profession}</th>
        </tr>
    );
}

function RowContact({name, email}) {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
}