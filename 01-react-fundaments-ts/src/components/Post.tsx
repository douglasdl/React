import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link' | 'hashtag';
    content: string;
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {

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

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
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