// App.jsx

import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default App;