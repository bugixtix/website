import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchResult({}){

    var location = useLocation();
    const {searchQuery} = location.state || {searchQuery:''}

    return(
        <div className='SearchResult'>
<h2>
                Search result for {searchQuery} comes here...
            </h2>
        </div>
    )
}