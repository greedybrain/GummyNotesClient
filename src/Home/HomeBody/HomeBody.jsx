import React, { useEffect } from 'react'
import { useState } from 'react'
import './HomeBody.css'
import Notes from './Notes/Notes'
import { notes } from '../../data'

const HomeBody = () => {
        const [allNotes, setAllNotes] = useState(notes)
        const setNotes = () => {
                setAllNotes(notes)
        }

        useEffect(() => {
                setNotes()
        })
        return (
                <div className="body">
                        <Notes allNotes={allNotes} />
                </div>
        )
}

export default HomeBody
