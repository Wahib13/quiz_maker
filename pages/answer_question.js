import Quiz from '../components/Quiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "next/router"
import styles from '../styles/Home.module.css'

export default withRouter(({ router: { query } }) => {
    console.log(query)
    const data = JSON.parse(query.data);
    console.log(data)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Quiz objective_questions={data} />
            </main>
        </div >
    )
});