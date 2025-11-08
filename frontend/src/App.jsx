import { useState } from 'react'
import './index.css'

function App() {
  const [selectedRole, setSelectedRole] = useState('backend-dev')
  const userName = 'Alex Morgan' // Dummy name

  // General career roles configuration
  const generalRoles = {
    'frontend-dev': {
      name: 'Front End Dev',
      available: true,
      progress: 72,
      skills: [
        { name: 'React', current: 88, required: 90, status: 'good' },
        { name: 'JavaScript/TypeScript', current: 85, required: 90, status: 'good' },
        { name: 'CSS/SCSS', current: 80, required: 85, status: 'good' },
        { name: 'State Management', current: 70, required: 85, status: 'needs-work' },
        { name: 'UI/UX Design', current: 60, required: 75, status: 'needs-work' },
        { name: 'Performance Optimization', current: 55, required: 80, status: 'critical' },
      ],
      recommendations: [
        'Master React performance optimization techniques - critical for senior roles',
        'Build 2-3 complex state management projects using Redux or Zustand',
        'Improve UI/UX design skills through design system courses',
        'Contribute to open-source frontend libraries to showcase expertise'
      ]
    },
    'backend-dev': {
      name: 'Back End Dev',
      available: true,
      progress: 68,
      skills: [
        { name: 'Node.js', current: 85, required: 90, status: 'good' },
        { name: 'Python', current: 70, required: 85, status: 'needs-work' },
        { name: 'System Design', current: 60, required: 90, status: 'needs-work' },
        { name: 'Database Design', current: 75, required: 85, status: 'good' },
        { name: 'API Development', current: 80, required: 85, status: 'good' },
        { name: 'Cloud Services (AWS)', current: 45, required: 80, status: 'critical' },
      ],
      recommendations: [
        'Focus on AWS certification - this is a critical gap for your target role',
        'Complete 2-3 system design projects to strengthen your portfolio',
        'Contribute to open-source Python projects to demonstrate expertise',
        'Take an advanced Node.js course to reach the 90% proficiency target'
      ]
    },
    'ml-engineering': {
      name: 'ML Engineering',
      available: true,
      progress: 55,
      skills: [
        { name: 'Python', current: 80, required: 90, status: 'good' },
        { name: 'Machine Learning', current: 65, required: 85, status: 'needs-work' },
        { name: 'Deep Learning', current: 50, required: 80, status: 'critical' },
        { name: 'Data Processing', current: 70, required: 85, status: 'needs-work' },
        { name: 'MLOps', current: 40, required: 75, status: 'critical' },
        { name: 'Statistics & Math', current: 60, required: 80, status: 'needs-work' },
      ],
      recommendations: [
        'Complete a deep learning specialization course (TensorFlow/PyTorch)',
        'Build end-to-end ML pipeline projects with MLOps tools',
        'Strengthen statistics and mathematics foundations',
        'Contribute to ML open-source projects to build credibility'
      ]
    },
    'devops': {
      name: 'DevOps',
      available: true,
      progress: 62,
      skills: [
        { name: 'CI/CD Pipelines', current: 75, required: 85, status: 'good' },
        { name: 'Docker & Kubernetes', current: 70, required: 85, status: 'needs-work' },
        { name: 'Cloud Infrastructure', current: 65, required: 85, status: 'needs-work' },
        { name: 'Monitoring & Logging', current: 60, required: 80, status: 'needs-work' },
        { name: 'Infrastructure as Code', current: 55, required: 80, status: 'critical' },
        { name: 'Scripting (Bash/Python)', current: 80, required: 85, status: 'good' },
      ],
      recommendations: [
        'Master Infrastructure as Code with Terraform or CloudFormation',
        'Get certified in Kubernetes (CKA) to validate your skills',
        'Build comprehensive CI/CD pipelines for complex projects',
        'Learn advanced cloud monitoring and observability tools'
      ]
    },
    'cloud-dev': {
      name: 'Cloud Dev',
      available: true,
      progress: 58,
      skills: [
        { name: 'AWS Services', current: 60, required: 85, status: 'needs-work' },
        { name: 'Azure/GCP', current: 45, required: 75, status: 'critical' },
        { name: 'Serverless Architecture', current: 50, required: 80, status: 'critical' },
        { name: 'Cloud Security', current: 55, required: 80, status: 'critical' },
        { name: 'Containerization', current: 70, required: 85, status: 'needs-work' },
        { name: 'Cloud Networking', current: 50, required: 75, status: 'critical' },
      ],
      recommendations: [
        'Get AWS Solutions Architect certification',
        'Build serverless applications using Lambda, API Gateway',
        'Master multi-cloud deployment strategies',
        'Focus on cloud security best practices and compliance'
      ]
    },
    'systems-dev': {
      name: 'Systems Dev',
      available: true,
      progress: 50,
      skills: [
        { name: 'C/C++', current: 65, required: 85, status: 'needs-work' },
        { name: 'Systems Programming', current: 55, required: 85, status: 'critical' },
        { name: 'Operating Systems', current: 60, required: 85, status: 'needs-work' },
        { name: 'Concurrency & Parallelism', current: 50, required: 80, status: 'critical' },
        { name: 'Memory Management', current: 55, required: 80, status: 'critical' },
        { name: 'Performance Optimization', current: 60, required: 85, status: 'needs-work' },
      ],
      recommendations: [
        'Deep dive into operating systems internals',
        'Build low-level systems projects (OS, compilers, databases)',
        'Master concurrency patterns and parallel algorithms',
        'Study memory management and optimization techniques'
      ]
    }
  }

  // Company-specific roles configuration
  const companyRoles = {
    'meta-intern': {
      name: 'Meta Intern',
      available: true,
      progress: 45,
      skills: [
        { name: 'React/React Native', current: 75, required: 85, status: 'needs-work' },
        { name: 'Data Structures & Algorithms', current: 70, required: 90, status: 'needs-work' },
        { name: 'System Design Basics', current: 50, required: 75, status: 'critical' },
        { name: 'C++/Python', current: 65, required: 80, status: 'needs-work' },
        { name: 'Problem Solving', current: 72, required: 85, status: 'needs-work' },
        { name: 'Communication Skills', current: 80, required: 85, status: 'good' },
      ],
      recommendations: [
        'Practice LeetCode problems daily - Meta focuses heavily on algorithms',
        'Build a React project showcasing state management and performance optimization',
        'Study system design fundamentals for technical interviews',
        'Prepare behavioral questions using STAR method - Meta values culture fit'
      ]
    },
    'google-developer': {
      name: 'Google Developer',
      available: true,
      progress: 52,
      skills: [
        { name: 'Algorithms & Data Structures', current: 70, required: 90, status: 'needs-work' },
        { name: 'System Design', current: 55, required: 85, status: 'critical' },
        { name: 'C++/Java/Python', current: 75, required: 85, status: 'good' },
        { name: 'Distributed Systems', current: 45, required: 80, status: 'critical' },
        { name: 'Code Review & Best Practices', current: 65, required: 85, status: 'needs-work' },
        { name: 'Large-Scale Systems', current: 40, required: 75, status: 'critical' },
      ],
      recommendations: [
        'Master algorithms - Google interviews are algorithm-heavy',
        'Study distributed systems concepts (consistency, scalability, reliability)',
        'Practice system design for large-scale applications',
        'Contribute to open-source projects to demonstrate code quality'
      ]
    },
    'amazon-sde': {
      name: 'Amazon SDE',
      available: true,
      progress: 58,
      skills: [
        { name: 'Java/Python', current: 78, required: 85, status: 'good' },
        { name: 'System Design', current: 62, required: 85, status: 'needs-work' },
        { name: 'AWS Services', current: 55, required: 80, status: 'critical' },
        { name: 'Distributed Systems', current: 50, required: 75, status: 'critical' },
        { name: 'Leadership Principles', current: 70, required: 85, status: 'needs-work' },
        { name: 'Code Quality & Testing', current: 68, required: 85, status: 'needs-work' },
      ],
      recommendations: [
        'Study Amazon Leadership Principles - they\'re crucial for interviews',
        'Get AWS certification (Solutions Architect or Developer)',
        'Practice system design with focus on scalability and reliability',
        'Prepare behavioral questions using Amazon\'s leadership principles'
      ]
    },
    'apple-engineer': {
      name: 'Apple Engineer',
      available: true,
      progress: 48,
      skills: [
        { name: 'Swift/Objective-C', current: 60, required: 85, status: 'critical' },
        { name: 'iOS/macOS Development', current: 55, required: 85, status: 'critical' },
        { name: 'UI/UX Design Principles', current: 65, required: 80, status: 'needs-work' },
        { name: 'Performance Optimization', current: 58, required: 80, status: 'critical' },
        { name: 'Memory Management', current: 62, required: 80, status: 'needs-work' },
        { name: 'Human Interface Guidelines', current: 50, required: 75, status: 'critical' },
      ],
      recommendations: [
        'Master Swift and iOS development fundamentals',
        'Build polished iOS apps following Apple\'s design guidelines',
        'Focus on performance optimization and memory management',
        'Study Apple\'s Human Interface Guidelines thoroughly'
      ]
    },
    'microsoft-engineer': {
      name: 'Microsoft Engineer',
      available: true,
      progress: 55,
      skills: [
        { name: 'C#/.NET', current: 70, required: 85, status: 'needs-work' },
        { name: 'Algorithms & Problem Solving', current: 72, required: 85, status: 'needs-work' },
        { name: 'System Design', current: 58, required: 80, status: 'needs-work' },
        { name: 'Azure Services', current: 50, required: 75, status: 'critical' },
        { name: 'Software Engineering Practices', current: 68, required: 85, status: 'needs-work' },
        { name: 'Collaboration & Teamwork', current: 75, required: 85, status: 'good' },
      ],
      recommendations: [
        'Master C# and .NET framework fundamentals',
        'Practice coding problems focusing on clean code and best practices',
        'Learn Azure cloud services and deployment',
        'Prepare for behavioral interviews emphasizing teamwork and collaboration'
      ]
    },
    'google-intern': {
      name: 'Google Intern',
      available: true,
      progress: 42,
      skills: [
        { name: 'Algorithms & Data Structures', current: 68, required: 85, status: 'needs-work' },
        { name: 'C++/Java/Python', current: 72, required: 80, status: 'good' },
        { name: 'Problem Solving', current: 65, required: 80, status: 'needs-work' },
        { name: 'System Design Basics', current: 45, required: 70, status: 'critical' },
        { name: 'Communication Skills', current: 75, required: 80, status: 'good' },
        { name: 'Technical Writing', current: 60, required: 75, status: 'needs-work' },
      ],
      recommendations: [
        'Focus on LeetCode medium and hard problems - Google interviews are challenging',
        'Build projects that demonstrate problem-solving and coding skills',
        'Practice explaining your thought process clearly during coding',
        'Study Google\'s engineering culture and values'
      ]
    },
    'amazon-intern': {
      name: 'Amazon Intern',
      available: true,
      progress: 40,
      skills: [
        { name: 'Java/Python', current: 70, required: 80, status: 'needs-work' },
        { name: 'Data Structures', current: 65, required: 80, status: 'needs-work' },
        { name: 'Problem Solving', current: 62, required: 75, status: 'needs-work' },
        { name: 'Leadership Principles', current: 55, required: 75, status: 'critical' },
        { name: 'Communication Skills', current: 72, required: 80, status: 'good' },
        { name: 'Team Collaboration', current: 68, required: 75, status: 'good' },
      ],
      recommendations: [
        'Study Amazon\'s 14 Leadership Principles thoroughly',
        'Practice coding problems with focus on clean, efficient solutions',
        'Prepare STAR method stories for behavioral interviews',
        'Build projects that showcase ownership and customer obsession'
      ]
    }
  }

  // Combine all roles for lookup
  const allRoles = { ...generalRoles, ...companyRoles }

  const currentRole = allRoles[selectedRole]
  const overallProgress = currentRole.progress
  const skillsData = currentRole.skills
  const recommendations = currentRole.recommendations

  // Calculate stats from skills
  const stats = {
    total: skillsData.length,
    onTrack: skillsData.filter(s => s.status === 'good').length,
    needsWork: skillsData.filter(s => s.status === 'needs-work').length,
    critical: skillsData.filter(s => s.status === 'critical').length,
  }

  const getProgressColor = (status) => {
    switch(status) {
      case 'good': return '#10b981'
      case 'needs-work': return '#f59e0b'
      case 'critical': return '#ef4444'
      default: return '#94a3b8'
    }
  }

  const getProgressLabel = (status) => {
    switch(status) {
      case 'good': return 'On Track'
      case 'needs-work': return 'Needs Work'
      case 'critical': return 'Critical Gap'
      default: return 'Unknown'
    }
  }

  const handleRoleSelect = (roleKey) => {
    if (allRoles[roleKey] && allRoles[roleKey].available) {
      setSelectedRole(roleKey)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>SkillForge AI</h1>
          <p className="header-subtitle">Your Career Progress Dashboard</p>
        </div>
      </header>
      
      <main className="main">
        {/* Welcome Section */}
        <section className="card welcome-section">
          <h2>Welcome, {userName}</h2>
          <div className="profile-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="profile-link">
              <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div className="profile-info">
                <span className="profile-platform">GitHub</span>
                <span className="profile-username">@alexmorgan</span>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="profile-link">
              <svg className="profile-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="profile-info">
                <span className="profile-platform">LinkedIn</span>
                <span className="profile-username">Alex Morgan</span>
              </div>
            </a>
          </div>
        </section>

        {/* General Career Roles Section */}
        <section className="card goal-section">
          <h2>General Career Roles</h2>
          <p className="section-description">Work towards front-end, back-end, or specialized roles</p>
          <div className="role-buttons-grid">
            {Object.entries(generalRoles).map(([key, role]) => (
              <button
                key={key}
                className={`role-button ${selectedRole === key ? 'selected' : ''}`}
                onClick={() => handleRoleSelect(key)}
                disabled={!role.available}
              >
                <span className="role-name">{role.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Company-Specific Roles Section */}
        <section className="card goal-section company-roles-section">
          <h2>Company-Specific Roles</h2>
          <p className="section-description">Target specific companies like Meta, Google, Amazon, and more</p>
          <div className="role-buttons-grid">
            {Object.entries(companyRoles).map(([key, role]) => (
              <button
                key={key}
                className={`role-button ${selectedRole === key ? 'selected' : ''}`}
                onClick={() => handleRoleSelect(key)}
                disabled={!role.available}
              >
                <span className="role-name">{role.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Overall Progress */}
        <section className="card progress-card">
          <div className="progress-header">
            <h2>Overall Progress</h2>
            <span className="progress-percentage">{overallProgress}%</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
          <p className="progress-description">
            You're {overallProgress}% of the way to becoming a {currentRole.name}
          </p>
        </section>


        {/* Skills Analysis */}
        {skillsData.length > 0 && (
          <section className="card skills-section">
            <h2>Skills Analysis</h2>
            <p className="section-description">
              Current proficiency vs. required for your target role
            </p>
            <div className="skills-list">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span 
                      className="skill-status"
                      style={{ color: getProgressColor(skill.status) }}
                    >
                      {getProgressLabel(skill.status)}
                    </span>
                  </div>
                  <div className="skill-progress-container">
                    <div className="skill-progress-labels">
                      <span>Current: {skill.current}%</span>
                      <span>Required: {skill.required}%</span>
                    </div>
                    <div className="skill-progress-bars">
                      <div 
                        className="skill-progress-bar current"
                        style={{ width: `${skill.current}%` }}
                      ></div>
                      <div 
                        className="skill-progress-bar required"
                        style={{ width: `${skill.required}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="card recommendations-section">
            <h2>AI Recommendations</h2>
            <p className="section-description">
              Personalized insights to help you reach your goal
            </p>
            <ul className="recommendations-list">
              {recommendations.map((rec, index) => (
                <li key={index} className="recommendation-item">
                  <span className="recommendation-icon">💡</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Stats Grid */}
        {stats.total > 0 && (
          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Skills Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.onTrack}</div>
              <div className="stat-label">Skills on Track</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.needsWork}</div>
              <div className="stat-label">Skills Need Work</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.critical}</div>
              <div className="stat-label">Critical Gaps</div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
