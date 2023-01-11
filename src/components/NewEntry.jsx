import React, { useState } from "react"
import { useParams } from "react-router-dom"

const NewEntry = ({ addEntry }) => {
  const { category } = useParams()
  const [entry, setEntry] = useState('')

  function submit(evt) {
    evt.preventDefault()
    addEntry(category, entry)
  }
  // form which allows us to submit a new entry
  // and calls the entry function
  // and passes in the category and the entry
  // 

  return (
    <>
      <h2>New Entry in {category} category</h2>
      <form onSubmit={submit} className="container">
        <div>
          {/* controlled component means controlled by the state, the value of the text area comes from entry which is a use stae which means its bound by use state */}
          <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary mt-2">Create Entry</button>
      </form>
    </>
  )
}

export default NewEntry
