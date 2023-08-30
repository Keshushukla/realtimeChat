import { MultiChatSocket, MultiChatWindow,useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '064f4329-7ee1-4f9b-81dd-ab0f579b2553', 
    props.user.username, 
    props.user.secret
    );
    return (
      <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: "100%"}} />
        </div>
      )
  }
  export default ChatsPage;