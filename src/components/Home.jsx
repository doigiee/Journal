import React from "react"
import { Link } from "react-router-dom"

// send and destructures 
const Home = ({ entries }) => {
  return (
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => (
        <p key={index}>
          <Link to={`entry/${index}`}>{entry.content}</Link>
          {/* Lin is used over a tag as a tag refreshes the whole page Link doesn't */}
        </p>
      ))}
    </>
    // whenever we need jsx javascript e need ()
    // map accross entries and when we get an entries of we map it to jsx
    // react automatically knpows how to render that
    // need to render a paragraph and gice it an index
    // 
  )
}

export default Home
