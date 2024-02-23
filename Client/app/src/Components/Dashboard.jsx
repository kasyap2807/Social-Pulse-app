import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
// import './Asserts/App.css'; // Import CSS file for styling
import '../Asserts/test.css'

const SocialMediaButton = ({ platform, index, moveButton, containerClassName, buttonClassName }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'button',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'button',
    hover(item) {
      if (item.index !== index) {
        moveButton(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div className={containerClassName} ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <button className={buttonClassName}>{platform}</button>
    </div>
  );
};


const Dashboard = (props) => {
  const token1 = props.token;
  const [buttons, setButtons] = useState(['Instagram', 'Facebook', 'Twitter', 'etc']);
  useEffect(() => {
    const storedButtons = localStorage.getItem("buttons");
    if (storedButtons) {
      setButtons(JSON.parse(storedButtons));
    }
    else{
      localStorage.setItem("buttons", JSON.stringify(['Instagram', 'Facebook', 'Twitter', 'etc']));
    }
  }, []); // Empty dependency array to ensure the effect runs only once after initial render
  const navigate = useNavigate();
  const functionclick = async() =>{
    localStorage.setItem("buttons", JSON.stringify(buttons));

    navigate('/Social'
          , { state:{
            token:token1
          }}
          );
  }

  const moveButton = (fromIndex, toIndex) => {
    const newButtons = [...buttons];
    newButtons.splice(toIndex, 0, newButtons.splice(fromIndex, 1)[0]);
    setButtons(newButtons);
  };

  return (
    <DndProvider className="conts" backend={HTML5Backend}>
      <div className='innerdiv' onClick={functionclick}>
        {buttons.map((platform, index) => (
          <SocialMediaButton
            key={platform}
            platform={platform}
            index={index}
            moveButton={moveButton}
            containerClassName="button-container"
            buttonClassName="social-button"
          />
        ))}
      </div>
      

    </DndProvider>
  );
};

export default Dashboard;
