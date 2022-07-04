import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) =>{
            return state + 1
        });
    }
    
    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} 
                src="https://github.com/Akiyabank.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Douglas Dias Leal
                            </strong>
                            <time
                                title="30 de Junho às 09h31" 
                                dateTime="2022-06-30 09:31:28">
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button 
                            title="Deletar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span> 
                    </button>
                </footer>
            </div>
        </div>
    )
}