import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path}className={navData => navData.isActive ? s.active : s.item}>
            {props.name}
        </NavLink>
    )
} 

const Message = (props) => {
    return <div className="dialog">{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
    ]
    let messageData = [
        {id: 1, message: 'Hellow'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What`s your name?'},
        {id: 4, message: 'My name is Sasha'},
        {id: 5, message: 'Good day!'},
    ]
	return (
    <div>
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
            </div>
        </div>
    </div>
	);
}

export default Dialogs;