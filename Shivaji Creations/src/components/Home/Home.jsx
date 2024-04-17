import './Home.css'
import DataTable from '../DataTable/Table'


export default function Home() {

  return (
    <>
      <DataTable />
      <div className="add_user"><ion-icon name="person-add-outline"></ion-icon></div>
    </>
  )
}
