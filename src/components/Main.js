import DragItem from "./DragItem";

const Main = () => {
  
    return (
      <div className={'main'}>
        <div className="container">
          <ul className={'list'}>
            {
              Array.from({length: 10}, (el) => {
                return (
                <li className={'list-item'} key={el}>
                  <div className={'list-item-button'}>DEL</div>
                  <DragItem>
                    <div className={'list-item-draggable'}>label {el}</div>
                  </DragItem>
                </li>
                )})
            }
          </ul>
        </div>
      </div>
    );
};

export default Main;