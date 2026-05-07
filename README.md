<h1>Iryna Yermak Portfolio</h1>

<p>A professional full-stack portfolio website built with <b>Next.js</b> and <b>MongoDB</b>. This project features a unique sketch-style UI with custom interactive elements and dynamic project filtering.</p>

<hr />

<h2> Tech Stack</h2>
<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>React 18, Next.js (App Router), TypeScript</td>
  </tr>
  <tr>
    <td><b>Styling</b></td>
    <td>CSS Modules, Global Variables (Light/Dark themes)</td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>Next.js API Routes</td>
  </tr>
  <tr>
    <td><b>Database</b></td>
    <td>MongoDB, Mongoose</td>
  </tr>
</table>

<hr />

<h2>📂 Project Structure</h2>
<pre>
iryna-yermak/
├── app/                  # Application routes and pages
│   ├── api/              # Serverless API endpoints
│   ├── projects/         # Projects gallery and dynamic routes
│   └── error.tsx         # Error handling
├── components/           # Reusable React components
│   ├── Button/           # Custom button component
│   ├── Loader/           # Page loading indicator
│   ├── Header/           # Navigation and theme toggle
│   └── ...               # Section-based components
├── lib/                  # Database configuration (mongodb.ts)
├── models/               # Mongoose data schemas
└── types/                # TypeScript definitions
</pre>

<hr />

<h2> Navigation Map</h2>
<ul>
  <li><b>Home</b> — Introduction and overview.</li>
  <li><b>Projects</b> — Filterable work gallery with status handling (loading/error).</li>
  <li><b>Project Details</b> — In-depth view of specific projects.</li>
  <li><b>About & Skills</b> — Professional background and toolkit.</li>
</ul>

<hr />

<h2>👤 Author</h2>
<p><b>Iryna Yermak</b> — Full-stack Developer</p>

<p>
  <a href="https://github.com/IrynaYermak">GitHub</a> • 
  <a href="https://www.linkedin.com/in/iryna-yermak-b118b6255/">LinkedIn</a>
</p>

<hr />

<h2>Getting Started</h2>
<ol>
  <li>Clone the repository</li>
  <li>Run <code>npm install</code> to install dependencies</li>
  <li>Configure your <code>.env.local</code> with <code>MONGODB_URI</code></li>
  <li>Run <code>npm run dev</code> to start the development server</li>
</ol>
