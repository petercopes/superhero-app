import styles from "./Error.module.css"
const Error = (props) =>{
    return(
        <div className={styles.errorText}>
            <p>{props.children}</p>
        </div>
    )
}
export default Error;