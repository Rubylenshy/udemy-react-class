import { useNavigate } from "react-router-dom"
import styles from "./Map.module.css"

function Map() {
    const navigate = useNavigate();

    return (
        <div className={styles.map} onClick={() => navigate('form')}>
            Map
        </div>
    )
}

export default Map
