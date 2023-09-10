import { createChatBotMessage } from 'react-chatbot-kit';
import Prompt from '../widgets/Prompt';
import AgeOptions from '../widgets/AgeOptions';
import Counter from '../widgets/Counter';
const botName = 'StuBot';

const config = {
    initialMessages: [createChatBotMessage(`Hi, Welcome to student info system!`, {
        widget: "Prompt",
        delay: 2000,
    })],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#072565',

        },
        chatButton: {
            backgroundColor: '#072565',
        },
    },
    widgets: [
        {
            widgetName: 'Prompt',
            widgetFunc: (props) => <Prompt {...props} />,
        },
        {
            widgetName: 'AgeOptions',
            widgetFunc: (props) => <AgeOptions {...props} />,
        },
        {
            widgetName: 'Counter',
            widgetFunc: (props) => <Counter {...props} />,
        }
    ],

};

export default config;
