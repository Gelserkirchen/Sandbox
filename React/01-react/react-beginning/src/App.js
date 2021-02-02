import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://opportunities.sriexecutive.com/wp-content/uploads/2018/08/IMG-Academy.jpg' className='imagine' alt='23'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F21800000%2FBanner-P-summer448-21813774-2560-1024.jpg&f=1&nofb=1" alt=""/></div>
        <div><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large%2Fclose-up-of-cat-face-daniele-carotenuto-photography.jpg&f=1&nofb=1" alt=""/></div>
        <div>
          ava + description
        </div>

        <div>
          My posts
          <div>
            New post
          </div>
        </div>

        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
