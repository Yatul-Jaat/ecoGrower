import React from 'react'

const Chatapp = ({crop}) => {

    const [text, setText] = useState();

  let chatClicked = async () => {
    

    setText( await main(crop||"rice"));

  };

  return (
    <div>
        {text}
    </div>
  )
}

export default Chatapp