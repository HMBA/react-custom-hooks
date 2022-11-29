import { useRef, useState } from 'react';
import useGetLightMode from 'src/common/hooks/useGetLightMode';
import { ILeftPart } from './leftPart.types';

const LeftPart = ({ setActions }: ILeftPart) => {
  const { isLightMode, setIsLightMode } = useGetLightMode();
  const [sendMessage, setSendMessage] = useState('');
  const [currentButtonNumber, setCurrentButtonNumber] = useState(1);

  const leftPartInnerContainerRef = useRef(null);

  const handleSendMessage = () => {
    const message = `Message Sent: ${sendMessage}`;
    sendToRightPart(message);
    setSendMessage('');
  };

  const sendToRightPart = (message: string) => {
    setActions((prevState: any) => {
      const prevStateClone = { ...prevState };
      const length = Object.keys(prevStateClone).length;
      prevStateClone[length.toString()] = message;
      return { ...prevStateClone };
    });
  };

  const handleLightMode = () => {
    document.body.classList.toggle('light-theme');
    setIsLightMode((prevState) => !prevState);

    const message = `[${new Date().toLocaleString()}] Theme was set to ${
      isLightMode ? 'Dark' : 'Light'
    }`;

    sendToRightPart(message);
  };

  const handleAddButton = () => {
    if (!leftPartInnerContainerRef) return;
    setCurrentButtonNumber((prevState) => prevState + 1);

    const button: HTMLElement = document.createElement('button');
    button.textContent = `Button ${currentButtonNumber}`;
    button.addEventListener('click', () => {
      const message = `Button ${currentButtonNumber} clicked`;
      sendToRightPart(message);
    });

    const div: HTMLElement = document.createElement('div');
    div.appendChild(button);

    const container: any = leftPartInnerContainerRef.current;
    container.appendChild(div);

    const message = `Button ${currentButtonNumber} added`;
    sendToRightPart(message);
  };

  return (
    <div className="left-part_container">
      <div
        className="left-part_inner-container"
        ref={leftPartInnerContainerRef}
      >
        <div>
          <button onClick={handleLightMode}>
            Set {isLightMode ? 'Dark' : 'Light'} Theme
          </button>
        </div>
        <div className="left-part_textarea-container">
          <textarea
            value={sendMessage}
            onChange={(e: any) => setSendMessage(e?.target?.value)}
          />
          <button
            onClick={handleSendMessage}
            disabled={sendMessage?.length === 0}
          >
            Send
          </button>
        </div>
        <div>
          <button onClick={handleAddButton}>
            Add Button {currentButtonNumber}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
