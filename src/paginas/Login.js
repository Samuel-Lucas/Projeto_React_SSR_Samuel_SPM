
// Função 'Login' que vai ser exportada para rodar no SSR

import React from 'react'
import styles from '../pages/Index.module.css'

export default function Login() {

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Games <i>Shelter</i></h2>
            <form className={styles.login} >
                <h1>Login</h1>
                <div className={styles.material}>
                    <label>E-mail</label><br />
                    <input type="text" name="username" id="username" autoComplete="off" className={styles.control} required />
                </div>
                <div className={styles.material}>
                    <label>Senha</label><br />
                    <input type="password" name="password" id="password" autoComplete="off" className={styles.control} required />
                </div>
                <button type="submit" className={styles.btn}>Entrar</button>
            </form>
        </div>
    )
}