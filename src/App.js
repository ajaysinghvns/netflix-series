// import logo from './logo.svg';
import './Card.css';
import Card from './Card';
import Sdata from './Sdata';

function App() {
  return (
    <>
      <h1>A Netflix Orignal Series</h1>
      <div className="cards">
        {
          Sdata.map(item=><Card key={item.id} sname={item.sname} imgscr={item.imgscr} title={item.title} links={item.links} />)
        }
      </div>
      <footer className="footer">
        <h3>Copyright &copy; 2021, All Right Reserved.</h3>
      </footer>
    </>
  );
}

export default App;
