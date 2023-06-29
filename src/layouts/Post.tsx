import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import stylepost from './Post.module.css';
import { Comment } from './comment';
import { FormEvent, useState , ChangeEvent, InvalidEvent } from 'react';
interface Author {
    name : string;
    role: string;
    avatarUrl: string;
}
interface Content{
type : 'paragraph' | 'link';
content: string;
}
interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}
export function Post({ author, publishedAt, content }:PostProps) {
    const [comments, setComments] = useState([
        'Post muito legal'
    ])
    const [newCommentText, setNewCommentText] = useState('')
    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })
    const publishedDateRalativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    function createNewComment(event:FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }
    function createNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    function invalidComment(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('esse campo é obrigatório');
    }
    function deletecomment(commentToDelete : string){
        const deleteOneComment = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComments(deleteOneComment);
    }
    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={stylepost.post}>
            <header className={stylepost.head}>
                <div className={stylepost.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={stylepost.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRalativeToNow}
                </time>
            </header>
            <div className={stylepost.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p  key={line.content}><a href="">{line.content}</a></p>;
                    }
                })}
            </div>
            <form onSubmit={createNewComment} className={stylepost.commentForms}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={createNewCommentChange}
                    onInvalid={invalidComment}
                    required
                />
                <footer>
                    <button type="submit"
                     disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={stylepost.commentList}>
                {comments.map((comment =>{
                    return <Comment key={comment} content={comment} onDeletecomment={deletecomment}/>
                }))}
            </div>
        </article>
    )
}