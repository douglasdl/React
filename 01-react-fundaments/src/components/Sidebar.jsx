import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                
                <Avatar 
                    src="https://github.com/douglasdl.png" 
                />
                
                <strong>Douglas Dias Leal</strong>
                
                <span>Web Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}