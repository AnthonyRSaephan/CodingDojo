import React, { Component } from 'react'
import styles from '../css/styles.module.css'

export class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.flex}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main