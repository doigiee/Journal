import React from "react"

const ShowEntry = ({ entry }) => {
  return (
    <>
    {/* recieves an entry as a prop then does that single response */}
      <h5>{entry.content}</h5>
      <p>Posted in {entry.category.name}</p>
    </>
  )
}

export default ShowEntry
