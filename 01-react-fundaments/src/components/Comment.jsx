import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img 
                className={styles.avatar}
                src="https://github.com/douglasdl.png" 
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
                                datetime="2022-06-30 09:31:28">
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        Muito bom Douglas, parabéns!! 👏👏
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}