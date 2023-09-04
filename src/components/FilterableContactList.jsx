import { DATA_CONTACTS } from "../data"
import classes from "../assets/styles/FilterableContactList.module.css"
import { useState } from "react";

export function FilterableContactList() {
    /* Lifting state up: we moved useState from 
    SearchBar's scope to here because SearchBar and 
    ContactsTable uses it and we need it to be in a 
    empracive function like FilterableContactList */
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm}/>
            <div>
                <ContactsTable searchTerm={searchTerm}/>
            </div>
        </div>
    );
}

function SearchBar({searchTerm, onTermChange}) {
    //const [searchTerm, setSearchTerm] = useState("");
    return (
        <header>
            <form>
                <input 
                type="text" 
                name="searchTerm" 
                id="searchTerm" 
                placeholder="Write the contact name" onChange={(e)=>{
                    onTermChange(e.target.value);
                }} value={searchTerm}/>
                <label>
                    <input 
                    type="checkbox" 
                    name="onlineOnly" 
                    id="onlineOnly" 
                    onChange={()=>{}}/>
                    Show just online
                </label>
            </form>
        </header>
    );
}

function ContactsTable({searchTerm}) {

    const contacts = []; 
    
    DATA_CONTACTS.forEach((c)=>{
        if(c.name.toLowerCase().includes(searchTerm)){
            contacts.push(c);
        }
    })
    console.log(contacts)
    
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
                <RowProfession profession="Frontend Developer"/>
                <RowContact/>
                <RowContact/>
                <RowProfession profession="Dentist"/>
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