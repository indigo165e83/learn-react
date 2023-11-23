import { LevelContext } from './level-context0201'

export default function Section({ children, Level }) {
  return (
    <section className="section">
      <LevelContext.Provider value={Level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}