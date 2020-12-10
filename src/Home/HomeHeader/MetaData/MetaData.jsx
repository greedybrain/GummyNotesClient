import React, { useContext } from 'react'
import UserContext from '../../../Context/userContext'
import './MetaData.css'
import NoteCount from './NoteCount/NoteCount'

const MetaData = () => {
        return (
                <div className="meta_data_wrapper">
                        <NoteCount />
                </div>
        )
}

export default MetaData
