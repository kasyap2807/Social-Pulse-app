import React from 'react'
import '../Asserts/Eroor.css'
function Error() {
  return (
    <div className='body'>   <div id="container11">
      <div className="toph">
        <h1 className='forb'>ERROR</h1>
        <h1 className="number">403</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1278 1080">
        <defs>
          <style>
            {`
              .cls-4{fill:#ff9}
              .cls-5{fill:#acedfc}
              .cls-10{fill:#68af2f}
              .cls-12{opacity:0.61}
              .cls-13{fill:#fff}
              .cls-16{fill:#5a5e5e}
            `}
          </style>
          <clipPath id="clip-path">
            <circle cx="604.59" cy="550.14" r="189.55" fill="none" />
          </clipPath>
          <clipPath id="clip-path-2">
            <circle className="cls-1" cx="996" cy="319.44" r="81.34" />
          </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <rect width="1278" height="1080" fill="none" id="background" />
          <g opacity="0.85" id="stars">
            <polygon className="cls-4" points="377 296 386.19 312.81 403 322 386.19 331.19 377 348 367.81 331.19 351 322 367.81 312.81 377 296" />
            <polygon className="cls-5" points="378.5 410 383.98 420.02 394 425.5 383.98 430.98 378.5 441 373.02 430.98 363 425.5 373.02 420.02 378.5 410" />
            {/* Other star polygons */}
          </g>
          <g id="moon2">
            <circle cx="995.66" cy="319.34" r="81.34" fill="#8a9091" />
            {/* Other moon elements */}
          </g>
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="earth">
              <circle cx="604.59" cy="550.14" r="189.55" fill="#25aece" />
              {/* Other earth elements */}
            </g>
            <g id="moon">
              <circle cx="995.66" cy="319.34" r="81.34" fill="#8a9091" />
              {/* Other moon elements */}
            </g>
          </g>
        </g>
      </svg>
      <h1 className='forb'>FORBIDDEN</h1>
      <div id="details">
        <ul>
          <li><span>AGE</span><span>4.543B</span></li>
          <li><span>POPULATION</span><span>7.53B</span></li>
          <li><span>DISTANCE FROM SUN</span><span>92.96M</span></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Error