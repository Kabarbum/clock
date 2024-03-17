
const Main = () => {
    
    return (
      <div className={'main'}>
        <div className="container">
          <ul className={'list'}>
            {
              Array.from({length: 20}, () => {
                return <li className={'list-item'}>1</li>
              })
            }
            
          </ul>
        </div>
      </div>
    );
};

export default Main;