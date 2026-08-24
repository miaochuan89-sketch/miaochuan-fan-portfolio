'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  { number: '01', mark: 'RT', title: 'Real-time Environment', discipline: 'Unreal · Worldbuilding', summary: 'A cinematic environment built from spatial narrative, modular systems and real-time light.' },
  { number: '02', mark: 'UX', title: 'UCLA Spatial Research', discipline: 'Research · Experience', summary: 'Design research translated into an inhabitable system, sequence and atmosphere.' },
  { number: '03', mark: 'ME', title: 'Modular Energy Landscape', discipline: 'Architecture · Systems', summary: 'Infrastructure reframed as a rule-based kit for architecture and digital worldbuilding.' },
  { number: '04', mark: 'AT', title: 'Agence TER', discipline: 'Professional Work', summary: 'Selected professional contributions across landscape, modeling and visual development.' },
  { number: '05', mark: 'AI', title: 'AI Visual Development', discipline: 'Workflow · Narrative', summary: 'Controlled image workflows connecting spatial models, iteration and human design decisions.' },
];

const cubeFaces = [
  [0, 1, 2, 3], [4, 2, 0, 1], [3, 4, 1, 2],
  [0, 3, 4, 2], [1, 0, 3, 4], [2, 4, 1, 0],
];
const faceNames = ['front', 'back', 'right', 'left', 'top', 'bottom'];

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [gridOn, setGridOn] = useState(true);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const currentProject = activeProject === null ? null : projects[activeProject];

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const move = (event: PointerEvent) => {
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;
      stage.style.setProperty('--cube-x', `${-18 - y * 36}deg`);
      stage.style.setProperty('--cube-y', `${28 + x * 48}deg`);
      stage.style.setProperty('--stage-x', `${x * 12}px`);
      stage.style.setProperty('--stage-y', `${y * 10}px`);
    };

    addEventListener('pointermove', move, { passive: true });
    return () => removeEventListener('pointermove', move);
  }, []);

  return (
    <main className={`site-shell ${gridOn ? '' : 'grid-off'}`}>
      <div className="ruler ruler-x" aria-hidden="true" />
      <div className="ruler ruler-y" aria-hidden="true" />

      <header className="site-header">
        <button className="grid-toggle" type="button" aria-pressed={gridOn} onClick={() => setGridOn((value) => !value)}>
          Grid / {gridOn ? 'On' : 'Off'}
        </button>
        <nav aria-label="Primary navigation">
          <a href="#selected">Selected Work,</a>
          <a href="#index">Index,</a>
          <a href="#profile">Profile</a>
        </nav>
        <p className="availability">UCLA MSAUD · Los Angeles</p>
        <a className="contact" href="#contact">Contact?</a>
      </header>

      <section className={`hero selection-${activeProject === null ? 'idle' : activeProject + 1}`} id="selected">
        <div className="identity-block">
          <h1>Miaochuan Fan</h1>
          <p>Spatial / Environment Designer</p>
        </div>
        <div className="edition-block" aria-label="Portfolio edition">
          <p>Portfolio N°001 / 2026</p>
          <p>Architecture → Real-time</p>
        </div>
        <div className={`hero-word ${currentProject ? 'project-word' : 'name-word'}`} aria-hidden="true" key={currentProject?.mark ?? 'name'}>
          {currentProject ? <span>{currentProject.mark}</span> : <><span>MIAOCHUAN</span><span>FAN</span></>}
        </div>
        <div className="object-stage" ref={stageRef} aria-hidden="true">
          <div className="cube-pointer">
            <div className="cube">
              {cubeFaces.map((tiles, faceIndex) => (
                <div className={`cube-face face-${faceNames[faceIndex]}`} key={faceNames[faceIndex]}>
                  {tiles.map((projectIndex, tileIndex) => (
                    <span className={`cube-tile project-${projectIndex + 1} ${activeProject === null || projectIndex === activeProject ? 'is-lit' : 'is-dim'}`} key={`${faceIndex}-${tileIndex}`}>
                      {projects[projectIndex].mark}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="preview-caption" aria-live="polite">
          {currentProject ? <>
            <span>{currentProject.number} / 05</span>
            <p>{currentProject.title}</p>
            <p>{currentProject.discipline}</p>
            <a href={`#project-${currentProject.number}`}>View project ↘</a>
          </> : <><span>Selected works</span><p>Move across the index to explore.</p></>}
        </div>
        <ol className="project-list" id="index" onPointerLeave={() => setActiveProject(null)}>
          {projects.map((project, index) => (
            <li key={project.number}>
              <button
                type="button"
                className={index === activeProject ? 'is-active' : ''}
                aria-pressed={index === activeProject}
                onClick={() => setActiveProject(index)}
                onPointerEnter={() => setActiveProject(index)}
                onFocus={() => setActiveProject(index)}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-discipline">{project.discipline}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="hero-note">Architecture-trained, working across spatial experience, real-time environments and AI-assisted visual development.</p>
      </section>

      <section className="manifesto" id="profile">
        <p>Five years of architectural thinking, translated into digital worlds.</p>
        <span>Selected work ↓</span>
      </section>

      <div className="project-cases">
        {projects.map((project, index) => (
          <article className={`project-case project-case-${index + 1}`} id={`project-${project.number}`} key={project.number}>
            <header className="case-heading">
              <span>{project.number} / 05</span>
              <h2>{project.title}</h2>
              <p>{project.discipline}</p>
            </header>
            <div className="case-visual" role="img" aria-label={`${project.title} visual placeholder`}>
              <span className="visual-code">MF—{project.number}</span>
              <span className="visual-plane visual-plane-a" />
              <span className="visual-plane visual-plane-b" />
              <span className="visual-plane visual-plane-c" />
            </div>
            <div className="case-copy">
              <p>{project.summary}</p>
              <span>Project imagery + detailed process to be added</span>
            </div>
          </article>
        ))}
      </div>

      <section className="about" id="contact">
        <p className="about-kicker">Profile / 2026</p>
        <h2>Architecture-trained spatial designer exploring real-time environments, worldbuilding and AI-assisted visual development.</h2>
        <div className="about-meta">
          <p>UCLA MSAUD<br />Los Angeles, CA</p>
          <p>Unreal · Blender · Rhino<br />Adobe · AI workflows</p>
          <p>Contact details<br />to be added</p>
        </div>
      </section>

      <footer><span>© 2026 Miaochuan Fan</span><a href="#selected">Back to top ↑</a></footer>
    </main>
  );
}
