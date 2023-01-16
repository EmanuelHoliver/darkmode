import React from 'react'
import styles from './styles.css';

function Home() {

  
  return (
    <div className='Space'>
 
      <form>
        <label>Email/Username: </label>
        <input type="text" placeholder=" Email/username" />
        <br />
        <label>Password: </label>
        <input type="password" placeholder=" Password" />
        <br />
        <input type="submit" value="Feito!" />
      </form>
    </div>
  )
}

export default Home;
