import React from 'react'

const list = [
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
];


export default function App() {
  return (
  <div>
    <h1>Gal Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <hr />
    <List />
    <List />
  </div>
  )
}



const List= ()=> (
    <div>
      {list.map(e => 
          <div key={e.objectID}>
            <span><a href={e.url}>{e.title}</a></span>
            <span>{e.author}</span>
            <span>{e.num_comments}</span>
            <span>{e.points}</span>
          </div>
      )}
    </div>)
  

