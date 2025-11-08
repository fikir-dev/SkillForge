import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'SkillForge API running' })
})

app.post('/api/generate', (req, res) => {
  const { careerGoal } = req.body

  // Mock response - replace with AI logic later
  const mockNewsletter = `Welcome to your personalized SkillForge newsletter!

Based on your career goal: "${careerGoal || 'General Career Growth'}"

Here are your skill insights:
- Identify key skills needed for your goal
- Track your learning progress
- Get personalized recommendations
- Stay motivated with weekly updates

This is a placeholder response. AI integration coming soon!`

  res.json({
    newsletter: mockNewsletter
  })
})

app.listen(PORT, () => {
  console.log(`🚀 SkillForge API server running on http://localhost:${PORT}`)
})

