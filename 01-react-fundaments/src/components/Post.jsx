import { useState } from 'react'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'


export function Post({ author, content, publishedAt }) {

    const  [comments, setComments] = useState([
        "Que legal!"
    ])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                { content.map(row => {
                    if(row.type === "paragraph") {
                        return (
                            <p key={row.content}>
                                {row.content}
                            </p>
                        )
                    } else if(row.type === "link") {
                        return (
                            <p key={row.content}>
                                <a href="">{row.content}</a>
                            </p>
                        )
                    } else if(row.type === "hashtag") {
                        return (
                            <p key={row.content}>
                                <a href="">{row.content}</a>
                            </p>
                        )
                    }
                }) }
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                
                { comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}

            </div>

        </article>
    )
}