import { ThumbsUp, Trash } from 'phosphor-react';
import stylecomment from './comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
interface CommnetProps{
    content: string;
    onDeletecomment: (comment: string) => void;
 }
export function Comment({content , onDeletecomment}:CommnetProps){
    const [likecount, setLikeCount] = useState(0);
    function deleteComment(){
        onDeletecomment(content)
    }
    function handleLikeCount(){
        setLikeCount(likecount + 1);
    }
    return(
        <div className={stylecomment.comment}>
            <Avatar  hasBorder={false}src="https://github.com/guilhermesachinelli.png" alt=""/>
            <div className={stylecomment.commentBox}>
                <div className={stylecomment.commentContent}>
                    <header>
                        <div className={stylecomment.authorAndTime}>
                            <strong>Guilherme Godoy</strong>
                            <time title="23 de Junho as 13:19" dateTime="2023-06-23 13:19:18">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={deleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp/>
                        Aplaudir <span>{likecount}</span>
                        </button>
                </footer>
            </div>
        </div>
    )
}