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
  const [searchTerm, setSearchTerm] = React.useState('')

  //A在此處引入handleSearch
  const handleSearch = e => {
    // C回到這裏執行這裏的代碼.
    setSearchTerm(e.target.value);
    }

  const searchedStories = stories.filter(story=> 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div>
      <h1> Gal Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

const Search = props => (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  )

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
  

