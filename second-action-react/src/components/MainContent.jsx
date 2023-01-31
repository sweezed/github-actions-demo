import { useState } from 'react'
import { Header } from './Header'

import HelpArea from './HelpArea'

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false)

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible)
  }

  return (
    <main>
      <button onClick={toggleHelp}>
        {helpVisible ? 'Hides' : 'Shows'} Help
      </button>
      {helpVisible && <HelpArea />}
    </main>
  )
}

export default MainContent
