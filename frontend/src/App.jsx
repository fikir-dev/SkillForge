import { useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [careerGoal, setCareerGoal] = useState('')
  const [newsletter, setNewsletter] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!careerGoal.trim()) return

    setLoading(true)
    try {
      const response = await axios.post('/api/generate', {
        careerGoal: careerGoal
      })
      setNewsletter(response.data.newsletter)
    } catch (error) {
      console.error('Error generating newsletter:', error)
      setNewsletter('Error: Could not generate newsletter. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>SkillForge AI</h1>
      </header>
      
      <main className="main">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="careerGoal">Career Goal</label>
            <input
              id="careerGoal"
              type="text"
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              placeholder="Enter your career goal..."
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading || !careerGoal.trim()}>
            {loading ? 'Generating...' : 'Generate Newsletter'}
          </button>
        </form>

        {newsletter && (
          <div className="newsletter">
            <h2>Your Newsletter</h2>
            <p>{newsletter}</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

