import React from 'react';
import './App.css';

function App() {
  return (
    <div id="maincontent">
      <h2>Mawaba Pascal Dao</h2>
      <p style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <a href="/MawabaPascalDaoResume.pdf" title="Resume" target="_blank">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </a>
        <a href="https://github.com/PascalPolygon" title="GitHub">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/mawaba-dao/" title="LinkedIn">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://scholar.google.com/citations?user=-pQBBjoAAAAJ&hl=en&oi=ao" title="Google Scholar">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
        </a>

      </p>
      
      Some things about me:
      <ul>
        <li>Grew up in <a href="https://www.britannica.com/place/Togo">Lomé, Togo</a></li>
        <li>Been coding since 2015</li>
        <li>PhD Candidate in Computer Engineering at Florida Institute of Technology, Defending in August 2025</li>
        <li>Working on Group Relative Policy Optimization with variational disagreement reward for exploration <a href="https://github.com/PascalPolygon/grpo-vdr">(GRPO-VDR)</a> </li>
        <li>Built a fork of Hugging Face's <a href="https://github.com/PascalPolygon/trl">TRL</a> with custom Bayesian Active Learning by Disagreement (BALD) bonus</li> 
        <li>See my <a href="https://scholar.google.com/citations?user=-pQBBjoAAAAJ&hl=en&oi=ao">publications</a></li>
        <li>Live in Florida</li>
        <li>Train Brazilian Jiu-Jitsu</li>
        <li>Passionate about building AI agents through bio-inspired approaches</li>
      </ul>

      Some things I believe:
      <ul>

        <li>Language is the map, not the territory
           <ul>
             <li>Language-based learning is a top-down approach that may be inherently limited</li>
             <li>Bottom-up, embodied approaches such as world models are likely critical to achieving true intelligence</li>
             <li>Living organisms learn through bottom-up interaction with their environment, not through language or observation alone</li>
             <li>Language is the icing on the cake</li>
           </ul>
         </li>

        <li>The bridge matters less than who it carries across</li>
        <ul>
          <li>Technology is for people</li>
          <li>Better technology does not de-facto mean a better society</li>
          <li>We must be thoughtful about the technology we build</li>
          <li>Simple solutions are often the best solutions</li>
          <li>User experience matters more than flashy features</li>
        </ul>

        <li>Knowledge wants to free</li>
        <ul>
          <li>Collaboration accelerates progress</li>
          <li>Transparency builds trust</li>
          <li>Give back to the community that helped you grow</li>
        </ul>

      </ul>
    </div>
  );
}

export default App;