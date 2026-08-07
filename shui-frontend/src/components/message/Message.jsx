import './index.css';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react';

const Message = ({ message }) => {
    return (
        <article className="message">
            <h3 className="message__initials">
                { message.user.firstname.substring(0, 1) }
                { message.user.lastname.substring(0, 1) }
            </h3>
            <div className="message__content">
                <div className="message__content-top">
                    <h4 className="message__user">{ message.user.username }</h4>
                    <p className="message__date">{ message.date }</p>
                </div>
                <p className="message__text">
                    { message.text }
                </p>
            </div>
            <div className="message__icon-group">
                <PencilIcon 
                    size={20}
                    weight="regular"
                    color="blue"
                />
                <TrashIcon 
                    size={20}
                    weight="regular"
                    color="red"
                />
            </div>
        </article>
    )
}

export default Message