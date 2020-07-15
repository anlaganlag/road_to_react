import React , { useState } from 'react'

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]
  const handleSearch = e => {
    // C
    console.log(e.target.value)
    }
  
  return (
    <div>
      <h1> Gal Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  )
}

const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleChange = e => {
    setSearchTerm(e.target.value)
    //B
    props.onSearch(e)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>正在查找: <strong>{searchTerm}</strong></p>
    </div>
  )
}

const List= props => 
  props.list.map(e => (
    <div key={e.objectID}>
      <span><a href={e.url}>{e.title}</a></span>
      <span>{e.author}</span>
      <span>{e.num_comments}</span>
      <span>{e.points}</span>
    </div>
  ));

  
export default App
  

