import React, { useState, useEffect } from "react";

function Fetchapi() {
    const [users, setUsers] = useState([]); // Corrected state variable name 
    const [searchName, setSearchName] = useState(""); // Initialize search state

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                console.log("data", data);
                setUsers(data); // Corrected to set the fetched users in state
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, []); // Empty dependency array so the effect runs once on mount


    const filterData = users.filter((user) => {
        return user.name.toLowerCase().includes(searchName.toLowerCase())
    })
    return (
        <div style={{ margin: "50px" }}>
            <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Search by name..."
                style={{ padding: "10px", marginBottom: "20px", width: "300px" }}
            />
            {filterData.map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: "2px solid white",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px",
                    }}
                >
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default Fetchapi;
